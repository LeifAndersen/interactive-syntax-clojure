(ns ^:figwheel-hooks interactive-syntax.dev
  (:require
    [interactive-syntax.core :as core]
    [devtools.core :as devtools]))

(defn ^:after-load re-render []
  (core/mount-root))

(defonce start-up
  (do (extend-protocol IPrintWithWriter
        js/Symbol
        (-pr-writer [sym writer _]
          (-write writer (str "\"" (.toString sym) "\""))))
      (enable-console-print!)
      ;(devtools/install!)
      (core/init!)
      true))
