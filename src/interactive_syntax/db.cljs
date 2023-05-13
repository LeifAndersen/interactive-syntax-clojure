(ns interactive-syntax.db
  (:require-macros
   [interactive-syntax.slurp :refer [slurp]])
  (:require [reagent.core :as r :refer [atom]]
            [cljs.spec.alpha :as s]
            [cognitect.transit :as t]
            [alandipert.storage-atom :as storage :refer [local-storage]]
            [interactive-syntax.utils :refer [cb-thread cb-loop]]
            [isomorphic-git]
            ["isomorphic-git/http/web" :as isohttp]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]
            [interactive-syntax.editor :as editor]
            [browserfs]))

(def package (t/read (t/reader :json) (slurp "package.json")))

(def version (str (get package "version") "-SNAPSHOT-"
                  (slurp "src/injectable/date.inject")))
(def files-root "/files")
(def deps-root "/deps")
(def git-root files-root)
(def prompt "> ")
(def end-prompt "<EOF>")
(def shop-url "https://raw.githubusercontent.com/LeifAndersen/visr-deps/main/")
(def Buffer (.-Buffer (browserfs/BFSRequire "buffer")))

(deftype RefAtom [ref]
  IAtom
  IDeref
  (-deref [_]
    (.-current ref))
  IReset
  (-reset! [_ new-value]
    (set! (.-current ref) new-value))
  ISwap
  (-swap! [_ f] (set! (.-current ref) (f (.-current ref))))
  (-swap! [_ f a] (set! (.-current ref) (f (.-current ref) a)))
  (-swap! [_ f a b] (set! (.-current ref) (f (.-current ref) a b)))
  (-swap! [_ f a b more]
    (set! (.-current ref) (apply f (.-current ref) a b more))))

;; -------------------------
;; Atom into datastructure
(defn resolve-path [path db]
  (mapcat (fn [x] (case x
                    :current [:buffers (get-in db [:current])]
                    [x]))
          path))

