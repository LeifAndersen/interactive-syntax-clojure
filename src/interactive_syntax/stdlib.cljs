(ns interactive-syntax.stdlib
  (:refer-clojure :exclude [print println])
  (:require-macros
   [interactive-syntax.slurp :refer [slurp]])
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]))

(def injectable (slurp "src/injectable/core.inject"))

(defprotocol VISR
  (render [this updater])
  (elaborate [this]))

(defn render-visr [{:keys [output] :as db} visr]
  (swap! output conj visr))

(defn wrap-printer [printer db x]
  (if (satisfies? VISR x)
    (render-visr db x)
    (printer x)))
