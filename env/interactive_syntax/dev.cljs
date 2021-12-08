(ns ^:figwheel-hooks interactive-syntax.dev
  (:require
    [interactive-syntax.core :as core]
    [devtools.core :as devtools]
    [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                       oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(defn ^:after-load re-render []
  (core/mount-root {:debug true}))

(defonce start-up
  (do (extend-protocol IPrintWithWriter
        js/Symbol
        (-pr-writer [sym writer _]
          (-write writer (str "\"" (.toString sym) "\""))))
      (enable-console-print!)
      ;(devtools/install!)
      (core/init! {:debug true})
      true))
