(ns sci.impl.interpreter
  {:no-doc true}
  (:refer-clojure :exclude [destructure macroexpand macroexpand-1])
  (:require
   [clojure.tools.reader.reader-types :as r]
   [sci.impl.analyzer :as ana]
   [sci.impl.opts :as opts]
   [sci.impl.parser :as p]
   [sci.impl.types :as types]
   [sci.impl.utils :as utils]
   [sci.impl.vars :as vars]))

#?(:clj (set! *warn-on-reflection* true))

(defn eval-form [ctx form]
  ;; (.println System/err "form")
  ;; (.println System/err form)
  (if (seq? form)
    (if (= 'do (first form))
      (loop [exprs (rest form)
             ret nil]
        (if (seq exprs)
          (recur
           (rest exprs)
           (eval-form ctx (first exprs)))
          ret))
      (let [;; take care of invocation array for let
            upper-sym (gensym)
            cb (volatile! {upper-sym {0 {:syms {}}}})
            ctx (assoc ctx
                       :parents [upper-sym 0]
                       :closure-bindings cb)
            analyzed (ana/analyze ctx form true)
            binding-array-size (count (get-in @cb [upper-sym 0 :syms]))
            bindings (object-array binding-array-size)]
        (if (instance? #?(:clj sci.impl.types.EvalForm
                          :cljs sci.impl.types/EvalForm) analyzed)
          (eval-form ctx (types/getVal analyzed))
          (try (types/eval analyzed ctx bindings)
               (catch #?(:clj Throwable :cljs js/Error) e
                 (utils/rethrow-with-location-of-node ctx bindings e analyzed))))))
    (let [upper-sym (gensym)
          cb (volatile! {upper-sym {0 {:syms {}}}})
          ctx (assoc ctx
                     :parents [upper-sym 0]
                     :closure-bindings cb)
          analyzed (ana/analyze ctx form)
          binding-array-size (count (get-in @cb [upper-sym 0 :syms]))
          bindings (object-array binding-array-size)]
      (try (types/eval analyzed ctx bindings)
           (catch #?(:clj Throwable :cljs js/Error) e
             (utils/rethrow-with-location-of-node ctx bindings e analyzed))))))

(vreset! utils/eval-form-state eval-form)

(defn eval-string* [ctx s]
  (vars/with-bindings {vars/current-ns @vars/current-ns}
    (let [reader (r/indexing-push-back-reader (r/string-push-back-reader s))]
      (loop [ret nil]
        (let [expr (p/parse-next ctx reader)]
          (if (utils/kw-identical? p/eof expr)
            ret
            (let [ret (eval-form ctx expr)]
              (recur ret))))))))

(vreset! utils/eval-string* eval-string*)

;;;; Called from public API

(defn eval-string
  ([s] (eval-string s nil))
  ([s opts]
   (let [init-ctx (opts/init opts)
         ret (eval-string* init-ctx s)]
     ret)))

;;;; Scratch

(comment
  (eval-string "((fn f [x] (if (< x 3) (recur (inc x)) x)) 0)")
  )
