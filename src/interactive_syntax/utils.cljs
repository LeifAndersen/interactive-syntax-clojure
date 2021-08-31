(ns interactive-syntax.utils)

(defn cb-thread [& funcs]
  ((fn rec [funcs ret]
     (if (empty? funcs)
       ret
       ((first funcs) #(rec (rest funcs) %&) ret)))
   funcs nil))
