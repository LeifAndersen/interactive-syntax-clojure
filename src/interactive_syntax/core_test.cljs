(ns interactive-syntax.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [cljs.pprint :refer [pprint]]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            ["@testing-library/react" :as rtl]
            [interactive-syntax.core :as core]
            [interactive-syntax.db :refer [default-db]]))

(use-fixtures :each
  {:before (fn [] (-> js/localStorage .clear))
   :after (fn []
            (rtl/cleanup)
            (-> js/localStorage .clear))})

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
      (core/save-buffer db)
      (is (= (js->clj (fs.readdirSync "/")) ["sample.cljs"]))
      (is (= @(:file-changed db) false))
      (reset! (:input db) ":new-file")
      (reset! (:file-changed db) true)
      (core/load-buffer db)
      (is (= @(:input db) "(+ 1 2)"))
      (is (= @(:file-changed db) false)))))

(deftest file-tite
  (testing "Make sure title matches current file, even accross save/load"
    (let [{:keys [file-changed] :as db} (default-db)
          component (rtl/render (r/as-element [core/button-row db]))]
      (is (= "UNTITLED.cljs"
             (-> component
                 (.getAllByText "UNTITLED.cljs")
                 first
                 (.-innerHTML))))
      (reset! file-changed true)
      (is (= "UNTITLED.cljs*"
             (-> component
                 (.getAllByText "UNTITLED.cljs*")
                 first
                 (.-innerHTML)))))))

(deftest bad-input-buff
  (testing "Malformed string in input buffer"
    (let [{:keys [input file-changed] :as db} (default-db)
          editor (atom nil)
          view (r/as-element [core/editor-view db editor])]
      (is (= @input ""))
      (is (= @file-changed false))
      (-> view rtl/render)
      (-> @editor .getDoc (.setValue "(+ 1 2"))
      (is (= @input "(+ 1 2"))
      (is (= @file-changed true)))))
