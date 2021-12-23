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
   [ajax.core :refer [GET POST PUT]]
   [interactive-syntax.utils :refer [cb-thread cb-loop module->uri]]
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
   [react-switch]))

(def ^:private template (.-default babel-template))
(def ^:private ReactResizeDetector (.-default react-resize-detector))

(defn print-res [{:keys [output]
                  :as db}
                 res]
  (binding [*print-fn* #(swap! output conj %)]
    (cond
      (contains? res :error)
      (println (oget (:error res) :stack))
      (contains? res :value)
      (let [v (:value res)]
        (condp = (oget v :type)
          "exception"
          (do (println (str (oget v :value.name) ": " (oget v :value.message)))
              (doseq [i (oget v :stack)]
                (println (str "\t* " i)))
              (println "Runtime Stack:")
              (println (oget v :value.stack))),
          (if-some [v (oget v :value)]
            (println v)))))))

(defn valid-id? [id]
  (try
    (= (symbol id) (read-string (str id)))
    (catch js/Error e false)))

;; -------------------------
;; Package Manager

;; Should do some other validation probably...
(defn get-pkg [{:keys [url name version]} cb]
  (let [sanatize-map {"@" "" "/" ""}
        pkg-name (cond (and url (not= url "")) "",
                       ;;(and version (not= version ""))
                       ;;(str (string/escape name sanatize-map) "/"
                       ;;     (string/escape version sanatize-map)),
                       :else (string/escape name sanatize-map))
        url (if (and url (not= url ""))
              url
              (str shop-url pkg-name ".js"))]
    (GET url {:handler cb})))

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

(defn deps->env [{:keys [deps fs output] :as db} cb]
  (let [system js/System];(new (.-constructor js/System))]
    ((fn rec [denv dloaded djs deps]
       (if (empty? deps)
         (cb {:env denv :loaded dloaded :js-deps djs})
         (let [[[key {:keys [name] :as dep}] & rest-deps] deps]
           (cb-thread
            #(ocall fs :readFile (js/path.join deps-root name) %)
            #(if %2 (js/console.error %2) (% %3))
            #(let [url (module->uri %2)]
               (-> system (ocall :import url)
                   (.then #(rec (assoc denv (munge name) (.-default %))
                                (conj dloaded (symbol name))
                                (assoc djs (str name)
                                       {:global-exports {(symbol name)
                                                         (munge name)}})
                                rest-deps))
                   (.catch (fn [err]
                             (reset! output #queue
                                     [(str "Cannot load dependency " name ":")
                                      (str err)])
                             (cb nil)))
                   (.finally #(js/URL.revokeObjectURL url))))))))
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
              (if-let [file (get stdlib/shadow-fs
                                 (str path "." (first extensions)))]
                (cb {:lang (if (= (first extensions) "js") :js :clj)
                     :source file
                     :file file-path})
                (rec (rest extensions)))
              (let [source (.toString data)]
                (cb {:lang (if (= (first extensions) "js") :js :clj)
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
            (when-not env.goog (set! env.goog #js {}))
            (set! env.goog.require (partial fakegoog/req env))
            (set! env.goog.provide (partial fakegoog/prov env))
            (set! env.goog.global env))
        runtime {:env env
                 :loaded loaded
                 :state state
                 :ns-cache ns-cache
                 :js-deps js-deps
                 :bootstrapped? true}
        job #(let [runner (let [r (js/stopify.stopifyLocally
                                   "" #js {:newMethod "direct"})]
                            (set! (.-g r) env)
                            r)
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

(defn eval-buffer [{{:keys [run-functions]} :options
                    :keys [input output ns file-name fs running? runner] :as db}
                   & [cb]]
  (cb-thread
   #(deps->env db %)
   #(when %2
      (reset! stopified-cache {})
      (reset! runner
              (eval-str @input
                        {:runtime (stdlib/reagent-runtime %2 db)
                         :fs fs
                         :running? running?
                         :file-name file-name
                         :print-fn #(swap! output conj %)}
                        %)))
   (fn [n res rtm]
     (let [new-ns (:ns res)]
       (print-res db res)
       (reset! ns new-ns)
       (cb-loop @run-functions
                #(when (get-in @(:state rtm)
                               [:cljs.analyzer/namespaces new-ns :defs (symbol %2)])
                   (eval-str (str "(" %2 ")")
                             {:runtime rtm
                              :fs fs
                              :file-name file-name
                              :ns new-ns
                              :print-fn #(swap! output conj %)}
                             (fn [r]
                               (print-res db r)
                               (%))))
                #(n res))))
   #(when cb (cb %2))))

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
                  (eval-str (str "[" (stdlib/visr->render editor)
                                 " (js/visr->atom " (pr-str tag)
                                 ")(js/visr->atom-info " (pr-str tag)")]")
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

(defn styled-frame [mopts & mbody]
  (let [opts (if (map? mopts)
               (dissoc mopts :on-resize :on-scroll :width :height
                       :scroll-top :scroll-left)
               {})
        body (if (map? mopts) mbody (into [mopts] mbody))
        on-resize (and (map? mopts) (:on-resize mopts))
        on-scroll (and (map? mopts) (:on-scroll mopts))
        scroll-top (and (map? mopts) (:scroll-top mopts))
        scroll-left (and (map? mopts) (:scroll-left mopts))]
    (into [:div
           (assoc opts :style {:margin 0
                               :padding 0
                               :border 0
                               :resize "both"
                               :overflow "hidden"
                               :display "inline-block"
                               :min-width 25
                               :min-height 25})
           [:> ReactResizeDetector {:handleWidth true :handleHeight true
                                    :on-resize #(when on-resize
                                                  (apply on-resize %&))}]]
                              ;;:contentDidMount
                              ;;#(if-let [f @fbox]
                              ;;   (let [doc (oget f :document)]
                              ;;     (when (and scroll-top scroll-left)
                              ;;       (js/setTimeout
                              ;;        (fn [] ; Takes a bit for useFrame to update
                              ;;          (-> doc (oget :scrollingElement)
                              ;;              (ocall :scrollTo
                              ;;                     #js {:left scroll-left
                              ;;                          :top scroll-top
                              ;;                          :behavior "instant"})))
                              ;;        300))
                              ;;     (when on-scroll
                              ;;       (ocall doc :addEventListener
                              ;;              "scroll" on-scroll
                              ;;              #js {:passive true}))))
          body)))

(defn codemirror-options [{:keys [options] :as db}]
  {:mode "clojure"
   :keyMap @(:keymap options)
   :extraKeys {"Tab" (condp = @(:tab-behavior options)
                       "indent" "indentMore"
                       "auto" "indentAuto"
                       "tab" "insertTab"
                       "defaultTab")
               "Ctrl-Space" "autocomplete"}
   :theme @(:theme options)
   :matchBrackets true
   :showCursorWhenSelecting true
   :autoCloseBrackets true
   :lineWrapping @(:line-wrapping options)
   :lineNumbers @(:line-numbers options)
   :foldGutter true,
   :gutters #js ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]})

;; Based on: https://lilac.town/writing/modern-react-in-cljs-error-boundaries/
(defn err-boundary [& children]
  (let [err-state (r/atom nil)]
    (r/create-class
     {:display-name "ErrBoundary"
      :component-did-catch (fn [err info]
                             (reset! err-state [err info]))
      ;;:getDerivedStateFromError (fn [error]
      ;;                                (js/console.log error)
      ;;                                [:div {:style {:white-space "pre"}}
      ;;                                 (pr-str error)])
      :reagent-render (fn [& children]
                        (if (nil? @err-state)
                          (into [:<>] children)
                          (let [[err info] @err-state]
                            (js/console.log err)
                            (js/console.error info)
                            [styled-frame ;;{:ref ref}
                             [:div {:style {:white-space "pre"}}
                              (pr-str info)]])))})))

(defn stx->stx-str [stx]
  (binding [cljs.pprint/*print-right-margin* 40]
    (with-out-str (pprint stx))))

(defn visr-hider [{{:keys [visr-defaults]} :options :as db}
                  runtime tag info stx file-src refs mark-box]
  (let [visr-scroll (atom nil)
        visr (atom nil)
        focused? (atom false)
        scratch (clojure.core/atom nil)]
    (add-watch info ::reset-visr
               (fn [k r o n]
                 (when-not (= o n)
                   (reset! visr nil))))
    (add-watch stx ::reset-visr
               (fn [k r o n]
                 (when-not (= o n)
                   (reset! visr nil))))
    (fn [{:keys [fs] :as db}
         runtime tag info stx file-src refs mark-box]
      (let [show-visr (r/cursor info [:show-visr])
            show-code (r/cursor info [:show-text])]
        (when-not (contains? @info :show-visr)
          (reset! show-visr (contains? visr-defaults :show-visr)))
        (when-not (contains? @info :show-text)
          (reset! show-code (contains? visr-defaults :show-code)))
        (when (and @show-visr (= @visr nil))
          (reset! visr [:div])
          (mk-editor tag @info @stx runtime fs file-src
                     (fn [ret]
                       (reset! visr
                               (cond
                                 (:value ret)
                                 (let [v (:value ret)]
                                   (cond (= (oget v :type) "exception")
                                         [:div {:style {:white-space "pre"}}
                                          ;;(oget v :value.message)
                                          (oget v :value.stack)],
                                         :else (oget v :value))),
                                 :else [:div (.-stack ret)])))))
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
          (when @show-visr
            [err-boundary
             ;;{:ref #(swap! refs assoc :visr-err %)}
             [styled-frame {:class "visr-body"
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
          (when @show-code
            [styled-frame {:class "visr-code"}
             [:> Form {:onSubmit #(do (.preventDefault %)
                                      (.stopPropagation %))
                       :on-focus (fn []
                                   (reset! scratch {:name (:editor @info)
                                                    :value (stx->stx-str @stx)})
                                   (reset! focused? true))
                       :on-blur (fn []
                                  (swap! info assoc :editor (:name @scratch))
                                  (reset! stx
                                          (let [v (:value @scratch)]
                                            (try (read-string v)
                                                 (catch js/Error e {:value v}))))
                                  (reset! focused? false))
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
                  :on-change #(let [value (oget % "target.value")]
                                (when (valid-id? value)
                                  (if @focused?
                                    (swap! scratch assoc :name (symbol value))
                                    (swap! info assoc :editor (symbol value)))))}]]]
              [:> (oget Form :Group) {:as Row
                                      :style {:margin "0"
                                              :flex "1 1 auto"}}
               [:> Col {:xs "12"
                        :style {:padding "0"}}
                [:> cm/UnControlled
                 {:options (codemirror-options db)
                  :onChange (fn [this operation value]
                              (if @focused?
                                (swap! scratch assoc :value value)
                                (reset! stx
                                        (try (read-string value)
                                             (catch js/Error e {:value value})))))
                  :editorDidMount (fn [e]
                                    (-> e (ocall "getDoc")
                                        (ocall "setValue"
                                               (stx->stx-str @stx))))}]]]]])]]))))

(defn reset-editors! [source set-text editor instances operation cache queue
                      {{:keys [show-editors visr-default]} :options
                       :keys [fs deps] :as db}
                      cb & [visr-run-ref]]
  (when (and @show-editors @editor)
    (let [old-instances (atom @instances)
          prog (indexing-push-back-reader source)
          eof (atom nil)
          fresh-cache (atom false)
          cb (fn []
               (swap! queue pop)
               (when-not (empty? @queue)
                 (js/setTimeout (peek @queue) 0))
               (cb))]
      (cb-thread
       (fn [n]
         (swap! queue conj n)
         (when (= (count @queue) 1)
           (n)))
       (fn [n]
         (doseq [[k v] @instances]
           (ocall @(:mark v) :clear))
         (reset! instances {})
         (if-let [c @cache]
           (n c)
           (cb-thread
            #(deps->env db %)
            #(if %2
               (eval-str ""
                         {:runtime (stdlib/reagent-runtime
                                    (-> %2
                                        (assoc-in [:env (munge "visr->atom")]
                                                  (fn [x]
                                                    (or (get-in @instances [x :stx])
                                                        (atom nil))))
                                        (assoc-in [:env (munge "visr->atom-info")]
                                                  (fn [x]
                                                    (or (get-in @instances
                                                                [x :info])
                                                        (atom nil)))))
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
                          (let [[k {:keys [visr stx info mark refs]}]
                                (some (fn [[k v]]
                                        (when (= @(:stx v) (second form)) [k v]))
                                      @old-instances),
                                visr (or visr (.createElement js/document "span"))
                                info (or info (atom stxinfo))
                                stx (or stx (atom (second form)))
                                mark (or mark (clojure.core/atom nil))
                                tag (or k (random-uuid))
                                refs (or refs (atom nil))
                                start (buffer-position->index
                                       source
                                       (:line stxinfo)
                                       (:column stxinfo)),
                                end (buffer-position->index
                                     source
                                     (:end-line stxinfo)
                                     (:end-column stxinfo)),
                                commit! #(let [s (stdlib/write-visr
                                                  (:editor @info)
                                                  (stx->stx-str @stx)
                                                  @info)
                                               ret (str (subs source 0 start)
                                                        s
                                                        (subs source end))]
                                           (set-text ret))]
                            (if k
                              (do
                                (swap! old-instances dissoc k)
                                (remove-watch info ::commit)
                                (remove-watch stx ::commit)
                                (when @fresh-cache
                                  (swap! info assoc :visr-internal-refresh true))
                                (reset! info stxinfo)
                                (reset! stx (second form)))
                              (d/render [visr-hider db runtime tag info stx
                                         source refs mark]
                                        visr))
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
                              (reset! mark r-mark)
                              (swap! instances assoc
                                     tag
                                     {:mark mark
                                      :commit! commit!
                                      :visr visr
                                      :info info
                                      :stx stx
                                      :refs refs})
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

