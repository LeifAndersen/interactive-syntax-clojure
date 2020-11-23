(ns ^:figwheel-no-load interactive-syntax.dev
  (:require
    [interactive-syntax.core :as core]
    ;[devtools.core :as devtools]
    ))

(extend-protocol IPrintWithWriter
  js/Symbol
  (-pr-writer [sym writer _]
    (-write writer (str "\"" (.toString sym) "\""))))

(enable-console-print!)

;(devtools/install!)

(core/init!)
