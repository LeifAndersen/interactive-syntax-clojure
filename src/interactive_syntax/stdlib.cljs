(ns interactive-syntax.stdlib
  (:refer-clojure :exclude [print println])
  (:require-macros
   [interactive-syntax.slurp :refer [slurp]])
  (:require
   [cljs.core :as core]
   [clojure.set :refer [union]]
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   [react-bootstrap :refer [Button ButtonGroup SplitButton
                            Dropdown DropdownButton Tabs Tab
                            Row Col Form Container Modal
                            Table]]
   [react-split-pane]
   [react-switch]
   [garden.core :as garden :refer [css]]
   [interactive-syntax.fakegoog :as fakegoog]))

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

(defn sandbox-env [runner]
  {:cljs {:core js/cljs.core
          :core$macros js/cljs.core$macros
          :analyzer js/cljs.analyzer
          :compiler js/cljs.compiler
          :env js/cljs.env
          :js js/cljs.js
          :pprint js/cljs.pprint
          :reader js/cljs.reader
          :source_map js/cljs.source_map
          :spec js/cljs.spec
          :stacktrace js/cljs.stacktrace
          :tagged_literals js/cljs.tagged_literals
          :test js/cljs.test
          :tools js/cljs.tools
          :user {}}
   :goog {:provide (partial fakegoog/prov runner)
          :require (partial fakegoog/req runner)}
   :console js/console
   :navigator js/navigator
   :document js/document
   :window js/window
   :global runner
   :alert js/alert
   :String js/String
   :Object js/Object
   :Function js/Function
   :Array js/Array
   :Set js/Set
   :Math js/Math
   :atob js/atob
   :btoa js/btoa
   :stopify js/stopify
   :$stopifyArray js/stopifyArray})

(defn builtin-libs []
  {:env {:react_bootstrap react-bootstrap
         :react_split_pane react-split-pane
         :react_switch react-switch}
   :loaded #{'react-bootstrap 'react-split-pane 'react-switch}
   :js-deps (into {}
                  (for [k '[react-bootstrap react-split-pane react-switch]]
                    [(str k) {:global-exports {k (munge k)}}]))})

(defn reagent-opts [opts db]
  (let [builtins (builtin-libs)]
    (conj opts
          {:fakegoog-global true
           :env #(conj
                  (sandbox-env %)
                  (:env opts)
                  (:env builtins)
                  {:visr {:private$
                          {:print (partial wrap-printer core/print db)
                           :println (partial wrap-printer core/println db)
                           :parse_defvisr parse-defvisr
                           :render_visr (partial render-visr db)
                           :css css}}
                   :reagent {:core reagent.core
                             :dom reagent.dom}})
           :loaded (conj (union (into #{} (:loaded opts)) (:loaded builtins))
                         'visr.private 'reagent.core 'reagent.dom)
           :js-deps (conj (into {} (:js-deps opts))
                          (:js-deps builtins))})))

(defn write-visr [visr state]
  (str "^{:editor " visr "}(" (visr->elaborate visr) " " (str state) ")"))

(def empty-visr (write-visr "visr.core/empty-visr" "{}"))

(def starter-visr (write-visr "visr.core/empty-visr"
                            "{:message \"Endless Possibility\"}"))
