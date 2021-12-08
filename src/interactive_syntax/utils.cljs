(ns interactive-syntax.utils)

(defn module->uri [module]
  (js/URL.createObjectURL
   (new js/Blob #js [module] #js {:type "application/javascript"})))

(defn cb-thread [& funcs]
  ((fn rec [funcs ret]
     (if (empty? funcs)
       ret
       (apply (first funcs) #(rec (rest funcs) %&) ret)))
   funcs nil))

(defn cb-loop [lst body cb & ret]
  ((fn rec [lst ret]
     (if (empty? lst)
       (apply cb ret)
       (apply body #(rec (rest lst) %&) (first lst) ret)))
   lst ret))
