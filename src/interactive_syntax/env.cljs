(ns interactive-syntax.env
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   [react]
   [react-dom]
   ;;[reagent-catch.core :as rc]
   [clojure.string :as string]
   [clojure.set :as set]
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
   [interactive-syntax.utils :refer [cb-thread cb-loop]]
   [interactive-syntax.db :refer [files-root deps-root shop-url]]
   [interactive-syntax.stdlib :as stdlib]
   [interactive-syntax.strings :as strings]
   [interactive-syntax.fakegoog :as fakegoog]
   [garden.core :as garden :refer [css]]
   ["@stopify/higher-order-functions" :as hof]
   ["@babel/parser" :as babylon]
   ["@babel/template" :as babel-template]
   [codemirror]
   ["@leifandersen/react-codemirror2" :as cm]
   [react-resize-detector]
   [popper.js]
   [bootstrap]
   [alandipert.storage-atom :as storage]
   [react-bootstrap :refer [Button ButtonGroup SplitButton
                            Dropdown DropdownButton Tabs Tab
                            Row Col Form Container Modal
                            Table]]
   [base64-js]
   [react-frame-component :refer [useFrame]]
   [react-switch]))

(def ^:private template (.-default babel-template))
(def ^:private Frame (.-default react-frame-component))
(def ^:private ReactResizeDetector (.-default react-resize-detector))

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
                       ;;(and version (not= version ""))
                       ;;(str (string/escape name sanatize-map) "/"
                       ;;     (string/escape version sanatize-map)),
                       :else (string/escape name sanatize-map))
        url (if (and url (not= url ""))
              url
              (str shop-url pkg-name ".js"))]
    (ocall req "addEventListener" "load" #(cb (oget % "target.responseText")))
    (ocall req "open" "GET" url)
    (ocall req "send")))

