(ns interactive-syntax.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures async]]
            [cljs.pprint :refer [pprint]]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            [chonky :refer [ChonkyActions]]
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
                (.getElementsByClassName "chonky-chonkyRoot"))]
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

;; Checks all items in this that are in good
;; EXCEPT for fs and runner!
(defn is-db= [this other]
  (do (is (= @(:input this) @(:input other)))
      (is (= @(:output this) @(:output other)))
      (is (= @(:menu this) @(:menu other)))
      (is (= @(:current-file this) @(:current-file other)))
      (is (= @(:current-folder this) @(:current-folder other)))))

(defn- test-do-helper [expected-state ui-state cmds]
  (loop [cmds cmds
         prev nil]
    (condp = (first cmds)
      nil nil
      :set
      (let [[_ path value & rest] cmds]
        (do
          (reset! (get-in expected-state path) value)
          (recur rest nil)))
      :update
      (let [[_ path update & rest] cmds]
        (do
          (swap! (get-in expected-state path) update)
          (recur rest nil)))
      :check
      (do
        (is-db= ui-state expected-state)
        (recur (next cmds) nil))
      :then
      (.then prev
             #(do (r/flush)
                  (r/flush)
                  (test-do-helper expected-state ui-state (next cmds))))
      :done
      ((second cmds))
      :do
      (let [p ((second cmds))]
        (r/flush)
        (r/flush)
        (recur (next (next cmds)) p)))))


(defn test-do [ui-state & cmds]
  (test-do-helper (default-db :temp) ui-state cmds))

(deftest bad-input-buff
  (testing "Malformed string in input buffer"
    (let [{:keys [input file-changed] :as db} (default-db :temp)
          editor (atom nil)
          view (rtl/render (r/as-element [core/editor-view db editor]))]
      (test-do
       db :check
       :do #(-> @editor .getDoc (.setValue "(+ 1 2"))
       :set [:input] "(+ 1 2"
       :set [:file-changed] true :check))))

(deftest file-save-load-view
  (testing "File Save And load through view actions"
    (let [{:keys [fs input menu current-file current-folder file-changed]
           :as db}
          (default-db :temp),
          editor (atom nil),
          view (rtl/render (r/as-element [core/home-page db editor]))]
      (reset! (-> db :options :enable-drag-and-drop) false)
      (test-do
       db :check
       :do #(-> @editor .getDoc (.setValue "(+ 1 2)"))
       :set [:input] "(+ 1 2)"
       :set [:file-changed] true :check
       :do #(.click rtl/fireEvent (.getByText view strings/MENU))
       :do #(.click rtl/fireEvent (.getByText view strings/SAVE-AS))
       :set [:menu] [:home [:save]] :check
       :do #(change-file-browser-input "foo.cljs")
       :do #(submit-file-browser-input)
       :set [:menu] [:home]
       :set [:current-file] "foo.cljs"
       :set [:current-folder] "/" :check
       :do #(is (= (js->clj (fs.readdirSync "/")) ["foo.cljs"]))
       :do #(.click rtl/fireEvent (first (.getAllByText view strings/NEW)))
       :set [:current-file] nil
       :set [:input] "" :check
       :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
       :set [:menu] [:home :load] :check
       :do #(change-file-browser-input "foo.cljs")
       :do #(submit-file-browser-input)
       :set [:menu] [:home]
       :set [:current-file] "foo.cljs"
       :set [:input] "(+ 1 2)" :check))))

(deftest save-to-save-as
  (testing "Save goes to Save As only when needed"
    (let [{:keys [fs input menu current-file current-folder file-changed]
           :as db}
          (default-db :temp),
          editor (atom nil),
          view (rtl/render (r/as-element [core/home-page db editor]))]
      (reset! (-> db :options :enable-drag-and-drop) false)
      (test-do
       db :check
       :do #(-> @editor .getDoc (.setValue "(+ 1 2)"))
       :set [:input] "(+ 1 2)" :check
       :do #(.click rtl/fireEvent (.getByText view strings/SAVE))
       :set [:menu] [:home [:save]]
       :set [:file-changed] true :check
       :do #(.click rtl/fireEvent (-> (get-modal)
                                      (.getElementsByClassName "close")
                                      (aget 0)))
       :set [:menu] [:home] :check
       :do #(.click rtl/fireEvent (first (.getAllByText view strings/SAVE)))
       :set [:menu] [:home [:save]] :check
       :do #(change-file-browser-input "saver.cljs")
       :do #(submit-file-browser-input)
       :set [:menu] [:home]
       :set [:file-changed] false
       :set [:current-file] "saver.cljs" :check
       :do #(-> @editor .getDoc (.setValue "(/ 8 4)"))
       :set [:file-changed] true
       :set [:input] "(/ 8 4)" :check
       :do #(.click rtl/fireEvent (first (.getAllByText view strings/SAVE)))
       :set [:file-changed] false
       :set [:current-file] "saver.cljs" :check))))

