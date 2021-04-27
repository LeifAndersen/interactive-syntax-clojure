(ns interactive-syntax.fakegoog
  (:require [goog.object :as obj]))

(defn prov [runner name]
  (loop [acc runner.g
         n (.split name ".")]
    (when-not (empty? n)
      (obj/setIfUndefined acc (first n) #js {})
      (recur (obj/get acc (first n)) (rest n)))))

;; Unsure of difference with prov
(defn req [runner name]
  (loop [acc runner.g
         n (.split name ".")]
    (when-not (empty? n)
      (obj/setIfUndefined acc (first n) #js {})
      (recur (obj/get acc (first n)) (rest n)))))
