(ns interactive-syntax.utils)

(defn cb-thread [& funcs]
  ((fn rec [funcs ret]
     (if (empty? funcs)
       ret
       ((first funcs) #(rec (rest funcs) %&) ret)))
   funcs nil))

(defn cb-loop [lst body cb]
  ((fn rec [lst ret]
     (if (empty? lst)
       (cb)
       (body #(rec (rest lst) body) (first lst) ret)))
   lst nil))
