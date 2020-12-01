(ns interactive-syntax.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [cljs.pprint :refer [pprint]]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            ["@testing-library/react" :as rtl]
            [interactive-syntax.db :as db :refer [default-db]]
            [interactive-syntax.strings :as strings]
            [interactive-syntax.core :as core]))

(defn print-view [view]
  (->> view
       .-container
       .-firstChild
       (.log js/console)))

(defn get-file-browser [& [index]]
  (let [lst (-> js/document
                .-body
                (.getElementsByClassName "chonky-root"))]
    (aget lst (or index (dec (alength lst))))))

(defn change-file-browser-input [input & [index]]
  (.change rtl/fireEvent
           (-> (get-file-browser index)
               (.getElementsByTagName "input")
               (aget 0))
           #js {:target #js {:value input}}))

(defn submit-file-browser-input [& [index]]
  (.click rtl/fireEvent
          (-> (get-file-browser index)
              (.getElementsByClassName "btn")
              (aget 0))))

(defn get-modal [& [index]]
 (let [lst (-> js/document
               .-body
               (.getElementsByClassName "modal"))]
   (aget lst (or index (dec (alength lst))))))

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
      (is (= strings/UNTITLED
             (-> component
                 (.getAllByText strings/UNTITLED)
                 first
                 (.-innerHTML))))
      (reset! file-changed true)
      (r/flush)
      (is (= (str strings/UNTITLED "*")
             (-> component
                 (.getAllByText (str strings/UNTITLED "*"))
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
      (r/flush)
      (is (= @current-file nil))
      (is (= @file-changed false))
      (is (= @input ""))
      (is (= strings/UNTITLED
             (-> component
                 (.getAllByText strings/UNTITLED)
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
    (let [{:keys [fs input menu current-file current-folder file-changed]
           :as db}
          (default-db :temp),
          editor (atom nil),
          view (rtl/render (r/as-element [core/home-page db editor]))]
      (reset! (-> db :options :enable-drag-and-drop) false)
      (is (= @file-changed false))
      (-> @editor .getDoc (.setValue "(+ 1 2)"))
      (r/flush)
      (is (= @file-changed true))
      (.click rtl/fireEvent (.getByText view strings/MENU))
      (r/flush)
      (.click rtl/fireEvent (.getByText view strings/SAVE-AS))
      (is (= @menu [:home [:save]]))
      (r/flush)
      (change-file-browser-input "foo.cljs")
      (r/flush)
      (submit-file-browser-input)
      (r/flush)
      (is (= (js->clj (fs.readdirSync "/")) ["foo.cljs"]))
      (is (= @menu [:home]))
      (is (= @current-file "foo.cljs"))
      (is (= @current-folder "/"))
      (.click rtl/fireEvent (first (.getAllByText view strings/NEW)))
      (r/flush)
      (is (= @menu [:home]))
      (is (= @current-file nil))
      (is (= @input ""))
      (.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
      (is (= @menu [:home :load]))
      (r/flush)
      (change-file-browser-input "foo.cljs")
      (r/flush)
      (submit-file-browser-input)
      (r/flush)
      (is (= @menu [:home]))
      (is (= @current-file "foo.cljs"))
      (is (= @current-folder "/")))))

(deftest save-named-unnamed-file
  (testing "Saving named and unnamed files"
    (let [{:keys [fs input menu current-file current-folder file-changed]
           :as db}
          (default-db :temp),
          editor (atom nil),
          view (rtl/render (r/as-element [core/home-page db editor]))]
      (reset! (-> db :options :enable-drag-and-drop) false)
      (is (= @file-changed false))
      (-> @editor .getDoc (.setValue "(+ 1 2)"))
      (r/flush)
      (is (= @file-changed true))
      (is (= @input "(+ 1 2)"))
      (is (= @menu [:home]))
      (.click rtl/fireEvent (.getByText view strings/NEW))
      (r/flush)
      (is (= @file-changed true))
      (is (= @input "(+ 1 2)"))
      (is (= @menu [:home [:confirm-save :new]]))
      (.click rtl/fireEvent (-> (get-modal)
                                (.getElementsByClassName "btn-secondary")
                                (aget 0)))
      (r/flush)
      (is (= @file-changed false))
      (is (= @input ""))
      (is (= @menu [:home]))
      (-> @editor .getDoc (.setValue "(+ 1 2)"))
      (r/flush)
      (.click rtl/fireEvent (.getByText view strings/NEW))
      (r/flush)
      (.click rtl/fireEvent (-> (get-modal)
                                (.getElementsByClassName "close")
                                (aget 0)))
      (r/flush)
      (is (= @file-changed true))
      (is (= @input "(+ 1 2)"))
      (is (= @menu [:home]))
      (.click rtl/fireEvent (.getByText view strings/NEW))
      (r/flush)
      (is (= @menu [:home [:confirm-save :new]]))
      (.click rtl/fireEvent (-> (get-modal)
                                (.getElementsByClassName "btn-primary")
                                (aget 0)))
      (r/flush)
      (is (= @menu [:home [:save :new]]))
      (.click rtl/fireEvent (-> (get-modal)
                                (.getElementsByClassName "close")
                                (aget 0)))
      (r/flush)
      (is (= @file-changed true))
      (is (= @input "(+ 1 2)"))
      (is (= @menu [:home]))
      (.click rtl/fireEvent (.getByText view strings/NEW))
      (r/flush)
      (is (= @menu [:home [:confirm-save :new]]))
      (.click rtl/fireEvent (-> (get-modal 0)
                                (.getElementsByClassName "btn-primary")
                                (aget 0)))
      (r/flush)
      (is (= @menu [:home [:save :new]]))
      (change-file-browser-input "bar.cljs")
      (r/flush)
      (submit-file-browser-input)
      (r/flush)
      (is (= @file-changed false))
      (is (= @current-file nil))
      (is (= @input ""))
      (is (= @menu [:home]))
      )))