(defn setup-deps [{:keys [deps fs] :as db} force-update & [cb]]
  (cb-thread
   #(cb-loop @deps
             (fn [next [key {:keys [name] :as pkg}]]
               (cb-thread
                (fn [n] (ocall fs :readFile (js/path.join deps-root name) n))
                (fn [n e src]
                  (if (or force-update e)
                    (cb-thread
                     (fn [n] (get-pkg pkg n))
                     (fn [_ src]
                       (ocall fs :writeFile
                              (js/path.join deps-root name) src next)))
                    (next)))))
             %)
   #(when cb (cb %2))))

(defn module->uri [module]
  (str "data:text/javascript;base64,"
       (ocall base64-js :fromByteArray
              (let [m (.split module "")]
                (.map m #(.charCodeAt % 0))))))

(defn deps->env [{:keys [deps fs output] :as db} cb]
  (let [system js/System];(new (.-constructor js/System))]
    ((fn rec [denv dloaded djs deps]
       (if (empty? deps)
         (cb {:env denv :loaded dloaded :js-deps djs})
         (let [[[key {:keys [name] :as dep}] & rest-deps] deps]
           (cb-thread
            #(ocall fs :readFile (js/path.join deps-root name) %)
            #(if %2 (js/console.error %2) (% %3))
            (fn [next source]
              (-> system (ocall :import (module->uri (.toString source)))
                  (.then #(rec (assoc denv (munge name) %)
                               (conj dloaded (symbol name))
                               (assoc djs (str name)
                                      {:global-exports {(symbol name)
                                                        (munge name)}})
                               rest-deps))
                  (.catch (fn [err]
                            (reset! output
                                    #queue [(str "Cannot load dependency " name ":")
                                            (str err)])
                            (cb nil)))))))))
     {} [] {} @deps)))

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

(def stopified-cache (atom {}))
(def stopify-queue (atom #queue []))

(defn eval-opts [fs runner print-fn sandbox? ns onYield onRun compiled?]
  {:eval (if sandbox?
           (fn [{:keys [source name cache clj-source]} cb]
             (let [run (fn [str]
                         (reset! compiled? true)
                         (ocall runner :evalCompiled str
                                (fn [res]
                                  (when-not (or (= (:type res) "normal")
                                                (= (:value res) nil))
                                    (println res))
                                  (cb res))))]
               (cond
                 (and
                  (not (string/ends-with? (str (:name cache)) "$macros"))
                  (contains? @stopified-cache clj-source))
                 (run (get @stopified-cache clj-source)),
                 ;; sync v async, currently always sync
                 (< (count source) 1000)
                 (let [ast (babylon/parse source)
                       polyfilled (hof/polyfillHofFromAst ast)
                       compiled (ocall runner :compileFromAst polyfilled)]
                   (when-not (string/ends-with? (str (:name cache)) "$macros")
                     (swap! stopified-cache assoc clj-source compiled))
                   (run compiled)),
                 :else
                 (let [worker (new js/StopifyWorker)]
                   (onYield)
                   (set! worker.onmessage
                         (fn [msg]
                           (when-not (string/ends-with? (str (:name cache))
                                                        "$macros")
                             (swap! stopified-cache assoc clj-source
                                    (oget msg :data.prog)))
                           (onRun)
                           (run (oget msg :data.prog))))
                   (.postMessage worker #js {:prog source})))))
           cljs.js/js-eval)
   :load (partial ns->string fs)
   ;;:verbose true
   :source-map false ; true
   :ns ns})

(defn eval-str [src
                {{:keys [env fakegoog loaded state state-injections
                         ns-cache js-deps bootstrapped?]} :runtime
                 :keys [fs lang file-name print-fn running? sandbox ns]
                 :or {sandbox true print-fn #() file-name strings/UNTITLED}}
                cb]
  (let [internal-ctrls (atom nil)
        loaded (cond
                 (coll? loaded) (atom loaded)
                 (= nil loaded) (atom #{})
                 :else loaded)
        running? (or running? (atom false))
        internal-running? (atom false)
        compiled? (atom false)
        lang (or lang :clj)
        state (or state (empty-state))
        ns-cache (or ns-cache (atom nil))
        env (clj->js (cond
                       (fn? env) (env)
                       env env
                       :else (stdlib/sandbox-env)))
        _ (when fakegoog
            (set! env.global env)
            (set! env.goog #js {})
            (set! env.goog.require (partial fakegoog/req env))
            (set! env.goog.provide (partial fakegoog/prov env))
            (set! env.goog.global env))
        runtime {:env env
                 :loaded loaded
                 :state state
                 :ns-cache ns-cache
                 :js-deps js-deps
                 :bootstrapped? true}
        job #(let [runner (let [new (js/stopify.stopifyLocally "")]
                            (set! (.-g new) env)
                            new)
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
                               (set! *compiler* @coop-state)))
                   opts (eval-opts fs runner print-fn sandbox ns onYield onRun
                                   compiled?)
                   bootstrap-opts (eval-opts fs runner print-fn sandbox nil
                                             onYield onRun compiled?)
                   pause-eval #(.pause runner
                                       (fn [ln]
                                         (onYield)
                                         (% ln)))
                   resume-eval (fn []
                                 (onRun)
                                 (.resume runner))
                   finish-comp (fn []
                                 (reset! internal-running? false)
                                 (reset! running? false)
                                 (swap! stopify-queue pop)
                                 (when-not (empty? @stopify-queue)
                                   (js/setTimeout (peek @stopify-queue) 0)))
                   stop-eval #(pause-eval
                               (fn []
                                 (finish-comp)
                                 (%)))
                   cb (fn [res]
                        (onYield)
                        (finish-comp)
                        (cb res runtime))
                   post-load #(condp = lang
                                :clj (cljs/eval-str state src file-name
                                                    opts cb)
                                :js ((:eval opts) {:source src
                                                   :name file-name}
                                     cb))]
               (try
                 (swap! state update-in [:cljs.analyzer/namespaces]
                        (partial merge state-injections))
                 (reset! internal-running? true)
                 (when-not bootstrapped?
                   (reset! bootstrapping? true))
                 (onRun)
                 (ocall runner :run
                        #(if bootstrapped?
                           (post-load)
                           (cljs/eval-str
                            state stdlib/injectable
                            "core.cljs" bootstrap-opts
                            (fn [res]
                              (onYield)
                              (reset! bootstrapping? false)
                              (swap! state assoc :js-dependency-index js-deps)
                              (onRun)
                              (set! runner.g.visr.core$macros runner.g.visr.core)
                              (ana/intern-macros 'visr.core)
                              (post-load))))
                        onYield #() onRun)
                 (reset!
                  internal-ctrls
                  {:pause-eval #(if @compiled?
                                  (pause-eval %)
                                  (add-watch
                                   compiled? ::pause
                                   (fn [k r o n]
                                     (when n
                                       (js/setTimeout (fn [] (pause-eval %)) 0)
                                       (remove-watch compiled? ::pause)))))
                   :resume-eval #(if @compiled?
                                   (resume-eval)
                                   (add-watch
                                    compiled? ::resume
                                    (fn [k r o n]
                                      (when n
                                        (js/setTimeout (fn [] (resume-eval)) 0)
                                        (remove-watch compiled? ::resume)))))
                   :stop-eval #(if @compiled?
                                 (stop-eval %)
                                 (add-watch
                                  compiled? ::stop
                                  (fn [k r o n]
                                    (when n
                                      (js/setTimeout (fn [](stop-eval %)) 0)
                                      (remove-watch compiled? ::stop)))))})
                 (catch :default e
                   (cb e))))]
    (swap! stopify-queue conj job)
    (when (= (count @stopify-queue) 1)
      (js/setTimeout job 0))
    (reset! running? true)
    {:pause-eval #(if @internal-ctrls
                    ((:pause-eval @internal-ctrls) %)
                    (add-watch internal-ctrls ::pause
                               (fn [k r o n]
                                 (when n
                                   ((:pause-eval n) %)
                                   (remove-watch internal-ctrls ::pause)))))
     :resume-eval #(if @internal-ctrls
                     ((:resume-eval @internal-ctrls) %)
                     (add-watch internal-ctrls ::resume
                                (fn [k r o n]
                                  (when n
                                    ((:resume-eval n) %)
                                    (remove-watch internal-ctrls ::resume)))))
     :stop-eval #(if @internal-ctrls
                   ((:stop-eval @internal-ctrls) %)
                   (add-watch internal-ctrls ::stop
                              (fn [k r o n]
                                (when n
                                  ((:stop-eval n) %)
                                  (remove-watch internal-ctrls ::stop)))))
     :running? running?
     :runtime runtime}))

(defn eval-buffer [{:keys [input output file-name fs running? runner] :as db}
                   & [cb]]
  (deps->env
   db
   (fn [deps-env]
     (when deps-env
       (reset! stopified-cache {})
       (reset! runner
               (eval-str @input
                         {:runtime (stdlib/reagent-runtime deps-env db)
                          :fs fs
                          :running? running?
                          :file-name file-name
                          :print-fn #(swap! output conj %)}
                         (or cb #(print-res db %))))))))

;; Converts a (1-index) line and col pair to a (0-indexed) string index.
(defn buffer-position->index [str line column]
  (loop [i 0
         line line]
    (if (<= line 1)
      (dec (+ i column))
      (recur (inc (.indexOf str "\n" i))
             (dec line)))))

(defn mk-editor [tag {:keys [editor] :as data}
                 stx runtime fs file-src cb & [visr-run-ref]]
  (let [ns (namespace editor)
        mk-fn (fn [res]
                (if (and res (:error res))
                  (cb res)
                  (eval-str (str "(" (stdlib/visr->render editor)
                                 " (js/visr->atom " (pr-str tag) "))")
                            {:runtime runtime
                             :ns ns
                             :running? visr-run-ref
                             :fs fs}
                            cb)))]
    (cond
      ns (ns->string fs {:name ns
                         :macros false
                         :path (apply js/path.join (.split ns "."))}
                     (fn [src]
                       (let [src (if src (:source src) "")]
                         (eval-str src
                                   {:runtime runtime
                                    :running? visr-run-ref
                                    :fs fs}
                                   mk-fn))))
      :else (eval-str file-src
                      {:runtime runtime
                       :running? visr-run-ref
                       :fs fs}
                      mk-fn))))

(defn dom->reagent [element]
  [(keyword (-> element .-nodeName .toLowerCase))
   (into {}
         (for [i (range (-> element .-attributes .-length))]
           (let [attr (-> element .-attributes (.item i))]
             [(.-key attr) (.-value attr)])))
   (-> element .-innerHTML)])

(defn frame-box [fbox]
  (reset! fbox (useFrame))
  [:<>])

(defn styled-frame [mopts & mbody]
  (let [opts (if (map? mopts)
               (dissoc mopts :on-resize :on-scroll:width :height
                       :scroll-top :scroll-left)
               {})
        body (if (map? mopts) mbody (into [mopts] mbody))
        on-resize (and (map? mopts) (:on-resize mopts))
        on-scroll (and (map? mopts) (:on-scroll mopts))
        width (and (map? mopts) (:width mopts))
        height (and (map? mopts) (:height mopts))
        scroll-top (and (map? mopts) (:scroll-top mopts))
        scroll-left (and (map? mopts) (:scroll-left mopts))
        fbox (atom nil)]
    [:span {:style {:margin 0
                    :padding 0
                    :resize "both"
                    :overflow "hidden"
                    :display "flex"
                    :width width
                    :height height}}
     [:> ReactResizeDetector {:handleWidth true :handleHeight true
                              :on-resize #(when on-resize (apply on-resize %&))}]
     (into [:> Frame (conj opts
                           {:head
                            (r/as-element
                             (into [:<> (:head opts)]
                                   (for [i (-> js/document .-head
                                               (.getElementsByTagName "style"))]
                                     (dom->reagent i))))
                            :style {:flex-grow 1
                                    :margin 0
                                    :border 0
                                    :padding 0
                                    :width "100%"
                                    :height "100%"}
                            :contentDidMount
                            #(when @fbox
                               (let [doc (oget @fbox :document)]
                                 (when (and scroll-top scroll-left)
                                   (js/setTimeout
                                    (fn [] ; Takes a moment for useFrame to update
                                      (-> doc (oget :scrollingElement)
                                          (ocall :scrollTo
                                                 #js {:left scroll-left
                                                      :top scroll-top
                                                      :behavior "instant"})))
                                    300))
                                 (when on-scroll
                                   (ocall doc :addEventListener "scroll" on-scroll
                                          #js {:passive true}))))})
            [:f> frame-box fbox]]
           body)]))

(defn codemirror-options [{:keys [options] :as db}]
  {:mode "clojure"
   :keyMap @(:keymap options)
   :theme @(:theme options)
   :matchBrackets true
   :showCursorWhenSelecting true
   :lineWrapping @(:line-wrapping options)
   :lineNumbers @(:line-numbers options)})

;; Based on: https://lilac.town/writing/modern-react-in-cljs-error-boundaries/
(defn err-boundary [& children]
  (let [err-state (r/atom nil)]
    (r/create-class
     {:display-name "ErrBoundary"
      :component-did-catch (fn [err info]
                             (reset! err-state [err info]))
      :reagent-render (fn [& children]
                        (if (nil? @err-state)
                          (into [:<>] children)
                          (let [[_ info] @err-state]
                            [styled-frame ;;{:ref ref}
                             [:div {:style {:white-space "pre"}}
                              (pr-str info)]])))})))

(defn stx->stx-str [stx]
  (binding [cljs.pprint/*print-right-margin* 40]
    (with-out-str (pprint stx))))

(defn visr-hider [db runtime tag info stx file-src hidden refs mark-box]
  (let [show-visr (atom false)
        show-code (atom false)
        visr-scroll (atom nil)
        visr (atom nil)
        focused? (atom false)
        scratch (atom nil)]
    (add-watch info ::reset-visr
               (fn [k r o n]
                 (when-not (= o n)
                   (reset! visr nil))))
    (add-watch stx ::reset-visr
               (fn [k r o n]
                 (when-not (= o n)
                   (reset! visr nil))))
    (fn [{:keys [fs] :as db}
         runtime tag info stx file-src hidden refs mark-box]
      (when (and (not @hidden) @show-visr (= @visr nil))
        (reset! visr [:div])
        (mk-editor tag @info @stx runtime fs file-src
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
                    :on-click (fn []
                                (swap! show-visr not)
                                (if-let [rmb @mark-box]
                                  (ocall rmb :changed)))}
         "\uD83D\uDC41"]
        (when (and (not @hidden) @show-visr)
          [err-boundary
           ;;{:ref #(swap! refs assoc :visr-err %)}
           [styled-frame {:ref #(swap! refs assoc :visr %)
                          :on-scroll
                          (fn [event]
                            (let [se (oget event :target.scrollingElement)]
                              (reset! visr-scroll
                                      {:scroll-left (oget se :scrollLeft)
                                       :scroll-top (oget se :scrollTop)})))
                          :scroll-top (:scroll-top @visr-scroll)
                          :scroll-left (:scroll-left @visr-scroll)}
            @visr]])
        [:> Button {:size "sm"
                    :aria-label strings/CODE
                    :style {:padding 0 :font-size "0.8em"}
                    :variant "secondary"
                    :on-click (fn []
                                (swap! show-code not)
                                (if-let [rmb @mark-box]
                                  (ocall rmb :changed)))}
         [:code "(\u03BB)"]]
        (when (and (not @hidden) @show-code)
          [styled-frame
           {:ref #(swap! refs assoc :code %)
            :head [:style (css [:.frame-root :.frame-content {:height "100%"}])]}
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
                :on-focus (fn []
                            (reset! scratch (:editor @info))
                            (reset! focused? true))
                :on-blur (fn []
                           (swap! info assoc :editor @scratch)
                           (reset! focused? false))
                :on-change #(let [value (oget % "target.value")]
                              (when (valid-id? value)
                                (if @focused?
                                  (reset! scratch (symbol value))
                                  (swap! info assoc :editor (symbol value)))))}]]]
            [:> (oget Form :Group) {:as Row
                                    :style {:margin "0"
                                            :flex "1 1 auto"}}
             [:> Col {:xs "12"
                      :style {:padding "0"}}
              [:> cm/UnControlled
               {:options (codemirror-options db)
                :onFocus (fn []
                           (reset! scratch (stx->stx-str @stx))
                           (reset! focused? true))
                :onBlur (fn []
                          (reset! stx (read-string @scratch))
                          (reset! focused? false))
                :onChange (fn [this operation value]
                            (if @focused?
                              (reset! scratch value)
                              (reset! stx (read-string value))))
                :editorDidMount (fn [e]
                                  (-> e (ocall "getDoc")
                                      (ocall "setValue"
                                             (stx->stx-str @stx))))}]]]]])]])))

(defn reset-editors! [source set-text editor instances operation cache
                      {{:keys [show-editors]} :options
                       :keys [fs deps] :as db}
                      cb & [visr-run-ref]]
  (when (and @show-editors @editor)
    (let [old-instances (atom @instances)
          prog (indexing-push-back-reader source)
          eof (atom nil)
          fresh-cache (atom false)]
      (doseq [[k v] @instances]
        (ocall @(:mark v) :clear))
      (reset! instances {})
      (cb-thread
       (fn [n]
         (if-let [c @cache]
           (n c)
           (cb-thread
            #(deps->env db %)
            #(if %2
               (eval-str ""
                         {:runtime (stdlib/reagent-runtime
                                    (assoc-in %2 [:env (munge "visr->atom")]
                                              (fn [x]
                                                (get-in @instances [x :stx])))
                                    db)
                          :running? visr-run-ref
                          :fs fs}
                         %)
               (cb))
            (fn [_ _ runtime]
              (reset! cache runtime)
              (reset! fresh-cache true)
              (n runtime)))))
       (fn [_ runtime]
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
                      (let [stxinfo (meta form)]
                        (when (:editor stxinfo)
                          (let [[k {:keys [visr stx info mark hidden refs]}]
                                (some (fn [[k v]]
                                        (when (= @(:stx v) (second form)) [k v]))
                                      @old-instances),
                                visr (or visr (.createElement js/document "span"))
                                info (or info (atom stxinfo))
                                stx (or stx (atom (second form)))
                                mark (or mark (clojure.core/atom nil))
                                tag (or k (random-uuid))
                                hidden (or hidden (atom false))
                                refs (or refs (atom nil))
                                start (buffer-position->index
                                       source
                                       (:line @info)
                                       (:column @info)),
                                end (atom (buffer-position->index
                                           source
                                           (:end-line @info)
                                           (:end-column @info))),
                                commit! #(let [s (stdlib/write-visr
                                                  (:editor @info)
                                                  (stx->stx-str @stx))
                                               ret (str (subs source 0 start)
                                                        s
                                                        (subs source @end))]
                                           (reset! end (+ start (count s)))
                                           (reset! cache nil) ;; XXX Why? >.<
                                           (set-text ret))]
                            (if k
                              (do
                                (swap! old-instances dissoc k)
                                (remove-watch info ::commit)
                                (remove-watch stx ::commit)
                                (doseq [[k v] @refs]
                                  (when v
                                    (ocall v :setState #js {:iframeLoaded false})))
                                (when @fresh-cache
                                  (swap! info assoc :visr-internal-refresh true))
                                (reset! info stxinfo)
                                (reset! stx (second form)))
                              (d/render [visr-hider db runtime tag info stx
                                         source hidden refs mark]
                                        visr))
                            (set! js/window.frefs refs)
                            (let [r-mark (->
                                          @editor (ocall :getDoc)
                                          (ocall
                                           :markText
                                           #js {:line (dec (:line @info))
                                                :ch (dec (:column @info))}
                                           #js {:line (dec (:end-line @info))
                                                :ch (dec (:end-column @info))}
                                           #js {:collapsed true
                                                :replacedWith visr}))]
                              ;;(codemirror/on r-mark "hide" #(reset! hidden true))
                              ;;(codemirror/on r-mark "unhide"
                              ;;  #(reset! hidden false))
                              (reset! mark r-mark)
                              (swap! instances assoc
                                     tag
                                     {:mark mark
                                      :commit! commit!
                                      :visr visr
                                      :info info
                                      :stx stx
                                      :refs refs
                                      :hidden hidden})
                              (add-watch info ::commit
                                         (fn [k r o n]
                                           (when-not (= o n)
                                             (commit!))))
                              (add-watch stx ::commit
                                         (fn [k r o n]
                                           (when-not (= o n)
                                             (commit!)))))))
                        (doseq [e form]
                          (when (coll? e)
                            (rec e)))))
                    form))
                 (recur))))
           (cb)
           (catch ExceptionInfo e
             (js/console.log e))
           (catch js/Error e
             (throw e))))))))

