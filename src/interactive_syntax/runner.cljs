(ns interactive-syntax.runner
  (:require [interactive-syntax.utils :refer [cb-thread cb-loop]]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

;; Expected to be only one global runner (stopify limitation)
(defn mk-runner []
  (let [cache (atom {})
        runner (js/stopify.stopifyLocally "")
        job-queue (atom #queue [])
        compile (fn [source cb]
                  (if (contains? @cache source)
                    (cb (get @cache source))
                    (let [compiler (new js/StopifyWorker)]
                      (set! worker.onmessage
                            (fn [msg]
                              (let [res (oget msg :data.prog)]
                                (swap! cache assoc source res)
                                (cb res))))
                      (.postMessage compiler #js {:prog source}))))]
    {}))