(deftype DBAtom [db path]
  IAtom
  IDeref
  (-deref [_]
    (get-in @db (resolve-path path @db)))
  IReset
  (-reset! [_ new-value]
    (swap! db (fn [d] (assoc-in d (resolve-path path d) new-value))))
  ISwap
  (-swap! [_ f] (swap! db #(update-in % (resolve-path path %) f)))
  (-swap! [_ f a] (swap! db #(update-in % (resolve-path path %) f a)))
  (-swap! [_ f a b] (swap! db #(update-in % (resolve-path path %) f a b)))
  (-swap! [_ f a b more]
    (swap! db #(apply update-in % (resolve-path path %) a b more)))
  IWatchable
  (-notify-watches [this old new] (do))
  (-add-watch [this key f] (add-watch db [path key]
                                      (fn [k r o n]
                                        (let [old (get-in o (resolve-path path o))
                                              new (get-in n (resolve-path path n))]
                                          (f k r old new)))))
  (-remove-watch [this key] (remove-watch db [path key]))
  IPrintWithWriter
  (-pr-writer [this writer opts]
    (let [p (resolve-path path @db)]
      (-write writer (str "#object[interactive-syntax.db.DBAtom {"))
      (pr-writer p writer opts)
      (-write writer ", ")
      (pr-writer (get-in @db p) writer opts)
      (-write writer "}]"))))


;; -------------------------
;; Pseudo function serialize
(deftype FunctionHandler []
  Object
  (tag [this v] "map")
  (rep [this v]
    (let [xs (clojure.string/split (.-name v) #"\$")
          name (last xs)
          ns (clojure.string/join "." (butlast xs))]
      {:name (str ns "/" name)
       :ns ns
       :display-name name
       :type "js/Function"
       :fn? true
       :string (.toString v)}))
  (stringRep [this v]))

(swap! storage/transit-write-handlers assoc
       js/Function (FunctionHandler.))


(defn git-init [{:keys [fs] :as db} cb]
  (cb)
  ;;(-> (ocall isomorphic-git :init #js {:fs fs :dir git-root})
  ;;    (.then cb)
  ;;    (.catch (fn [e] (js/console.error e) (cb e))))
  )

;; -------------------------
;; Database Spec
(s/def ::orientation (s/or :horizontal (partial = "horizontal")
                           :vertical (partial = "vertical")))
(s/def ::keymap (s/or :sublime (partial = "sublime")
                      :emacs (partial = "emacs")
                      :vim (partial = "vim")
                      :default (partial = false)))
(s/def ::tab-behavior (s/or :tab (partial = "tab")
                            :insert (partial = "insert")
                            :auto (partial = "auto")))
(s/def ::font-size nat-int?)
(s/def ::theme string?)
(s/def ::line-wrapping boolean?)
(s/def ::line-numbers boolean?)
(s/def ::enable-drag-and-drop boolean?)
(s/def ::show-editors boolean?)
(s/def ::run-functions (s/* string?))
(s/def ::autocomplete string?)
(s/def ::insert-close boolean?)
(s/def ::visr-defaults (s/coll-of {:show-visr :show-code}))
(s/def ::sandbox boolean?)
(s/def ::options (s/keys :req-un [::font-size
                                  ::theme
                                  ::line-wrapping
                                  ::line-numbers
                                  ::enable-drag-and-drop
                                  ::show-editors
                                  ::run-functions
                                  ::autocomplete
                                  ::insert-close
                                  ::visr-defaults
                                  ::sandbox]))

;; ::type (s/or :github :gitlab :bitbucket :passwd nil)
(s/def ::auth (s/map-of keyword? coll?))

(s/def ::name string?)
(s/def ::version string?)
(s/def ::url string?)
(s/def ::sandbox boolean?)
(s/def ::code string?)
(s/def ::dep (s/keys :opt-un [::name
                              ::version
                              ::url
                              ::sandbox
                              ::load?]))
(s/def ::deps (s/map-of number? ::dep))

(s/def ::compiler any?)
(s/def ::runner any?)
(s/def ::running? boolean?)

(s/def ::input string?)
(s/def ::output string?)
(s/def ::folder string?)
(s/def ::file (s/nilable string?))
(s/def ::changed? boolean?)
(s/def ::split string?)
(s/def ::ns any?)
(s/def ::repl any?)
(s/def ::mode string?) ;; or false/null
(s/def ::buffer (s/keys :req-un [::input
                                 ::output
                                 ::folder
                                 ::file
                                 ::changed?
                                 ::split
                                 ::ns
                                 ::mode
                                 ::repl]))

(s/def ::buffers (s/+ ::buffer))
(s/def ::current nat-int?)


;; :home - no dialog, home-screen
;; :new - new-file-action
;; :new-folder - new-folder-dialog
;; :hold - hold-dialog
;; [:confirm-save <post>] - confirm-save-dialog
;; [:save <post>] - save-dialog
;; :load - load-dialog
;; :add-resource - add-resource-dialog
;; :options - options-dialog
;; :deps - deps-dialog
;; :splash - splash-dialog
;; :import - import-dialog
;; :error  - error-dialog
;; :wipe - confirm-wipe-dialog
;; :auth - git authentication screen
;; :pull - git pull
;; :push - git push
;; :copy-file - copy-file-dialog
;; :rename-file - rename-file-dialog
;; :print - print screen
(s/def ::menu (s/* keyword?))

(s/def ::fs any?)

(s/def ::database (s/keys :req-un [::version
                                   ::fs
                                   ::folder
                                   ::buffers
                                   ::current
                                   ::options
                                   ::deps
                                   ::menu
                                   ::cache
                                   ::auth]))

(defn current-buffer [{:keys [buffers current]
                       :as db}]
  (current buffers))

;; -------------------------
;; Default Database Setup

(defn default-options
  ([] (default-options :temp))
  ([mode]
   {:orientation "horizontal"
    :keymap "sublime"
    :tab-behavior "auto"
    :font-size 12
    :theme "material"
    :line-wrapping false
    :line-numbers true
    :enable-drag-and-drop true
    :show-editors true
    :run-functions (case mode
                     :local ["main"]
                     [])
    :autocomplete "auto"
    :insert-close true
    :sandbox true
    :visr-defaults {}}))

(defn default-buffer
  ([] (default-buffer :temp))
  ([mode]
   {:folder files-root
    :file nil
    :changed? false
    :input (case mode
             :local "(println \"Speak With Your Heart\")"
             :persist-test ""
             :temp "")
    :output ""
    :mode false
    :split "50%"
    :cursor nil
    :scroll {}}))

(defn bfs-config [mode]
  (let [mk-fs (fn [name]
                (case mode
                  :local {:fs "IndexedDB"
                          :options {:storeName name}}
                  :persist-test {:fs "IndexedDB"
                                 :options {:storeName (str name "test")}}
                  :fallback {:fs "LocalStorage"}
                  :temp {:fs "InMemory"}))]
    (clj->js {:fs "MountableFileSystem"
              :options {files-root (mk-fs "bfs")
                        deps-root (mk-fs "depsfs")}})))

(defn default-db
  ([] (default-db :temp))
  ([mode] (default-db mode #()))
  ([mode cb]
   (default-db mode cb {:version version
                        :options (default-options mode)
                        :current 0
                        :folder files-root
                        :buffers [(default-buffer mode)]
                        :fs {}
                        :deps {}
                        :auth {}
                        :menu (case mode
                                :local [:home :splash]
                                :persist-test [:home]
                                :temp [:home])}))
  ([mode cb base]
   (let [fs (browserfs/BFSRequire "fs")
         db (atom base)
         backed-db (case mode
                     :local (local-storage db "state")
                     :persist-test db
                     :temp db)
         ret {:options (into {}
                             (for [i [:orientation
                                      :keymap
                                      :tab-behavior
                                      :font-size
                                      :theme
                                      :line-wrapping
                                      :line-numbers
                                      :enable-drag-and-drop
                                      :show-editors
                                      :run-functions
                                      :autocomplete
                                      :insert-close
                                      :visr-defaults
                                      :sandbox]]
                               [i (->DBAtom backed-db [:options i])]))
              :version (->DBAtom backed-db [:version])
              :fs fs
              :runner (atom nil)
              :backing backed-db
              :mode mode
              :buffers (->DBAtom backed-db [:buffers])
              :menu (->DBAtom backed-db [:menu])
              :auth (->DBAtom backed-db [:auth])
              :input (->DBAtom backed-db [:current :input])
              :output (atom "") ;;(->DBAtom backed-db [:current :output])
              :buffer-mode (->DBAtom backed-db [:current :mode])
              :ns (->DBAtom backed-db [:current :ns])
              :repl (atom [])
              :current-folder (->DBAtom backed-db [:current :folder])
              :current-file (->DBAtom backed-db [:current :file])
              :file-browser-folder (->DBAtom backed-db [:folder])
              :deps (->DBAtom backed-db [:deps])
              :file-changed (->DBAtom backed-db [:current :changed?])
              :running? (atom false)
              :visr-commit! (atom nil)
              :insert-visr! (atom nil)
              :split (->DBAtom backed-db [:current :split])
              :cm-ref (clojure.core/atom nil) ; <- really gross, can we remove?
              :scroll (clojure.core/atom nil)
              :cursor (clojure.core/atom nil)
              :cache (editor/make-reset-editors-cache)}
         cb (fn [ret]
              (cb-thread
               #(git-init ret %)
               #(cb ret)))]
     (cb-thread
      #(browserfs/configure (bfs-config mode)
                            (fn [e] (if e (%) (cb ret))))
      #(browserfs/configure (bfs-config :fallback)
                            (fn [e] (if e (throw e) (cb ret)))))
     ret)))

(defn reset-db! [{{:keys [theme]} :options
                  :keys [mode deps auth] :as db}]
  (let [cdeps @deps
        ctheme @theme
        cauth @auth]
    (when (= mode :local) (storage/remove-local-storage! "state"))
    (when cdeps (reset! deps cdeps))
    (when ctheme (reset! theme ctheme))
    (when cauth (reset! auth cauth))
    db))
