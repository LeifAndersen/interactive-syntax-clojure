(ns interactive-syntax.env
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   ;;[reagent-catch.core :as rc]
   [clojure.string :as string]
   [clojure.walk :as walk]
   [cljs.pprint :refer [pprint]]
   [cljs.tools.reader :refer [read read-string]]
   [cljs.tools.reader.reader-types :refer [indexing-push-back-reader
                                           get-line-number
                                           get-column-number]]
   [cljs.js :as cljs :refer [empty-state js-eval *loaded*]]
   [cljs.analyzer :as ana :refer [*additional-core*]]
   [cljs.env :refer [*compiler*]]
   [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                      oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]
   [goog.object :as obj]
   [interactive-syntax.db :refer [files-root]]
   [interactive-syntax.stdlib :as stdlib]
   [interactive-syntax.strings :as strings]
   ["@stopify/higher-order-functions" :as hof]
   ["@babel/parser" :as babylon]
   ["@babel/template" :as babel-template]
   ["@leifandersen/react-codemirror2" :as cm]
   [popper.js]
   [bootstrap]
   [alandipert.storage-atom :as storage]
   [react-bootstrap :refer [Button ButtonGroup SplitButton
                            Dropdown DropdownButton Tabs Tab
                            Row Col Form Container Modal
                            Table]]
   [base64-js]
   [react-frame-component]
   [react-switch]))

(def ^:private template (.-default babel-template))
(def ^:private Frame (.-default react-frame-component))

