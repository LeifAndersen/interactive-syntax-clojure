(ns interactive-syntax.env
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   [react]
   [react-dom]
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
   [interactive-syntax.utils :refer [cb-thread cb-loop]]
   [interactive-syntax.db :refer [files-root deps-root]]
   [interactive-syntax.stdlib :as stdlib]
   [interactive-syntax.strings :as strings]
   [garden.core :as garden :refer [css]]
   ["@stopify/higher-order-functions" :as hof]
   ["@babel/parser" :as babylon]
   ["@babel/template" :as babel-template]
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

(defn deps->env [{:keys [deps deps-env env fs] :as db} cb]
  (let [system (new (.-constructor js/System))]
    ((fn rec [denv dloaded djs deps]
       (if (empty? deps)
         (do
           (reset! deps-env {:env denv :loaded dloaded :js-deps djs})
           (reset! env nil)
           (cb {:env denv :loaded dloaded :js-deps djs}))
         (let [[[key {:keys [name] :as dep}] & rest-deps] deps]
           (cb-thread
            #(ocall fs :readFile (js/path.join deps-root name) %)
            (fn [next err source]
              (if err
                (console.error err)
                (next source)))
            (fn [next source]
              (-> system (ocall :import (module->uri (.toString source)))
                  (.then #(rec (assoc denv (munge name) %)
                               (conj dloaded (symbol name))
                               (assoc djs (str name)
                                      {:global-exports {(symbol name)
                                                        (munge name)}})
                               rest-deps))
                  (.catch #(js/console.error %))))))))
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

(def stopified-cache (atom {}))
(def stopify-queue (atom #queue []))

(defn eval-opts [fs runner print-fn sandbox? ns onYield onRun smooth-editing]
  {:eval (if sandbox?
           (fn [{:keys [source name cache clj-source]} cb]
             (cond
               (and
                (not (string/ends-with? (str (:name cache)) "$macros"))
                (contains? @stopified-cache clj-source))
               (ocall runner :evalCompiled (get @stopified-cache clj-source)
                      (fn [res]
                        (when-not (or (= (:type res) "normal")
                                      (= (:value res) nil))
                          (println res))
                        (cb res))),
               ;; sync v async, currently always sync
               (not smooth-editing)
               (let [ast (babylon/parse source)
                     polyfilled (hof/polyfillHofFromAst ast)
                     compiled (ocall runner :compileFromAst polyfilled)]
                 (when-not (string/ends-with? (str (:name cache)) "$macros")
                   (swap! stopified-cache assoc clj-source compiled))
                 (ocall runner :evalCompiled compiled
                        (fn [res]
                          (when-not (or (= (:type res) "normal")
                                        (= (:value res) nil))
                            (println res))
                          (cb res)))),
               :else
               (let [worker (new js/StopifyWorker)]
                 (onYield)
                 (set! worker.onmessage
                       (fn [msg]
                         (when-not (string/ends-with? (str (:name cache)) "$macros")
                           (swap! stopified-cache assoc clj-source
                                  (oget msg :data.prog)))
                         (onRun)
                         (ocall runner :evalCompiled (oget msg :data.prog)
                                (fn [res]
                                  (when-not (or (= (:type res) "normal")
                                                (= (:value res) nil))
                                    (println res))
                                  (cb res)))))
                 (.postMessage worker #js {:prog source}))))
           cljs.js/js-eval)
   :load (partial ns->string fs)
   ;;:verbose true
   :source-map false ; true
   :ns ns})

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
                        state-injections
                        js-deps
                        ns-cache
                        fakegoog-global
                        ns
                        smooth-editing]} ; <-Beta, will become only path when stable
                cb]
  (let [internal-res (atom {})
        job (fn []
              (let [resume (and runner true)
                    sandbox (if (nil? sandbox) true sandbox)
                    runner (let [new (js/stopify.stopifyLocally "")]
                             ;; stopify bug, always uses the last runner environment
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
                    opts (eval-opts fs runner print-fn sandbox ns onYield onRun
                                    smooth-editing)
                    bootstrap-opts (eval-opts fs runner print-fn sandbox nil
                                              onYield onRun smooth-editing)
                    pause-eval (fn [cb]
                                 (.pause runner
                                         (fn [ln]
                                           (onYield)
                                           (cb ln))))
                    resume-eval (fn []
                                  (onRun)
                                  (.resume runner))
                    finish-comp (fn []
                                  (reset! internal-running? false)
                                  (reset! running? false)
                                  (swap! stopify-queue pop)
                                  (when-not (empty? @stopify-queue)
                                    (js/setTimeout (peek @stopify-queue) 0)))
                    stop-eval (fn [cb]
                                (pause-eval
                                 (fn []
                                   (finish-comp)
                                   (cb))))
                    cb (fn [res]
                         (onYield)
                         (finish-comp)
                         (cb res))
                    post-load (fn []
                                (try (onRun)
                                     (condp = lang
                                       :clj (cljs/eval-str state src file-name
                                                           opts cb)
                                       :js ((:eval opts) {:source src
                                                          :name file-name}
                                            cb))
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
                  (swap! state update-in [:cljs.analyzer/namespaces]
                         (partial merge state-injections))
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
                      (let [res {:runner runner
                                 :loaded loaded
                                 :state state
                                 :ns-cache ns-cache
                                 :pause-eval pause-eval
                                 :resume-eval resume-eval
                                 :stop-eval stop-eval}]
                        (reset! internal-res res))))
                  (catch :default e
                    (when @internal-running?
                      (onYield))
                    (throw e)))))]
    (swap! stopify-queue conj job)
    (if (= (count @stopify-queue) 1)
      (job)
      {:pause-eval #((:pause-eval @internal-res) %)
       :resume-eval #((:resume-eval @internal-res) %)
       :stop-eval #((:stop-eval @internal-res) %)})))

(defn eval-buffer [{:keys [input
                           output
                           file-name
                           fs
                           running?
                           runner]
                    {:keys [smooth-editing]} :options
                    :as db}
                   & [callback]]
  (deps->env
   db
   (fn [deps-env]
     (reset! stopified-cache {})
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
                       :smooth-editing @smooth-editing
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
                 fs file-src smooth-editing cb
                 & [visr-run-ref]]
  (let [ns (namespace editor)
        srcloc (info->srcloc data)
        catch-fn (fn [e]
                   (cb e))
        mk-fn (fn [res]
                (when (and res (:error res))
                  (throw res))
                (eval-str (str "(" (stdlib/visr->render editor)
                               " (js/srcloc->atom " srcloc "))")
                          {:runner runner
                           :loaded @loaded
                           :state state
                           :ns-cache ns-cache
                           :ns ns
                           :running? visr-run-ref
                           :smooth-editing @smooth-editing
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
                                      :running? visr-run-ref
                                      :smooth-editing @smooth-editing
                                      :fs fs}
                                     mk-fn))))
        :else (eval-str file-src
                        {:runner runner
                         :loaded @loaded
                         :state state
                         :ns-cache ns-cache
                         :running? visr-run-ref
                         :smooth-editing @smooth-editing
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

(defn frame-box [fbox]
  (reset! fbox (useFrame))
  [:<>])

(defn styled-frame [mopts & mbody]
  (let [opts (if (map? mopts)
               (dissoc mopts :on-resize :on-scroll :width :height
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
                                   (-> doc (oget :scrollingElement)
                                       (ocall :scrollTo
                                              #js {:left scroll-left
                                                   :top scroll-top
                                                   :behavior "instant"})))
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

(defn visr-hider [{{:keys [smooth-editing] :as options} :options
                   :keys [fs] :as db}
                  editor show-visr show-code visr-size visr-scroll code-size
                  run-state info stx-box changed? file-src commit! update-box
                  rmark-box]
  (let [visr (atom nil)
        focused? (atom false)
        stx->stx-str #(binding [cljs.pprint/*print-right-margin* 40]
                        (with-out-str
                          (pprint %)))
        stx (atom @stx-box)
        stx-str (atom (stx->stx-str @stx-box))]
    (reset! stx-box @stx-str)
    (reset! update-box stx) ;; Intentionally not dereffing
    (add-watch stx ::update-stx-box
               (fn [k r o n]
                 (when-not (= o n)
                   (reset! stx-box (stx->stx-str n))
                   (reset! changed? true)
                   (when-not @focused?
                     (commit!)))))
    (add-watch stx-str ::update-stx-box
               (fn [k r o n]
                 (when-not (= o n)
                   (reset! stx-box n)
                   (reset! changed? true))))
    (fn [{:keys [options fs] :as db} editor show-visr show-code visr-size
         visr-scroll code-size run-state info stx-box changed? file-src commit!
         update-box]
      (when (and @show-visr (= @visr nil))
        (mk-editor @info @stx run-state fs file-src smooth-editing
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
           [styled-frame {:on-resize (fn [width height]
                                       (reset! visr-size {:width width
                                                          :height height})
                                       (when @rmark-box
                                         (ocall @rmark-box :changed)))
                          :on-scroll
                          (fn [event]
                            (let [se (oget event :target.scrollingElement)]
                              (reset! visr-scroll
                                      {:scroll-left (oget se :scrollLeft)
                                       :scroll-top (oget se :scrollTop)})))
                          :scroll-top (:scroll-top @visr-scroll)
                          :scroll-left (:scroll-left @visr-scroll)
                          :width (:width @visr-size)
                          :height (:height @visr-size)}
            @visr]])
        [:> Button {:size "sm"
                    :aria-label strings/CODE
                    :style {:padding 0 :font-size "0.8em"}
                    :variant "secondary"
                    :on-click #(swap! show-code not)}
         [:code "(\u03BB)"]]
        (when @show-code
          [styled-frame
           {:on-resize (fn [width height]
                         (reset! code-size {:width width
                                            :height height})
                         (when @rmark-box
                           (ocall @rmark-box :changed)))
            :width (:width @code-size)
            :height (:height @code-size)
            :on-blur commit!
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
                      {{:keys [smooth-editing] :as options} :options
                       :keys [fs deps env] :as db}
                      cb & [visr-run-ref]]
  (let [old @instances]
    (when @env
      (try
        (ocall (:runner @env) :pause)
        (catch js/Error e)))
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
                                            (munge "srcloc->atom")
                                            (fn [x]
                                              @(get-in @instances [x :update])))
                                :loaded (:loaded deps-env)
                                :js-deps (:js-deps deps-env)
                                :running? visr-run-ref
                                :smooth-editing @smooth-editing
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
                                  show-visr (atom false)
                                  show-code (atom false)
                                  visr-size (atom nil)
                                  visr-scroll (atom nil)
                                  code-size (atom nil)
                                  info (atom info)
                                  form (atom (second form))
                                  changed? (atom false)
                                  start (buffer-position->index
                                          @source
                                          (:line @info)
                                          (:column @info)),
                                  end (atom (buffer-position->index
                                             @source
                                             (:end-line @info)
                                             (:end-column @info)))
                                  new-str (fn [info form]
                                            (let [s (stdlib/write-visr
                                                     (:editor info) form)
                                                  ret (str (subs @source 0 start)
                                                           s
                                                           (subs @source @end))]
                                              (reset! end (+ start (count s)))
                                              ret))
                                  update (atom nil)
                                  commit! #(when @changed?
                                             (set-text (new-str @info @form))
                                             (reset! changed? false))
                                  rmark-box (atom nil)]
                              (d/render
                               [visr-hider db editor show-visr show-code visr-size
                                visr-scroll code-size run-state info form changed?
                                @source commit! update rmark-box]
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
                                (reset! rmark-box r-mark)
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
                                        :visr-size visr-size
                                        :visr-scroll visr-scroll
                                        :code-size code-size
                                        :info info
                                        :stx form})
                                (when (and prev @(:show-visr prev))
                                  (reset! show-visr true))
                                (when (and prev @(:show-code prev))
                                  (reset! show-code true))
                                (if-let [s (and prev @(:visr-size prev))]
                                  (reset! visr-size s))
                                (if-let [s (and prev @(:code-size prev))]
                                  (reset! code-size s))
                                (if-let [s (and prev @(:visr-scroll prev))]
                                  (reset! visr-scroll s)))))
                          (doseq [e form]
                            (when (coll? e)
                              (rec e)))))
                      form))
                   (recur))))
             (cb)
             (catch ExceptionInfo e
               (js/console.log e))
             (catch js/Error e
               (throw e)))))))))
