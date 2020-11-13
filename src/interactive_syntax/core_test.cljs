(ns interactive-syntax.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            ["@testing-library/react" :refer [render fireEvent cleanup]]
            [interactive-syntax.core :as core]
            [interactive-syntax.db :refer [default-db]]))

(use-fixtures :each
  {:before (fn [] (-> js/localStorage .clear))
   :after cleanup})

(deftest file-system-available
  (testing "File System Access"
    (let [fs (:fs (default-db))]
      (is (= (js->clj (fs.readdirSync "/"))
             [])))))

(deftest file-save-laod
  (testing "File Saving and Loading"
    (let [db (default-db)
          fs (:fs db)]
      (reset! (:input db) "(+ 1 2)")
      (reset! (:file-changed db) true)
      (reset! (:current-file db) "sample.cljs")
      (core/save-buffer fs
                        (:current-folder db)
                        (:current-file db)
                        (:input db)
                        (:file-changed db))
      (is (= (js->clj (fs.readdirSync "/")) ["sample.cljs"]))
      (is (= @(:file-changed db) false))
      (reset! (:input db) ":new-file")
      (reset! (:file-changed db) true)
      (core/load-buffer fs
                        (:current-folder db)
                        (:current-file db)
                        (:input db)
                        (:file-changed db))
      (is (+ @(:input db)) "(+ 1 2)")
      (is (= @(:file-changed db) false)))))
