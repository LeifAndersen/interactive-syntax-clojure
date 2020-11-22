(ns interactive-syntax.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [cljs.pprint :refer [pprint]]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            ["@testing-library/react" :as rtl]
            [interactive-syntax.core :as core]
            [interactive-syntax.db :refer [default-db]]))

(use-fixtures :each
  {:after rtl/cleanup})

(deftest file-system-available
  (testing "File System Access"
    (let [fs (:fs (default-db :temp))]
      (is (= (js->clj (fs.readdirSync "/"))
             [])))))

(deftest file-save-laod
  (testing "File Saving and Loading"
    (let [db (default-db :temp)
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

(deftest file-title
  (testing "Make sure title matches current file, even accross save/load"
    (let [{:keys [input menu current-file file-changed] :as db} (default-db :temp)
          component (rtl/render (r/as-element [:div
                                               [core/new-file-action db]
                                               [core/button-row db]]))]
      (is (= "UNTITLED.cljs"
             (-> component
                 (.getAllByText "UNTITLED.cljs")
                 first
                 (.-innerHTML))))
      (reset! file-changed true)
      (r/flush)
      (is (= "UNTITLED.cljs*"
             (-> component
                 (.getAllByText "UNTITLED.cljs*")
                 first
                 (.-innerHTML))))
      (reset! input "(+ 1 2)")
      (reset! current-file "foo.cljs")
      (r/flush)
      (is (= "/foo.cljs*"
             (-> component
                 (.getAllByText "/foo.cljs*")
                 first
                 (.-innerHTML))))
      (core/save-buffer db)
      (r/flush)
      (is (= @file-changed false))
      (is (= "/foo.cljs"
             (-> component
                 (.getAllByText "/foo.cljs")
                 first
                 (.-innerHTML))))
      (swap! menu conj :new)
      (r/flush)
      (is (= @current-file nil))
      (is (= @file-changed false))
      (is (= @input ""))
      (is (= "UNTITLED.cljs"
             (-> component
                 (.getAllByText "UNTITLED.cljs")
                 first
                 (.-innerHTML))))
      )))

(deftest bad-input-buff
  (testing "Malformed string in input buffer"
    (let [{:keys [input file-changed] :as db} (default-db :temp)
          editor (atom nil)
          view (r/as-element [core/editor-view db editor])]
      (is (= @input ""))
      (is (= @file-changed false))
      (-> view rtl/render)
      (-> @editor .getDoc (.setValue "(+ 1 2"))
      (r/flush)
      (is (= @input "(+ 1 2"))
      (is (= @file-changed true)))))

(deftest file-save-load-view
  (testing "File Save And load through view actions"
    (let [db (default-db :temp)
          editor (atom nil)
          view (rtl/render (r/as-element [core/home-page db editor]))]
      (-> @editor .getDoc (.setValue "(+ 1 2)"))
      (-> view
          (.getByText "Save As")
          pprint
          )
      )))
