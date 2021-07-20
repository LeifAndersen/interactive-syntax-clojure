(ns interactive-syntax.stdlib
  (:refer-clojure :exclude [print println])
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]))

(def injectable "
(ns visr.core
  (:require [visr.private]))
(def render visr.private/render)
(def a-constant 42)
(defmacro defvisr []
 `(+ 1 2))
")

(defprotocol VISR
  (render [this]))

(defn render-visr [{:keys [output] :as db} visr]
  (swap! output conj visr))

(defn wrap-printer [printer db x]
  (if (satisfies? VISR x)
    (render-visr db x)
    (printer x)))