(defn print-res [{:keys [output]
                  :as db}
                 res]
  (binding [*print-fn* #(swap! output conj %)]
    (cond
      (contains? res :error) (println (:error res))
      (contains? res :value)
      (when (get-in res [:value :value])
        (println (get-in res [:value :value]))))))

(defn valid-id? [id]
  (try
    (= (symbol id) (read-string (str id)))
    (catch js/Error e false)))

;; -------------------------
;; Package Manager

;; Should do some other validation probably...
(defn get-pkg [{:keys [url name version]} cb]
  (let [req (js/XMLHttpRequest.)
        sanatize-map {"@" "" "/" ""}
        pkg-name (cond (and url (not= url "")) "",
                       (and version (not= version ""))
                       (str (string/escape name sanatize-map) "/"
                            (string/escape version sanatize-map)),
                       :else (string/escape name sanatize-map))
        url (if (and url (not= url ""))
              url
              (str
               "https://raw.githubusercontent.com/LeifAndersen/visr-deps/main/"
               pkg-name ".js"))]
    (ocall req "addEventListener" "load" #(cb (oget % "target.responseText")))
    (ocall req "open" "GET" url)
    (ocall req "send")))

(defn setup-deps [{:keys [deps]} force-update]
  ((fn rec [acc packages]
     (if (empty? packages)
       (reset! deps acc)
       (let [[[key {:keys [source] :as package}] & remaining] packages]
         (if (or force-update (not source))
           (get-pkg package #(rec
                              (assoc acc key (assoc package :source %))
                              remaining))
           (rec (conj acc package) remaining)))))
   {} @deps))

(defn module->uri [module]
  (str "data:text/javascript;base64,"
       (ocall base64-js :fromByteArray
              (let [m (.split module "")]
                (.map m #(.charCodeAt % 0))))))

(defn deps->env [{:keys [deps deps-env env] :as db} cb]
  (let [system (new (.-constructor js/System))]
    ((fn rec [denv dloaded djs deps]
       (if (empty? deps)
         (do
           (reset! deps-env {:env denv :loaded dloaded :js-deps djs})
           (reset! env nil)
           (cb {:env denv :loaded dloaded :js-deps djs}))
         (let [[[key {:keys [name source] :as dep}] & rest-deps] deps]
           (-> system (ocall :import (module->uri source))
               (.then #(rec (assoc denv (munge name) %)
                            (conj dloaded (symbol name))
                            (assoc djs (str name)
                                   {:global-exports {(symbol name) (munge name)}})
                            rest-deps))
               (.catch #(js/console.log %))))))
     {} [] {} @deps)))

(defn deps->env+caching [{:keys [deps-env] :as db} cb]
  (let [denv @deps-env]
    (if denv
      (cb denv)
      (deps->env db cb))))

;; -------------------------
;; Evaluator

(defn ns->string [fs {:keys [name macros path]} cb]
  ((fn rec [extensions]
     (if (empty? extensions)
       (cb nil)
       (let [file-path (str files-root "/" path "." (first extensions))]
         (ocall
          fs :readFile
          file-path
          (fn [err data]
            (if err
              (rec (rest extensions))
              (let [source (.toString data)]
                (cb {:lang (if (= (first extensions)
                                  "js")
                             :js
                             :clj)
                     :source source
                     :file file-path}))))))))
   (if macros
     ["clj" "cljc" "cljs"]
     ["cljs" "cljc" "js"])))

(defn eval-opts [fs runner print-fn sandbox? ns]
  {:eval (if sandbox?
           (fn [{:keys [source name cache]} cb]
             (let [ast (babylon/parse source)
                   polyfilled (hof/polyfillHofFromAst ast)]
               (ocall runner :evalAsyncFromAst polyfilled
                      (fn [res]
                        (when-not (or (= (:type res) "normal")
                                      (= (:value res) nil))
                          (println res))
                        (cb res)))))
           cljs.js/js-eval)
   :load (partial ns->string fs)
   ;;:verbose true
   :ns ns
   :source-map true})

(defn eval-str [src
                {:keys [env
                        fs
                        loaded
                        lang
                        file-name
                        print-fn
                        runner
                        running?
                        sandbox
                        state
                        js-deps
                        ns-cache
                        fakegoog-global
                        ns]}
                cb]
  (let [resume (and runner true)
        sandbox (if (nil? sandbox) true sandbox)
        runner (let [new (js/stopify.stopifyLocally "")]
                 ;; Bug in stopify, always uses the latest runner environment
                 (when runner
                   (set! (.-g new) (.-g runner)))
                 new)
        runner-globs (clj->js (cond
                                (fn? env) (env runner)
                                env env
                                :else (stdlib/sandbox-env runner)))
        running? (or running? (atom false))
        internal-running? (atom false)
        loaded (cond
                 (coll? loaded) (atom loaded)
                 (= nil loaded) (atom #{})
                 :else loaded)
        file-name (or file-name strings/UNTITLED)
        print-fn (or print-fn #())
        opts (eval-opts fs runner print-fn sandbox ns)
        bootstrap-opts (eval-opts fs runner print-fn sandbox nil)
        lang (or lang :clj)
        state (or state (empty-state))
        ns-cache (or ns-cache (atom nil))
        bootstrapping? (atom false)
        coop-loaded (atom nil)
        coop-additional-core (atom nil)
        coop-state (atom nil)
        coop-print-fn (atom nil)
        coop-sandbox-global (atom nil)
        coop-ns-cache (atom nil)
        onRun (fn []
                (reset! internal-running? true)
                (reset! coop-loaded @*loaded*)
                (reset! coop-print-fn *print-fn*)
                (reset! coop-sandbox-global *sandbox-global*)
                (reset! coop-ns-cache NS_CACHE)
                (reset! *loaded* @loaded)
                (set! NS_CACHE @ns-cache)
                (set! *print-fn* print-fn)
                (set! *sandbox-global* runner.g)
                (when-not @bootstrapping?
                  (reset! coop-additional-core *additional-core*)
                  (reset! coop-state *compiler*)
                  (set! *additional-core* 'visr.core)
                  (set! *compiler* state)))
        onYield (fn []
                  (reset! internal-running? false)
                  (swap! loaded into @*loaded*)
                  (reset! *loaded* @coop-loaded)
                  (set! NS_CACHE @coop-ns-cache)
                  (set! *print-fn* @coop-print-fn)
                  (set! *sandbox-global* @coop-sandbox-global)
                  (when-not @bootstrapping?
                    (set! *additional-core* @coop-additional-core)
                    (set! *compiler* @coop-state))
                  true)
        pause-eval (fn [cb]
                     (.pause runner
                             (fn [ln]
                               (onYield)
                               (cb ln))))
        resume-eval (fn []
                      (onRun)
                      (.resume runner))
        cb (fn [res]
             (onYield)
             (reset! internal-running? false)
             (reset! running? false)
             (cb res))
        post-load (fn []
                    (try (onRun)
                         (condp = lang
                           :clj (cljs/eval-str state src file-name opts cb)
                           :js ((:eval opts) {:source src :name file-name} cb))
                         {:runner runner
                          :loaded loaded
                          :state state
                          :ns-cache ns-cache
                          :pause-eval pause-eval
                          :resume-eval resume-eval}
                         (catch :default e
                           (when @internal-running?
                             (onYield))
                           (throw e))))]
    (try
      (reset! internal-running? true)
      (reset! running? true)
      (if resume
        (do
          (onRun)
          (ocall runner :run
                 (fn []
                   (onYield)
                   (post-load))))
        (do
          (reset! bootstrapping? true)
          (set! runner.g runner-globs)
          (when fakegoog-global
            (set! runner.g.goog.global runner.g))
          (onRun)
          (ocall runner :run
                 (fn []
                   (cljs/eval-str
                    state stdlib/injectable
                    "core.cljs" bootstrap-opts
                    (fn [res]
                      (onYield)
                      (reset! bootstrapping? false)
                      (swap! state assoc :js-dependency-index js-deps)
                      (onRun)
                      (set! runner.g.visr.core$macros
                            runner.g.visr.core)
                      (ana/intern-macros 'visr.core)
                      (onYield)
                      (post-load))))
                 onYield #() onRun)
          {:runner runner
           :loaded loaded
           :state state
           :ns-cache ns-cache
           :pause-eval pause-eval
           :resume-eval resume-eval}))
      (catch :default e
        (when @internal-running?
          (onYield))
        (throw e)))))

(defn eval-buffer [{:keys [input
                           output
                           file-name
                           fs
                           running?
                           runner]
                    :as db}
                   & [callback]]
  (deps->env
   db
   (fn [deps-env]
     (let [cb (or callback
                  #(print-res db %))
           res
           (eval-str @input
                     (stdlib/reagent-opts
                      {:env (:env deps-env)
                       :loaded (:loaded deps-env)
                       :js-deps (:js-deps deps-env)
                       :fs fs
                       :running? running?
                       :file-name file-name
                       :print-fn #(swap! output conj %)}
                      db)
                     cb)]
       (reset! runner res)))))

;; Converts a (1-index) line and col pair to a (0-indexed) string index.
(defn buffer-position->index [str line column]
  (loop [i 0
         line line]
    (if (<= line 1)
      (dec (+ i column))
      (recur (inc (.indexOf str "\n" i))
             (dec line)))))

(defn info->srcloc [info]
  {:line (:line info)
   :column (:column info)})

(defn mk-editor [{:keys [editor] :as data}
                 stx
                 {:keys [runner loaded state ns-cache] :as run-state}
                 fs file-src cb]
  (let [ns (namespace editor)
        srcloc (info->srcloc data)
        catch-fn (fn [e]
                   (cb e))
        mk-fn (fn [res]
                (when (and res (:error res))
                  (throw res))
                (eval-str (str "(" (stdlib/visr->render editor)
                               " '" stx
                               " (fn [x] ((js/srcloc->updater " srcloc ") x)))")
                          {:runner runner
                           :loaded @loaded
                           :state state
                           :ns-cache ns-cache
                           :ns ns
                           :fs fs}
                          cb))]
    (try
      (cond
        ns (ns->string fs {:name ns
                           :macros false
                           :path (apply js/path.join (.split ns "."))}
                       (fn [src]
                         (let [src (if src (:source src) "")]
                           (eval-str src
                                     {:runner runner
                                      :loaded @loaded
                                      :state state
                                      :ns-cache ns-cache
                                      :fs fs}
                                     mk-fn))))
        :else (eval-str file-src
                        {:runner runner
                         :loaded @loaded
                         :state state
                         :ns-cache ns-cache
                         :fs fs}
                        mk-fn))
      (catch :default e (catch-fn e)))))

(defn dom->reagent [element]
  [(keyword (-> element .-nodeName .toLowerCase))
   (into {}
         (for [i (range (-> element .-attributes .-length))]
           (let [attr (-> element .-attributes (.item i))]
             [(.-key attr) (.-value attr)])))
   (-> element .-innerHTML)])

(defn styled-frame [mopts & mbody]
  (let [opts (if (map? mopts) mopts {})
        body (if (map? mopts) mbody (into [mopts] mbody))]
    (into [:> Frame (assoc opts :head
                           (r/as-element
                            (into [:<> (:head opts)]
                                  (for [i (-> js/document .-head
                                              (.getElementsByTagName "style"))]
                                    (dom->reagent i)))))]
          body)))

(defn codemirror-options [{:keys [options] :as db}]
  {:mode "clojure"
   :keyMap @(:keymap options)
   :theme @(:theme options)
   :matchBrackets true
   :showCursorWhenSelecting true
   :lineWrapping @(:line-wrapping options)
   :lineNumbers @(:line-numbers options)})

;; Based on: https://lilac.town/writing/modern-react-in-cljs-error-boundaries/
(defn err-boundary
  [& children]
  (let [err-state (r/atom nil)]
    (r/create-class
     {:display-name "ErrBoundary"
      :component-did-catch (fn [err info]
                             (reset! err-state [err info]))
      :reagent-render (fn [& children]
                        (if (nil? @err-state)
                          (into [:<>] children)
                          (let [[_ info] @err-state]
                            [styled-frame [:div {:style {:white-space "pre"}}
                                           (pr-str info)]])))})))

(defn visr-hider [{:keys [options fs] :as db} editor show-visr show-code
                  run-state info stx-box changed? file-src commit! update-box]
  (let [visr (atom nil)
        focused? (atom false)
        stx->stx-str #(binding [cljs.pprint/*print-right-margin* 40]
                        (with-out-str
                          (pprint %)))
        stx (atom @stx-box)
        stx-str (atom (stx->stx-str @stx-box))]
    (reset! stx-box @stx-str)
    (add-watch stx ::update-stx-box
               (fn [k r o n]
                 (when-not (= o n)
                   (reset! stx-box (stx->stx-str n))
                   (reset! changed? true))))
    (add-watch stx-str ::update-stx-box
               (fn [k r o n]
                 (when-not (= o n)
                   (reset! stx-box n)
                   (reset! changed? true))))
    (reset! update-box (fn [x]
                         (reset! stx x)
                         (commit!)))
    (fn [{:keys [options fs] :as db} editor show-visr show-code
         run-state info stx-box changed? file-src commit! update-box]
      (when (and @show-visr (= @visr nil))
        (mk-editor @info @stx run-state fs file-src
                   (fn [ret]
                     (reset! visr
                             (cond
                               (:value ret)
                               (let [v (:value ret)]
                                 (cond (= (oget v :type) "exception")
                                       [:div {:style {:white-space "pre"}}
                                        (oget v :value.message)
                                        (oget v :value.stack)],
                                       :else (oget v :value))),
                               :else [:div (str ret)])))))
      [:span {:style {:display "inline-block"}}
       [:> ButtonGroup {:aria-label strings/VISR}
        [:> Button {:size "sm"
                    :aria-label strings/VISUAL
                    :style {:padding 0 :font-size "1.2em"}
                    :on-click #(swap! show-visr not)}
         "\uD83D\uDC41"]
        (when @show-visr
          [err-boundary
           [styled-frame @visr]])
        [:> Button {:size "sm"
                    :aria-label strings/CODE
                    :style {:padding 0 :font-size "0.8em"}
                    :variant "secondary"
                    :on-click #(swap! show-code not)}
         [:code "(\u03BB)"]]
        (when @show-code
          [styled-frame
           {:on-blur commit!
            :head [:style ".frame-root, .frame-content {height: 100%;}"]}
           [:> Form {:onSubmit #(do (.preventDefault %)
                                    (.stopPropagation %))
                     :style {:height "100%"
                             :display "flex"
                             :flex-flow "column"}}
            [:> (oget Form :Group) {:as Row
                                    :style {:margin "0"
                                            :flex "0 1 auto"}}
             [:> Col {:xs "1"
                      :style {:padding "0"}}
              [:> (oget Form :Label) {:column true
                                      :style {:padding "0"}}
               (str strings/VISR ":")]]
             [:> Col {:xs "11"
                      :style {:padding-right "0"}}
              [:> (oget Form :Control)
               {:size "sm"
                :style {:padding "0"
                        :min-height "0"}
                :aria-label strings/VISR
                :default-value (str (:editor @info))
                :on-focus #(reset! focused? true)
                :on-blur (fn [] (when changed?
                                  (commit!)
                                  (reset! focused? false)))
                :on-change #(let [value (oget % "target.value")]
                              (when (valid-id? value)
                                (swap! info assoc :editor value))
                              (reset! changed? true)
                              (when-not @focused?
                                (commit!)))}]]]
            [:> (oget Form :Group) {:as Row
                                    :style {:margin "0"
                                            :flex "1 1 auto"}}
             [:> Col {:xs "12"
                      :style {:padding "0"}}
              [:> cm/UnControlled
               {:options (codemirror-options db)
                :onChange (fn [this operation value]
                            (reset! stx-str value))
                :editorDidMount (fn [e]
                                  (-> e (ocall "getDoc")
                                      (ocall "setValue" @stx-str)))}]]]]])]])))

(defn reset-editors! [source set-text editor instances operation
                      {:keys [fs options deps env] :as db}]
  (let [old @instances]
    (doseq [[k v] old]
      (ocall (:range v) :clear))
    (reset! instances {})
    (deps->env+caching
     db
     (fn [deps-env]
       (when (and @(:show-editors options) @editor)
         (let [prog (indexing-push-back-reader @source)
               eof (atom nil)
               {:keys [runner loaded state ns-cache] :as run-state}
               (if @env
                 @env
                 (let [cache (eval-str
                              ""
                              (stdlib/reagent-opts
                               {:env (assoc (:env deps-env)
                                            (munge "srcloc->updater")
                                            (fn [x]
                                              @(get-in @instances [x :update])))
                                :loaded (:loaded deps-env)
                                :js-deps (:js-deps deps-env)
                                :fs fs}
                               db)
                            #())]
                   (reset! env cache)
                   cache))]
           (try
             (loop []
               (let [form (try (read {:eof eof} prog)
                               (catch js/Error e
                                 (ex-info (.-message e)
                                          {:line (oget e "lineNumber")
                                           :char (oget e "columnNumber")
                                           :name (oget e "name")
                                           :file (oget e "fileName")}
                                          :read-error)))]
                 (when-not (identical? form eof)
                   (when (coll? form)
                     ((fn rec [form]
                        (let [info (meta form)]
                          (when (:editor info)
                            (let [prev (get-in old [{:line (:line info)
                                                     :column (:column info)}])
                                  hider (.createElement js/document "span")
                                  show-visr (atom (if prev
                                                    @(:show-visr prev)
                                                    false))
                                  show-code (atom (if prev
                                                    @(:show-code prev)
                                                    false))
                                  info (atom info)
                                  form (atom (second form))
                                  changed? (atom false)
                                  start (buffer-position->index
                                          @source
                                          (:line @info)
                                          (:column @info)),
                                  end (buffer-position->index
                                       @source
                                       (:end-line @info)
                                       (:end-column @info))
                                  new-str (fn [info form]
                                            (str (subs @source 0 start)
                                                 (stdlib/write-visr
                                                  (:editor info) form)
                                                 (subs @source end)))
                                  update (atom nil)
                                  commit! #(when @changed?
                                             (set-text (new-str @info @form))
                                             (reset! changed? false))]
                              (d/render
                               [visr-hider db editor show-visr show-code
                                run-state info form changed? @source commit! update]
                               hider)
                              (let [r-mark (-> @editor
                                               (ocall :getDoc)
                                               (ocall
                                                :markText
                                                #js {:line (dec (:line @info)),
                                                     :ch (dec (:column @info))}
                                                #js {:line (dec (:end-line @info)),
                                                     :ch (dec (:end-column @info))}
                                                #js {:collapsed true
                                                     :replacedWith hider}))]
                                (add-watch show-visr ::visr-resize
                                           (fn [k r o n]
                                             (when-not (= o n)
                                               (ocall r-mark :changed))))
                                (add-watch show-code ::visr-resize
                                           (fn [k r o n]
                                             (when-not (= o n)
                                               (ocall r-mark :changed))))
                                (swap! instances assoc
                                       (info->srcloc @info)
                                       {:range r-mark
                                        :commit! commit!
                                        :update update
                                        :visr hider
                                        :show-visr show-visr
                                        :show-code show-code
                                        :info info
                                        :stx form}))))
                          (doseq [e form]
                            (when (coll? e)
                              (rec e)))))
                      form))
                   (recur))))
             (catch ExceptionInfo e
               (js/console.log e))
             (catch js/Error e
               (throw e)))))))))
