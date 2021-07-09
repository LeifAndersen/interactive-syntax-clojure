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
   [goog.object :as obj]
   [interactive-syntax.stdlib :as stdlib]
   [interactive-syntax.strings :as strings]
   [interactive-syntax.fakegoog :as fakegoog]
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
   [base64-js]))

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
        url (or url (str "https://unpkg.com/" pkg-name))]
    (.addEventListener req "load" #(-> % .-target .-responseText cb))
    (.open req "GET" url)
    (.send req)))

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
       (.fromByteArray base64-js
                       (-> module
                           (.split "")
                           (.map #(.charCodeAt % 0))))))

(defn deps->env [{:keys [deps deps-env env] :as db} cb]
  (let [system (new (.-constructor js/System))]
    ((fn rec [denv deps]
       (if (empty? deps)
         (do
           (reset! deps-env denv)
           (reset! env nil)
           (cb denv))
         (let [[[key {:keys [name source] :as dep}] & rest-deps] deps]
           (-> system (.import (module->uri source))
               (.then #(rec (assoc denv name %) rest-deps))
               (.catch #(js/console.log %))))))
     {} @deps)))

(defn deps->env+caching [{:keys [deps-env] :as db} cb]
  (let [denv @deps-env]
    (if denv
      (cb denv)
      (deps->env db cb))))

;; -------------------------
;; Evaluator

(defn sandbox-env [runner]
  {:cljs js/cljs
   :goog {:provide (partial fakegoog/prov runner)
          :require (partial fakegoog/req runner)}
   :console js/console
   :navigator js/navigator
   :document js/document
   :window js/window
   :global runner
   :String js/String
   :Object js/Object
   :Function js/Function
   :Array js/Array
   :Math js/Math
   :$stopifyArray js/stopifyArray})

(defn reagent-opts [opts db]
  (conj opts
        {:env #(conj
                (sandbox-env %)
                (:env opts)
                {:visr {:core {:render (partial stdlib/render db)}}
                 :reagent.core js/reagent.core
                 :reagent.dom js/reagent.dom
                 :react_bootstrap
                  js/interactive_syntax.core.node$module$react_bootstrap})
         :loaded (conj (into #{} (:loaded opts))
                       'visr.core 'reagent.core 'reagent.dom)}))

(defn ns->string [fs {:keys [name macros path]} cb]
  ((fn rec [extensions]
     (if (empty? extensions)
       (cb nil)
       (let [file-path (str "/" path "." (first extensions))]
         (.readFile
          fs
          file-path
          (fn [err data]
            (if err
              (rec (rest extensions))
              (cb {:lang (if (= (first extensions)
                                "js")
                           :js
                           :clj)
                   :source (.toString data)
                   :file file-path})))))))
   (if macros
     ["clj" "cljc"]
     ["cljs" "cljc" "js"])))

(defn eval-opts [fs runner print-fn sandbox?]
  {:eval (if sandbox?
           (fn [{:keys [source name cache]} cb]
             (binding [*print-fn* print-fn]
               (let [ast (babylon/parse source)
                     polyfilled (hof/polyfillHofFromAst ast)]
                 (.evalAsyncFromAst runner polyfilled #(do (println %)
                                                           (cb %))))))
           cljs.js/js-eval)
   :load (partial ns->string fs)
   :source-map true})

(defn eval-str [src
                {:keys [env
                        fs
                        loaded
                        lang
                        file-name
                        print-fn
                        runner
                        sandbox]}
                cb]
  (let [resume (and runner true)
        sandbox (if (nil? sandbox) true sandbox)
        old-loaded @*loaded*
        runner (or runner (js/stopify.stopifyLocally ""))
        globs (clj->js (cond
                         (fn? env) (env runner)
                         env env
                         :else (sandbox-env runner)))
        loaded (cond
                 (coll? loaded) (atom loaded)
                 (= nil loaded) (atom #{})
                 :else loaded)
        file-name (or file-name strings/UNTITLED)
        print-fn (or print-fn #())
        opts (eval-opts fs runner print-fn sandbox)
        lang (or lang :clj)
        cb (fn [res]
             (swap! loaded into @*loaded*)
             (reset! *loaded* old-loaded)
             (cb res))]
    (when-not resume
      (set! runner.g globs)
      (.run runner #()))
    (try
      (reset! *loaded* @loaded)
      (condp = lang
        :clj (cljs/eval-str (empty-state) src file-name opts cb)
        :js ((:eval opts) {:source src :name file-name} cb))
      {:runner runner
       :loaded loaded}
      (catch :default e
        (reset! *loaded* old-loaded)))))

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
           {:keys [runner loaded]} (eval-str @input
                                             (reagent-opts
                                              {:env deps-env
                                               :fs fs
                                               :file-name file-name
                                               :print-fn #(swap! output conj %)}
                                              db)
                                             cb)]
       (reset! (:runner db) runner)))))

(defn mk-editor [{:keys [component]
                  :as data}
                 stx runner loaded fs cb]
  (cond
    (map? component)
    (ns->string
     fs (:ns component)
     (fn [src]
       (let [src (if src (:source src) "")
             ret (eval-str src
                           {:runner runner
                            :loaded @loaded
                            :fs fs}
                           #(cb [:> Button "Test"]))]
         (reset! loaded (:loaded ret)))))
    (vector? component)
    (eval-str (str component)
              {:runner runner
               :loaded loaded
               :fs fs}
              (fn [ret]
                (cb
                 (cond
                   (:value ret) (.-value (:value ret))
                   :else ret))))
    :else (throw "TODO")))

(defn reset-editors! [s editor instances operation
                      {:keys [fs options deps env] :as db}]
  nil
  (doseq [[tag i] @instances]
    (do (when (:widget i) (.clear (:widget i)))
        (.clear (:range i))))
  (reset! instances {})
  (deps->env+caching
   db
   (fn [deps-env]
     (when (and @(:show-editors options) @editor)
       (let [prog (indexing-push-back-reader s)
             eof (atom nil)
             {:keys [runner loaded]}
             (if env
               env
               (let [cache (eval-str ""
                                     (reagent-opts {:env deps-env
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
                                        {:line (.-lineNumber e)
                                         :char (.-columnNumber e)
                                         :name (.-name e)
                                         :file (.-fileName e)}
                                        :read-error)))]
               (when-not (identical? form eof)
                 (when (coll? form)
                   ((fn rec [form tag]
                      (let [info (meta form)]
                        (condp = (:tag info)
                          'editor
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
                                       (mk-editor info form runner loaded fs
                                                  (fn [v]
                                                    (d/render v element)))
                                       (assoc old :widget
                                              (-> @editor
                                                  (.getDoc)
                                                  (.addLineWidget
                                                   (dec (:line info))
                                                   element
                                                   false))))
                                     (do (.clear (:widget old))
                                         (assoc old :widget nil)))))}
                              "..."]
                             hider)
                            (swap! instances conj
                                   {tag
                                    {:range
                                     (-> @editor
                                         (.getDoc)
                                         (.markText
                                          #js {:line (dec (:line info)),
                                               :ch (dec (:column info))}
                                          #js {:line (dec (:end-line info)),
                                               :ch (dec (:end-column info))}
                                          #js {:collapsed true
                                               :replacedWith hider}))
                                     :widget nil}}))
                          nil)
                        (doseq [e form]
                          (when (coll? e)
                            (rec e (inc tag))))))
                    form tag))
                 (recur (inc tag)))))
           (catch ExceptionInfo e
             (js/console.log e))
           (catch js/Error e
             (throw e))))))))