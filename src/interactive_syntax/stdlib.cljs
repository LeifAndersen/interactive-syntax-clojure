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
  {:cljs js/cljs
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
   :$stopifyArray js/stopifyArray})

(defn builtin-libs []
  {:env {:react_bootstrap react-bootstrap
         :react_split_pane react-split-pane
         :react_switch react-switch}
   :loaded #{'react-bootstrap 'react-split-pane 'react-switch}})

(defn reagent-opts [opts db]
  (let [builtins (builtin-libs)]
    (conj opts
          {:env #(conj
                  (sandbox-env %)
                  (:env opts)
                  (:env builtins)
                  {:visr {:private$
                          {:print (partial wrap-printer core/print db)
                           :println (partial wrap-printer core/println db)
                           :parse_defvisr parse-defvisr}}
                   :reagent {:core reagent.core
                             :dom reagent.dom}})
           :loaded (conj (union (into #{} (:loaded opts)) (:loaded builtins))
                         'visr.private 'reagent.core 'reagent.dom)})))
