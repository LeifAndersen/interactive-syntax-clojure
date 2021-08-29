(ns interactive-syntax.prod
  (:require
    [interactive-syntax.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
