(ns interactive-syntax.lib
  (:require [interactive-syntax.core :as core]
            [interactive-syntax.fs :as fs]
            [interactive-syntax.db :as db]
            [interactive-syntax.utils :refer [cb-thread]]
            [reagent.dom :as d]
            [cognitect.transit :as t]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(defn lib-render [part frame state]
  (let [{:keys [zip] backing :db} (t/read (t/reader :json) state)]
    (cb-thread
     #(db/default-db :temp %)
     #(fs/import-from-zip %2 zip (fn [] (% %2)))
     (fn [_ db]
       (reset! (:backing db) backing)
       (d/render [part db] frame)))))

(set! js/window.VISrHome (partial lib-render core/home-page))
(set! js/window.VISrEditor (partial lib-render core/editor-view))
