(ns interactive-syntax.fakegoog
  (:require [goog.object :as obj]))

(defn prov [global name]
  (loop [acc global
         n (.split name ".")]
    (when-not (empty? n)
      (obj/setIfUndefined acc (first n) #js {})
      (recur (obj/get acc (first n)) (rest n)))))

;; TODO, req should check for matching prev
(defn req [global name]
  (loop [acc global
         n (.split name ".")]
    (when-not (empty? n)
      (obj/setIfUndefined acc (first n) #js {})
      (recur (obj/get acc (first n)) (rest n)))))
