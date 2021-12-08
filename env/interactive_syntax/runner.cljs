(ns interactive-syntax.runner
  (:require [interactive-syntax.runnerenv :as env]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(set! js/window.VISrun env/run)
(set! js/window.VISrunURI env/run-uri)

