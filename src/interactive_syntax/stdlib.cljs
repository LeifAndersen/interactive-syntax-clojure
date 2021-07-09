(ns interactive-syntax.stdlib
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]))

(defn render [{:keys [output] :as db} visr]
  (swap! output conj visr))
