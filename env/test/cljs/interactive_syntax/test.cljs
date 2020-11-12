(ns interactive-syntax.test-notme
  (:require
   ;;[doo.runner :refer-macros [doo-tests]]
   ;;[jx.reporter.karma :refer-macros [run-all-tests]]
   [cljs.test :refer [run-tests]]
   [devtools.core :as devtools]
   [interactive-syntax.core-test]))

(enable-console-print!)
(devtools/install!)
;;(doo-tests 'interactive-syntax.test)

;;(defn ^:export run-all [karma]
;;  (run-all-tests karma))

(run-tests 'interactive-syntax.core-test)
