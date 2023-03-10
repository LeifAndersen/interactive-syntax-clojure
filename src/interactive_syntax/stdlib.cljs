(ns interactive-syntax.stdlib
  (:refer-clojure :exclude [print println])
  (:require-macros
   [interactive-syntax.slurp :refer [slurp]])
  (:require
   [cljs.core :as core]
   [cljs.analyzer]
   [cljs.analyzer.api]
   [cljs.compiler :include-macros true]
   [cljs.env]
   [cljs.js]
   [cljs.pprint]
   [cljs.reader]
   [cljs.source-map]
   [cljs.spec.alpha]
   [cljs.spec.gen.alpha]
   [cljs.spec.test.alpha]
   [cljs.stacktrace]
   [cljs.tagged-literals]
   [cljs.test :include-macros true]
   [cljs.tools.reader]
   [cljs.math]
   [cljs.repl]
   [clojure.walk]
   [clojure.string]
   [clojure.set :refer [union]]
   [clojure.data]
   [clojure.edn]
   [clojure.zip]
   [clojure.reflect]
   [shadow.cljs.modern :include-macros true]
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   [react]
   [react-dom]
   [react-bootstrap :refer [Button ButtonGroup SplitButton
                            Dropdown DropdownButton Tabs Tab
                            Row Col Form Container Modal
                            Table]]
   [jszip]
   [react-split-pane]
   [react-switch]
   [codemirror]
   [react-codemirror2 :as cm]
   [goog.object]
   [oops.core]
   [garden.core :as garden :refer [css]]
   [garden.color]
   [garden.compiler]
   [garden.compression]
   [garden.util]
   [garden.selectors]
   [garden.types]
   [garden.units]
   [cognitect.transit]
   [ajax.core]
   [ajax.protocols]
   [alandipert.storage-atom]
   [zprint.core]))

(def injectable (slurp "src/injectable/core.inject"))

(defprotocol VISR
  (render [this updater] "Syntax (() -> Syntax) -> DOMElement")
  (elaborate [this] "Syntax -> Syntax"))

(defn render-visr [{:keys [output] :as db} visr]
  (swap! output conj visr))

(defn wrap-printer [printer db x]
  (if (satisfies? VISR x)
    (render-visr db x)
    (printer x)))

(defn visr->render [visr]
  (symbol (str visr "+render")))

(defn visr->elaborate [visr]
  (symbol (str visr "+elaborate")))

(defn buffer-writes [main buff timeout & [timeout-limit]]
  (fn [k r o n]
    (when-not (= o n)
      (when @timeout
        (js/clearTimeout @timeout))
      (reset! timeout
              (js/setTimeout
               (fn []
                 (reset! timeout false)
                 (reset! main @buff))
               (or timeout-limit 1000))))))

