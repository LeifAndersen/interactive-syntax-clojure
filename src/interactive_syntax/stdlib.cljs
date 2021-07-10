(ns interactive-syntax.stdlib
  (:refer-clojure :exclude [print println])
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]))

(defprotocol VISR
  (render [this]))

(defn render-visr [{:keys [output] :as db} visr]
  (swap! output conj visr))

(defn println [x]
  (if (satisfies? VISR x)
    (clojure.core/println "VISR-TODO")
    (clojure.core/println x)))
