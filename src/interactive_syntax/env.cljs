(ns interactive-syntax.env
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   [clojure.string :as string]
   [clojure.walk :as walk]
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
   [interactive-syntax.stdlib :as stdlib]
   [interactive-syntax.strings :as strings]
   ["@stopify/higher-order-functions" :as hof]
   ["@babel/parser" :as babylon]
   ["@babel/template" :as babel-template]
   [jquery]
   [popper.js]
   [bootstrap]
   [alandipert.storage-atom :as storage]
   [react-bootstrap :refer [Button ButtonGroup SplitButton
                            Dropdown DropdownButton Tabs Tab
                            Row Col Form Container Modal
                            Table]]
   [base64-js]
   [react-switch]))

(def ^:private template (.-default babel-template))

(defn print-res [{:keys [output]
                  :as db}
                 res]
  (binding [*print-fn* #(swap! output conj %)]
    (cond
      (contains? res :error) (println (:error res))
      (contains? res :value)
      (when (get-in res [:value :value])
        (println (get-in res [:value :value]))))))

;; -------------------------
;; Package Manager

;; Should do some other validation probably...
(defn get-pkg [{:keys [url name version]} cb]
  (let [req (js/XMLHttpRequest.)
        sanatize-map {"@" "" "/" ""}
        pkg-name (cond url ""
                       version (str (string/escape name sanatize-map) "/"
                                    (string/escape version sanatize-map))
                       :else (string/escape name sanatize-map))
        url (or url
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
              (-> module
                  (ocall :split "")
                  (ocall :map #(ocall % :charCodeAt 0))))))

(defn deps->env [{:keys [deps deps-env env] :as db} cb]
  (let [system (new (oget js/System :constructor))]
    ((fn rec [denv dloaded djs deps]
       (if (empty? deps)
         (do
           (reset! deps-env {:env denv :loaded dloaded :js-deps djs})
           (reset! env nil)
           (cb {:env denv :loaded dloaded}))
         (let [[[key {:keys [name source] :as dep}] & rest-deps] deps]
           (-> system (ocall :import (module->uri source))
               (.then #(rec (assoc denv (munge name) %)
                            (conj dloaded (symbol name))
                            (assoc djs (str name)
                                   {:global-exports {(symbol name) (munge name)}})
                            rest-deps))
               (.catch #(js/console.log %))))))
     {} [] @deps)))

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
       (let [file-path (str "/" path "." (first extensions))]
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

(defn eval-opts [fs runner print-fn sandbox? bootstrapping? ns]
  {:eval (if sandbox?
           (fn [{:keys [source name cache]} cb]
             (let [run (fn []
                         (binding [*print-fn* print-fn
                                   *sandbox-global* runner.g]
                           (let [ast (babylon/parse source)
                                 polyfilled (hof/polyfillHofFromAst ast)]
                             (ocall runner :evalAsyncFromAst polyfilled
                                    (fn [res]
                                      (when-not (or (= (:type res) "normal")
                                                    (= (:value res) nil))
                                        (println res))
                                      (cb res))))))]
               (if bootstrapping?
                 (run)
                 (binding [*additional-core* 'visr.core]
                   (run)))))
           cljs.js/js-eval)
   :load (partial ns->string fs)
   ;:verbose true
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
                        sandbox
                        state
                        js-deps
                        ns-cache
                        fakegoog-global
                        ns]}
                cb]
  (let [resume (and runner true)
        sandbox (if (nil? sandbox) true sandbox)
        old-loaded @*loaded*
        runner (or runner (js/stopify.stopifyLocally ""))
        runner-globs (clj->js (cond
                                (fn? env) (env runner)
                                env env
                                :else (stdlib/sandbox-env runner)))
        loaded (cond
                 (coll? loaded) (atom loaded)
                 (= nil loaded) (atom #{})
                 :else loaded)
        file-name (or file-name strings/UNTITLED)
        print-fn (or print-fn #())
        opts (eval-opts fs runner print-fn sandbox false ns)
        bootstrap-opts (eval-opts fs runner print-fn sandbox true nil)
        lang (or lang :clj)
        state (or state (empty-state))
        old-ns-cache NS_CACHE
        ns-cache (or ns-cache (atom nil))
        cb (fn [res]
             (swap! loaded into @*loaded*)
             (reset! *loaded* old-loaded)
             (reset! ns-cache NS_CACHE)
             (set! NS_CACHE old-ns-cache)
             (cb res))
        post-load (fn []
                    (binding [*print-fn* print-fn
                              *sandbox-global* runner.g
                              *additional-core* 'visr.core
                              *compiler* state]
                      (condp = lang
                        :clj (cljs/eval-str state src file-name opts cb)
                        :js ((:eval opts) {:source src :name file-name} cb))
                      {:runner runner
                       :loaded loaded
                       :state state
                       :ns-cache ns-cache}))]
    (try
      (reset! *loaded* @loaded)
      (set! NS_CACHE @ns-cache)
      (if resume
        (post-load)
        (do
          (set! runner.g runner-globs)
          (when fakegoog-global
            (set! runner.g.goog.global runner.g))
          (binding [*print-fn* print-fn
                    *sandbox-global* runner.g]
            (ocall runner :run
                   #(cljs/eval-str
                     state stdlib/injectable
                     "core.cljs" bootstrap-opts
                     (fn [res]
                       (swap! state assoc :js-dependency-index js-deps)
                       (binding [*additional-core* 'visr.core
                                 *compiler* state]
                         (set! runner.g.visr.core$macros
                               runner.g.visr.core)
                         (ana/intern-macros 'visr.core)
                         (post-load))))))
          {:runner runner
           :loaded loaded
           :state state
           :ns-cache ns-cache}))
      (catch :default e
        (reset! *loaded* old-loaded)
        (set! NS_CACHE old-ns-cache)
        (throw e)))))

(defn eval-buffer [{:keys [input
                           output
                           file-name
                           fs]
                    :as db}
                   & [callback]]
  (deps->env
   db
   (fn [deps-env]
     (let [cb (or callback
                  #(print-res db %))
           {:keys [runner loaded state ns-cache]}
           (eval-str @input
                     (stdlib/reagent-opts
                      {:env (:env deps-env)
                       :loaded (:loaded deps-env)
                       :js-deps (:js-deps deps-env)
                       :fs fs
                       :file-name file-name
                       :print-fn #(swap! output conj %)}
                      db)
                     cb)]
       (reset! (:runner db) runner)))))

(defn write-editor []
  nil)

(defn mk-editor [{:keys [editor]
                  :as data}
                 stx runner loaded state ns-cache fs cb]
  (let [ns (namespace editor)
        mk-fn (fn [res]
                (when (and res (:error res))
                  (throw res))
                (eval-str (str "(" (stdlib/visr->render editor) ")")
                          {:runner runner
                           :loaded @loaded
                           :state state
                           :ns-cache ns-cache
                           :ns ns
                           :fs fs}
                          (fn [ret]
                            (cb
                             (cond
                               (:value ret) (oget (:value ret) "value")
                               :else ret)))))]
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
      :else (mk-fn nil))))

(defn reset-editors! [s editor instances operation
                      {:keys [fs options deps env] :as db}]
  (doseq [[tag i] @instances]
    (do (when (:widget i) (ocall (:widget i) :clear))
        (ocall (:range i) :clear)))
  (reset! instances {})
  (deps->env+caching
   db
   (fn [deps-env]
     (when (and @(:show-editors options) @editor)
       (let [prog (indexing-push-back-reader s)
             eof (atom nil)
             {:keys [runner loaded state ns-cache]}
             (if @env
               @env
               (let [cache (eval-str
                            ""
                            (stdlib/reagent-opts {:env (:env deps-env)
                                                  :loaded (:loaded deps-env)
                                                  :js-deps (:js-deps deps-env)
                                                  :fs fs}
                                                 db)
                            #())]
                 (reset! env cache)
                 cache))]
         (try
           (loop [tag 0]
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
                   ((fn rec [form tag]
                      (let [info (meta form)]
                        (when (:editor info)
                          (let [hider (.createElement js/document "span")]
                            (d/render
                             [:> Button
                              {:size "sm"
                               :style {:padding 0
                                       :font-size "0.8em"}
                               :on-click
                               #(swap!
                                 instances update tag
                                 (fn [old] ; Note, probably not safe?
                                   (if (= (:widget old) nil)
                                     (let [element
                                           (.createElement js/document "div")]
                                       (mk-editor info form runner loaded state
                                                  ns-cache fs
                                                  (fn [v]
                                                    (d/render v element)))
                                       (assoc old :widget
                                              (-> @editor
                                                  (ocall :getDoc)
                                                  (ocall :addLineWidget
                                                         (dec (:line info))
                                                         element
                                                         false))))
                                     (do (ocall (:widget old) :clear)
                                         (assoc old :widget nil)))))}
                              "..."]
                             hider)
                            (swap! instances conj
                                   {tag
                                    {:range
                                     (-> @editor
                                         (ocall :getDoc)
                                         (ocall :markText
                                                #js {:line (dec (:line info)),
                                                     :ch (dec (:column info))}
                                                #js {:line (dec (:end-line info)),
                                                     :ch (dec (:end-column info))}
                                                #js {:collapsed true
                                                     :replacedWith hider}))
                                     :widget nil}})))
                        (doseq [e form]
                          (when (coll? e)
                            (rec e (inc tag))))))
                    form tag))
                 (recur (inc tag)))))
           (catch ExceptionInfo e
             (js/console.log e))
           (catch js/Error e
             (throw e))))))))