(deftest save-named-unnamed-file
  (testing "Saving named and unnamed files"
    (let [{:keys [fs input menu current-file current-folder file-changed]
           :as db}
          (default-db :temp),
          editor (atom nil),
          view (rtl/render (r/as-element [core/home-page db editor]))]
      (reset! (-> db :options :enable-drag-and-drop) false)
      (test-do
       db :check
       :do #(-> @editor .getDoc (.setValue "(+ 1 2)"))
       :set [:file-changed] true
       :set [:input] "(+ 1 2)"
       :set [:menu] [:home] :check
       :do #(.click rtl/fireEvent (.getByText view strings/NEW))
       :set [:menu] [:home [:confirm-save :new]] :check
       :do #(.click rtl/fireEvent (-> (get-modal)
                                      (.getElementsByClassName "btn-secondary")
                                      (aget 0)))
       :set [:file-changed] false
       :set [:input] ""
       :set [:menu] [:home] :check
       :do #(-> @editor .getDoc (.setValue "(+ 1 2)"))
       :do #(.click rtl/fireEvent (.getByText view strings/NEW))
       :do #(.click rtl/fireEvent (-> (get-modal)
                                      (.getElementsByClassName "close")
                                      (aget 0)))
       :set [:file-changed] true
       :set [:input] "(+ 1 2)" :check
       :do #(.click rtl/fireEvent (.getByText view strings/NEW))
       :set [:menu] [:home [:confirm-save :new]] :check
       :do #(.click rtl/fireEvent (-> (get-modal)
                                      (.getElementsByClassName "btn-primary")
                                      (aget 0)))
       :set [:menu] [:home [:save :new]]
       :do #(.click rtl/fireEvent (-> (get-modal)
                                      (.getElementsByClassName "close")
                                      (aget 0)))
       :set [:menu] [:home] :check
       :do #(.click rtl/fireEvent (.getByText view strings/NEW))
       :set [:menu] [:home [:confirm-save :new]] :check
       :do #(.click rtl/fireEvent (-> (get-modal 0)
                                      (.getElementsByClassName "btn-primary")
                                      (aget 0)))
       :set [:menu] [:home [:save :new]] :check
       :do #(change-file-browser-input "bar.cljs")
       :do #(submit-file-browser-input)
       :set [:input] ""
       :set [:menu] [:home] :check))))

;; Note, you can find stuff in modals with something like:
;; (-> (get-modal) (.querySelector "[title='Create a folder']")

(deftest new-folder-breadcrumbs
  (testing "New Folder and breadcrumbs"
    (async
     done
     (let [{:keys [fs input menu current-file current-folder file-changed]
            :as db}
           (default-db :temp),
           ref #js {:current nil}
           _ (reset! (-> db :options :enable-drag-and-drop) false)
           view (rtl/render (r/as-element
                             [core/file-browser db "Unused" (fn [] nil) ref]))]
       (test-do
        db :check
        :do #(reset! (-> db :menu) [:home :load])
        :set [:menu] [:home :load] :check
        :do #(ref.current.requestFileAction ChonkyActions.CreateFolder)
        :then
        :set [:menu] [:home :load :new-folder] :check
        :do #(reset! (-> db :menu) [:home :load])
        :do #(fs.mkdir "dir")
        :do #(reset! (-> db :current-folder) "/dir")
        :set [:menu] [:home :load]
        :set [:current-folder] "/dir" :check
        :done #(done))))))

(deftest simple-eval
  (testing "Make sure eval works"
    (let [{:keys [fs input output menu current-file current-folder file-changed]
           :as db}
          (default-db :temp),
          editor (atom nil),
          repl (atom nil),
          view (rtl/render (r/as-element [core/home-page db editor repl]))]
      (test-do
       db :check
       :do #(-> @editor .getDoc (.setValue "(println (+ 1 2))"))
       :set [:input] "(println (+ 1 2))" :check
       :do #(.click rtl/fireEvent (first (.getAllByText view strings/RUN)))
       :set [:output] #queue ["3" nil] :check
       :do #(is (= (-> @repl .getDoc .getValue) "3\n"))))))

(deftest test-stopify
  (testing "Make sure stopify works"
    (let [{:keys [fs input output menu current-file current-folder file-changed]
           :as db}
          (default-db :temp),
          editor (atom nil),
          repl (atom nil),
          view (rtl/render (r/as-element [core/home-page db editor repl]))]
      (reset! input "
(defn oh-no []
  (println \"Oh no!\")
  (recur))

(oh-no)")
      (r/flush)
      ;(.click rtl/fireEvent (first (.getAllByText view strings/RUN)))
      (r/flush))))
