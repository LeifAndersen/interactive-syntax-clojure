(ns interactive-syntax.stdlib
  (:refer-clojure :exclude [print println])
  (:require-macros
   [interactive-syntax.slurp :refer [slurp]])
  (:require
   [cljs.core :as core]
   [cljs.analyzer]
   [cljs.compiler]
   [cljs.env]
   [cljs.js]
   [cljs.pprint]
   [cljs.reader]
   [cljs.source-map]
   [cljs.spec.alpha]
   [cljs.stacktrace]
   [cljs.tagged-literals]
   [cljs.test]
   [clojure.walk]
   [clojure.string]
   [clojure.set :refer [union]]
   [clojure.data]
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   [react]
   [react-dom]
   [react-bootstrap :refer [Button ButtonGroup SplitButton
                            Dropdown DropdownButton Tabs Tab
                            Row Col Form Container Modal
                            Table]]
   [react-split-pane]
   [react-switch]
   [garden.core :as garden :refer [css]]
   [garden.color]
   [garden.compiler]
   [garden.compression]
   [garden.util]
   [garden.selectors]
   [garden.types]
   [garden.units]))

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

(defn parse-defvisr [name stx]
  (loop [props {}
         rst stx]
    (if (empty? rst)
      (assoc props
             :name+render (visr->render name)
             :name+elaborate (visr->elaborate name))
      (let [fst (first rst)]
        (cond
          (and (list? fst) (= (first fst) 'render))
          (recur (assoc props :render (rest fst)) (rest rst)),
          (and (list? fst) (= (first fst) 'elaborate))
          (recur (assoc props :elaborate (rest fst)) (rest rst)))))))

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
          :spec cljs.spec
          :stacktrace cljs.stacktrace
          :tagged_literals cljs.tagged-literals
          :test cljs.test
          :tools cljs.tools
          :user {}}
   :clojure {:walk clojure.walk
             :string clojure.string
             :set clojure.set
             :data clojure.data}
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
   :URL js/URL
   :URLSearchParams js/URLSearchParams
   :Blob js/Blob
   :encodeURI js/encodeURI
   :encodeURIComponent js/encodeURIComponent
   :decodeURI js/decodeURI
   :decodeURIComponent js/decodeURIComponent
   :stopify js/stopify
   :$stopifyArray js/stopifyArray})

(defn builtin-libs []
  {:env {:react react
         :react_dom react-dom
         :react_bootstrap react-bootstrap
         :react_split_pane react-split-pane
         :react_switch react-switch}
   :loaded #{'react 'react-dom 'react-bootstrap 'react-split-pane 'react-switch}
   :js-deps (into {}
                  (for [k '[react react-dom react-bootstrap
                            react-split-pane react-switch]]
                    [(str k) {:global-exports {k (munge k)}}]))})

(defn reagent-runtime [base db]
  (let [builtins (builtin-libs)]
    {:fakegoog true
     :env (merge
           (:env base)
           (sandbox-env)
           (:env builtins)
           {:visr {:private$
                   {:print (partial wrap-printer core/print db)
                    :println (partial wrap-printer core/println db)
                    :parse_defvisr parse-defvisr
                    :render_visr (partial render-visr db)
                    :css css}}
            :reagent {:core reagent.core
                      :dom reagent.dom}
            :garden {:core garden.core
                     :color garden.color
                     :compiler garden.compiler
                     :compression garden.compression
                     :selectors garden.selectors
                     :types garden.types
                     :units garden.units
                     :util garden.util}})
     :loaded (union (:loaded base) (:loaded builtins)
                    #{'cljs.analyzer 'cljs.compiler 'cljs.env 'cljs.js 'cljs.pprint
                      'cljs.reader 'cljs.source-map 'cljs.spec.alpha
                      'cljs.stacktrace 'cljs.tagged-literals 'cljs.test
                      'clojure.walk 'clojure.string 'clojure.set 'clojure.data
                      'visr.private 'reagent.core 'reagent.dom
                      'garden.core 'garden.color 'garden.compiler
                      'garden.compression 'garden.selectors 'garden.types
                      'garden.units 'garden.util})
     :state-injections
     (merge (state-injection 'cljs.analyer (ns-publics 'cljs.analyer))
            (state-injection 'cljs.compiler (ns-publics 'cljs.compiler))
            (state-injection 'cljs.env (ns-publics 'cljs.env))
            (state-injection 'cljs.js (ns-publics 'cljs.js))
            (state-injection 'cljs.pprint (ns-publics 'cljs.pprint))
            (state-injection 'cljs.stacktrace (ns-publics 'cljs.stacktrace))
            (state-injection 'cljs.tagged-literals
                             (ns-publics 'cljs.tagged-literals))
            (state-injection 'cljs.test (ns-publics 'cljs.test))
            (state-injection 'clojure.walk (ns-publics 'clojure.walk))
            (state-injection 'clojure.string (ns-publics 'clojure.string))
            (state-injection 'clojure.set (ns-publics 'clojure.set))
            (state-injection 'clojure.data (ns-publics 'clojure.data))
            (state-injection 'reagent.dom (ns-publics 'reagent.dom))
            (state-injection 'reagent.core (ns-publics 'reagent.core))
            (state-injection 'garden.core (ns-publics 'garden.core))
            (state-injection 'garden.color (ns-publics 'garden.color))
            (state-injection 'garden.compiler (ns-publics 'garden.compiler))
            (state-injection 'garden.compression
                             (ns-publics 'garden.compression))
            (state-injection 'garden.selectors (ns-publics 'garden.selectors))
            (state-injection 'garden.types (ns-publics 'garden.types))
            (state-injection 'garden.units (ns-publics 'garden.units))
            (state-injection 'garden.util (ns-publics 'garden.util)))
     :js-deps (merge (:js-deps base) (:js-deps builtins))}))

(defn write-visr [visr state]
  (str "^{:editor " visr "}(" (visr->elaborate visr) " " (str state) ")"))

(def empty-visr (write-visr "visr.core/empty-visr" "{}"))

(def starter-visr (write-visr "visr.core/empty-visr"
                            "{:message \"Endless Possibility\"}"))
