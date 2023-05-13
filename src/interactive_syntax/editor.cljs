(ns interactive-syntax.editor
  (:require [reagent.core :as r :refer [atom]]))

(defn make-reset-editors-cache [& [cache]]
  (let [c {:cache nil
           :queue #queue []}]
    (if cache
      (reset! cache c)
      (atom c))))
