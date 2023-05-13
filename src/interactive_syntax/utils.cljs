(ns interactive-syntax.utils
  (:require
   ["react-dom/client" :refer [createRoot]]
   [reagent.dom :as d]
   [reagent.core :as r]))

(defn module->uri [module & {:keys [mime]
                             :or {:mime "application/javascript"}}]
  (js/URL.createObjectURL
   (new js/Blob #js [module] #js {:type mime})))

(defn cb-thread [& funcs]
  ((fn rec [funcs ret]
     (cond
       (empty? funcs) ret
       (= (first funcs) :do)
       (let [ret (apply (second funcs) ret)]
         (rec (rest (rest funcs)) (list ret))),
       :else (apply (first funcs) #(rec (rest funcs) %&) ret)))
   funcs nil))

(defn cb-loop [lst body cb & ret]
  ((fn rec [lst ret]
     (if (empty? lst)
       (apply cb ret)
       (apply body #(rec (rest lst) %&) (first lst) ret)))
   lst ret))

;; TODO, switch to proper createRoot use, rather than this jank.
;;    start by switching to true
(defn render [element node]
  (if false
    (let [node (createRoot node)]
      (.render node (r/as-element element)))
    (d/render element node)))