(defn parse-defvisr [name stx]
  (let [this (gensym 'this)]
    (loop [props {}
           rst stx]
      (if (empty? rst)
        (let [{:keys [elaborate render state state-render-mixin full?]} props]
          (assoc props
                 :this this
                 :render (cond (and state full?)
                               `([~this]
                                 (let [~@state-render-mixin]
                                   ((fn ~render) ~this))),
                               state
                               `([~this]
                                 (let [~@state-render-mixin]
                                   (fn ~render))),
                               :else render)
                 :elaborate (if state
                              `([{:keys [~@state] :as ~this}]
                                ((fn ~elaborate) ~this))
                              elaborate)
                 :name+render (visr->render name)
                 :name+elaborate (visr->elaborate name)))
        (let [fst (first rst)]
          (when (seq? fst)
            (condp contains? (first fst)
              #{'state :state}
              (recur (assoc props
                            :state (for [[k v] (partition 2 (rest fst))] k)
                            :state-render-mixin
                            (apply concat
                                   (for [[k val-shell] (partition 2 (rest fst))]
                                     (let [{:keys [value timeout]
                                            :or {value val-shell timeout 1000}}
                                           val-shell]
                                       `[t# (atom false)
                                         k# (r/cursor ~this [~(keyword k)])
                                         _# (when-not (contains? @~this
                                                                 ~(keyword k))
                                              (reset! k# ~value))
                                         ~k (atom @k#)
                                         _# (add-watch ~k :capture
                                                       (visr.private/buffer-writes
                                                        k# ~k t# ~timeout))]))))
                     (rest rst))
              #{'render :render}
              (recur (assoc props :render (rest fst) :full? false) (rest rst)),
              #{'render-full :render-full}
              (recur (assoc props :render (rest fst) :full? true) (rest rst)),
              #{'elaborate-fn :elaborate-fn}
              (recur (assoc props :elaborate (rest fst) :function? true)
                     (rest rst)),
              #{'elaborate :elaborate}
              (recur (assoc props :elaborate (rest fst) :function? false)
                     (rest rst)))))))))

(defn state-injection [lib-name lib-publics]
  {lib-name
   {:name lib-name
    :global-exports {}
    :defs (into {}
                (for [[k v] lib-publics]
                  [k {:name (symbol v)}]))}})

(defn sandbox-env []
  {:cljs {:core js/cljs.core
          :core$macros js/cljs.core$macros
          :analyzer cljs.analyzer
          :compiler cljs.compiler
          :env cljs.env
          :js cljs.js
          :pprint cljs.pprint
          :reader cljs.reader
          :source_map cljs.source-map
          :spec {:alpha cljs.spec.alpha
                 :gen {:alpha cljs.spec.gen.alpha}
                 :test {:alpha cljs.spec.test.alpha}}
          :stacktrace cljs.stacktrace
          :tagged_literals cljs.tagged-literals
          :test cljs.test
          :tools {:reader cljs.tools.reader}
          :math cljs.math
          :repl cljs.repl
          :user {}}
   :clojure {:walk clojure.walk
             :string clojure.string
             :set clojure.set
             :data clojure.data
             :edn clojure.edn
             :zip clojure.zip
             :reflect clojure.reflect}
   :console js/console
   :navigator js/navigator
   :document js/document
   :window js/window
   :alert js/alert
   :String js/String
   :Object js/Object
   :Function js/Function
   :Array js/Array
   :Set js/Set
   :Math js/Math
   :DOMParser js/DOMParser
   :TextEncoder js/TextEncoder
   :Location js/Location
   :XMLHttpRequest js/XMLHttpRequest
   :atob js/atob
   :btoa js/btoa
   :parseInt js/parseInt
   :parseFloat js/parseFloat
   :isNaN js/isNaN
   :URL js/URL
   :URLSearchParams js/URLSearchParams
   :Blob js/Blob
   :HTMLElement js/HTMLElement
   :FinalizationRegistry js/FinalizationRegistry
   :WebAssembly js/WebAssembly
   :encodeURI js/encodeURI
   :encodeURIComponent js/encodeURIComponent
   :decodeURI js/decodeURI
   :decodeURIComponent js/decodeURIComponent
   :setTimeout js/setTimeout
   :clearTimeout js/clearTimeout
   :setInterval js/setInterval
   :clearInterval js/clearInterval
   :Reflect js/Reflect
   :stopify js/stopify
   :$stopifyArray js/stopifyArray})

(defn builtin-libs []
  {:env {:react react
         :react_dom react-dom
         :react_bootstrap react-bootstrap
         :jszip jszip
         :codemirror codemirror
         :react_codemirror2 cm
         :react_split_pane react-split-pane
         :react_switch react-switch}
   :loaded #{'cljs.core 'react 'react-dom 'react-bootstrap
             'codemirror 'react-codemirror2 'react-split-pane 'react-switch}
   :js-deps (into {}
                  (for [k '[react react-dom react-bootstrap jszip codemirror
                            react-codemirror2 react-split-pane react-switch]]
                    [(str k) {:global-exports {k (munge k)}}]))})

(defn reagent-runtime [base {:keys [fs] :as db}]
  (let [builtins (builtin-libs)]
    {:fakegoog true
     :env (merge
           (:env base)
           (sandbox-env)
           (:env builtins)
           {:visr
            {:utils {:fs fs}
             :private$ {:print (partial wrap-printer core/print db)
                        :println (partial wrap-printer core/println db)
                        :buffer_writes buffer-writes
                        :parse_defvisr parse-defvisr
                        :render_visr (partial render-visr db)
                        :css css}}
            :reagent {:core reagent.core
                      :dom reagent.dom}
            :goog {:object goog.object}
            :oops {:core oops.core}
            :garden {:core garden.core
                     :color garden.color
                     :compiler garden.compiler
                     :compression garden.compression
                     :selectors garden.selectors
                     :types garden.types
                     :units garden.units
                     :util garden.util}
            :zprint {:core zprint.core}
            :shadow {:cljs {:modern shadow.cljs.modern}}
            :ajax {:core ajax.core
                   :protocols ajax.protocols}
            :cognitect {:transit cognitect.transit}
            :alandipert {:storage-atom alandipert.storage-atom}})
     :loaded (union (:loaded base) (:loaded builtins)
                    #{'cljs.analyzer 'cljs.analyzer.api
                      'cljs.compiler 'cljs.env 'cljs.js 'cljs.pprint
                      'cljs.reader 'cljs.source-map 'cljs.spec.alpha
                      'cljs.spec.gen.alpha 'cljs.spec.test.alpha 'cljs.stacktrace
                      'cljs.tagged-literals 'cljs.test 'cljs.tools.reader
                      'cljs.math 'cljs.repl 'clojure.walk 'clojure.string
                      'clojure.set 'clojure.data 'clojure.edn 'clojure.zip
                      'clojure.reflect 'visr.utils 'visr.private 'reagent.core
                      'reagent.dom 'goog.object 'oops.core 'garden.core
                      'garden.color 'garden.compiler 'garden.compression
                      'garden.selectors 'garden.types 'garden.units 'garden.util
                      'shadow.cljs.modern 'zprint.core 'ajax.core 'ajax.protocols
                      'alandipert.storage-atom 'cognitect.transit})
     :state-injections
     (merge (state-injection 'visr.utils {'fs 'visr.utils/fs})
            (state-injection 'visr.private
                             {'print 'visr.private/print
                              'println 'visr.private/println
                              'css 'visr.private/css
                              'render-visr 'visr.private/render-visr
                              'parse-defvisr 'visr.private/parse-defvisr
                              'buffer-writes 'visr.private/buffer-writes})
            (state-injection 'cljs.analyzer (ns-publics 'cljs.analyzer))
            (state-injection 'cljs.analyzer.api (ns-publics 'cljs.analyzer.api))
            (state-injection 'cljs.compiler (ns-publics 'cljs.compiler))
            (state-injection 'cljs.env (ns-publics 'cljs.env))
            (state-injection 'cljs.js (ns-publics 'cljs.js))
            (state-injection 'cljs.pprint (ns-publics 'cljs.pprint))
            (state-injection 'cljs.stacktrace (ns-publics 'cljs.stacktrace))
            (state-injection 'cljs.reader (ns-publics 'cljs.reader))
            (state-injection 'cljs.tagged-literals
                             (ns-publics 'cljs.tagged-literals))
            (state-injection 'cljs.test (ns-publics 'cljs.test))
            (state-injection 'cljs.spec.alpha (ns-publics 'cljs.spec.alpha))
            (state-injection 'cljs.spec.gen.alpha
                             (ns-publics 'cljs.spec.gen.alpha))
            (state-injection 'cljs.spec.test.alpha
                             (ns-publics 'cljs.splec.test.alpha))
            (state-injection 'cljs.tools.reader (ns-publics 'cljs.tools.reader))
            (state-injection 'cljs.math (ns-publics 'cljs.math))
            (state-injection 'cljs.repl (ns-publics 'cljs.repl))
            (state-injection 'clojure.walk (ns-publics 'clojure.walk))
            (state-injection 'clojure.string (ns-publics 'clojure.string))
            (state-injection 'clojure.set (ns-publics 'clojure.set))
            (state-injection 'clojure.data (ns-publics 'clojure.data))
            (state-injection 'clojure.edn (ns-publics 'clojure.edn))
            (state-injection 'clojure.zip (ns-publics 'clojure.zip))
            (state-injection 'clojure.reflect (ns-publics 'clojure.reflect))
            (state-injection 'reagent.dom (ns-publics 'reagent.dom))
            (state-injection 'reagent.core (ns-publics 'reagent.core))
            ;(state-injection 'goog.object (ns-publics 'goog.object))
            (state-injection 'oops.core (ns-publics 'oops.core))
            (state-injection 'garden.core (ns-publics 'garden.core))
            (state-injection 'garden.color (ns-publics 'garden.color))
            (state-injection 'garden.compiler (ns-publics 'garden.compiler))
            (state-injection 'garden.compression
                             (ns-publics 'garden.compression))
            (state-injection 'garden.selectors (ns-publics 'garden.selectors))
            (state-injection 'garden.types (ns-publics 'garden.types))
            (state-injection 'garden.units (ns-publics 'garden.units))
            (state-injection 'garden.util (ns-publics 'garden.util))
            (state-injection 'shadow.cljs.modern (ns-publics 'shadow.cljs.modern))
            (state-injection 'zprint.core (ns-publics 'zprint.core))
            (state-injection 'ajax.core (ns-publics 'ns.core))
            (state-injection 'ajax.protocols (ns-publics 'ajax.protocols))
            (state-injection 'cognitect.transit (ns-publics 'cognitect.transit))
            (state-injection 'alandipert.storage-atom
                             (ns-publics 'alandipert.storage-atom)))
     :js-deps (merge (:js-deps base) (:js-deps builtins))}))

(defn write-visr [visr state & [{:keys [show-visr show-text]}]]
  (let [show-visr (or show-visr false)
        show-text (or show-text false)]
    (str "^{:editor " visr " :show-visr " show-visr " :show-text " show-text
         "}(" (visr->elaborate visr) " " (str state) ")")))

(def shadow-fs
  {"clojure/template.clj" (slurp "src/injectable/shadowfs/clojure/template.clj")
   "cljs/test.cljc" (slurp "src/injectable/shadowfs/cljs/test.cljc")
   "cljs/test.cljs" (slurp "src/injectable/shadowfs/cljs/test.cljs")
   "cljs/modern.cljc"
   (slurp "src/injectable/shadowfs/cljs/modern.cljc"),
   "cljs/modern.cljs"
   (slurp "src/injectable/shadowfs/cljs/modern.cljs")})

(def empty-visr (write-visr "visr.core/empty-visr" "{}"))

(def starter-visr (write-visr "visr.core/empty-visr"
                              "{:message \"Endless Possibility\"}"))
