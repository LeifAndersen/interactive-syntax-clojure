(ns interactive-syntax.test-notme
  (:require
   ;;[doo.runner :refer-macros [doo-tests]]
   [cljs.test :refer [run-tests]]
   [devtools.core :as devtools]
   [interactive-syntax.core-test]))

(enable-console-print!)
(devtools/install!)
;;(doo-tests 'interactive-syntax.test)
(run-tests 'interactive-syntax.core-test)
