(ns interactive-syntax.db
  (:require [reagent.core :as r :refer [atom]]
            [cljs.spec.alpha :as s]
            [cognitect.transit :as t]
            [alandipert.storage-atom :as storage :refer [local-storage]]
            [browserfs]))

(def files-root "/files/")

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


;; -------------------------
;; Database Spec
(s/def ::orientation (s/or :horizontal (partial = "horizontal")
                           :vertical (partial = "vertical")))
(s/def ::keymap (s/or :sublime (partial = "sublime")
                      :emacs (partial = "emacs")
                      :vim (partial = "vim")))
(s/def ::font-size nat-int?)
(s/def ::theme string?)
(s/def ::line-wrapping boolean?)
(s/def ::line-numbers boolean?)
(s/def ::enable-drag-and-drop boolean?)
(s/def ::show-editors boolean?)
(s/def ::options (s/keys :req-un [::font-size
                                  ::theme
                                  ::line-wrapping
                                  ::line-numbers
                                  ::enable-drag-and-drop
                                  ::show-editors]))

(s/def ::name string?)
(s/def ::version string?)
(s/def ::url string?)
(s/def ::sandbox boolean?)
(s/def ::code string?)
(s/def ::dep (s/keys :req-un [::sandbox]
                            :opt-un [::name
                                     ::version
                                     ::url
                                     ::source]))
(s/def ::deps (s/map-of number? ::dep))

(s/def ::input string?)
(s/def ::output string?)
(s/def ::runner any?)
(s/def ::folder string?)
(s/def ::file (s/nilable string?))
(s/def ::changed? boolean?)
(s/def ::running? boolean?)
(s/def ::buffer (s/keys :req-un [::input
                                 ::output
                                 ::folder
                                 ::file
                                 ::changed?
                                 ::runner
                                 ::running?]))

(s/def ::buffers (s/+ ::buffer))
(s/def ::current nat-int?)

(s/def ::menu (s/* keyword?))

(s/def ::fs any?)

(s/def ::database (s/keys :req-un [::fs
                                   ::folder
                                   ::buffers
                                   ::current
                                   ::options
                                   ::deps
                                   ::menu]))

(defn current-buffer [{:keys [buffers current]
                       :as db}]
  (current buffers))

;; -------------------------
;; Default Database Setup

(def default-options
  {:orientation "horizontal"
   :keymap "sublime"
   :font-size 12
   :theme "material"
   :line-wrapping false
   :line-numbers true
   :enable-drag-and-drop true
   :show-editors true})

(def default-buffer
  {:folder files-root
   :file nil
   :changed? false
   :input ""
   :output ""
   :runner nil
   :running? false})

(defn default-db
  ([] (default-db :temp))
  ([mode]
   (let [fs (browserfs/BFSRequire "fs")
         _ (browserfs/configure (clj->js {:fs "MountableFileSystem"
                                          :options
                                          {"/files"
                                           (case mode
                                             :local {:fs "IndexedDB"
                                                     :options {:storeName "bfs"}}
                                             :temp {:fs "InMemory"})
                                           "/deps"
                                           (case mode
                                             :local {:fs "IndexedDB"
                                                     :options {:storeName "depsfs"}}
                                             :temp {:fs "InMemory"})}})
                                #(when % (throw %)))
         base {:options default-options
               :current 0
               :folder files-root
               :buffers [default-buffer]
               :fs {}
               :deps {}
               :menu [:home]}
         db (atom base)
         backed-db (case mode
                     :local (local-storage db "state")
                     :temp db)]
     {:options (into {}
                     (for [i [:orientation
                              :keymap
                              :font-size
                              :theme
                              :line-wrapping
                              :line-numbers
                              :enable-drag-and-drop
                              :show-editors]]
                       [i (->DBAtom backed-db [:options i])]))
      :fs fs
      :runner (atom nil)
      :backing backed-db
      :buffers (->DBAtom backed-db [:buffers])
      :menu (->DBAtom backed-db [:menu])
      :input (->DBAtom backed-db [:current :input])
      :output (atom "") ;;(->DBAtom backed-db [:current :output])
      :current-folder (->DBAtom backed-db [:current :folder])
      :current-file (->DBAtom backed-db [:current :file])
      :file-browser-folder (->DBAtom backed-db [:folder])
      :deps (->DBAtom backed-db [:deps])
      :deps-env (atom nil)
      :env (atom nil)
      :file-changed (->DBAtom backed-db [:current :changed?])
      :running? (atom false)
      :visr-commit! (atom nil)})))

