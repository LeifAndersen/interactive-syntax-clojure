(ns interactive-syntax.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures async]]
            [figwheel.main.testing :refer-macros [run-tests-async]]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as string]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            [chonky :refer [ChonkyActions]]
            ["@testing-library/react" :as rtl]
            [interactive-syntax.db :as db :refer [default-db ->RefAtom]]
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

(defn click-run [view]
  (.click rtl/fireEvent (first (.getAllByText view strings/RUN))))

(use-fixtures :each
  {:after rtl/cleanup})

;; Checks all items in this that are in good
;; EXCEPTIONS:
;;  - Does not check fs, runner, env, etc.
;;  - output has pure newlines stripped
(defn is-db= [this other & [keys]]
  (when (or (not keys) (some #{:output} key))
    (is (= (filter #(not (= % "\n")) @(:output this))
           (filter #(not (= % "\n")) @(:output other)))))
  (let [test-keys (or keys [:input
                            :menu
                            :current-file
                            :current-folder
                            :file-browser-folder])]
    (doseq [key test-keys]
      (is (= @(key this) @(key other))))))

(defn- test-do-helper [expected-state ui-state cmds prev]
  (loop [cmds cmds
         prev prev]
    (condp = (first cmds)
      nil nil
      :set
      (let [[_ path value & rest] cmds]
        (reset! (get-in expected-state path) value)
        (recur rest nil))
      :update
      (let [[_ path update & rest] cmds]
        (swap! (get-in expected-state path) update)
        (recur rest nil))
      :get
      (let [[_ path & rest] cmds]
        (recur rest @(get-in expected-state path)))
      :check
      (do
        (is-db= ui-state expected-state)
        (recur (next cmds) nil))
      :check-item
      (let [[_ path & rest] cmds]
        (is (= (get-in ui-state path)
               (get-in expected-state path))))
      :then
      (.then prev
             #(do (r/flush)
                  (r/flush)
                  (test-do-helper expected-state ui-state (next cmds) %)))
      :wait
      (let [[_ timeout & rest] cmds]
        (js/setTimeout (fn [] (test-do-helper expected-state ui-state rest nil))
                       timeout))
      :async
      (let [[_ proc & rest] cmds]
        (proc #(test-do-helper expected-state ui-state rest nil)))
      :done
      ((second cmds))
      :do
      (let [p ((second cmds) prev)]
        (r/flush)
        (r/flush)
        (recur (next (next cmds)) p)))))


(defn test-do [ui-state & cmds]
  (test-do-helper (default-db :temp) ui-state cmds nil))

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
                 (.-innerHTML)))))))


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


(deftest bad-ns-buff
  (testing "Requiring a namespace that does not exist"
    (let [{:keys [input file-changed] :as db} (default-db :temp)
          editor (atom nil)
          view (rtl/render (r/as-element [core/home-page db {:editor editor}]))
          prog "
(ns bob.core
  (:require [bill.core :as bill]))"
          err-msg (str "#error {:message No such namespace: bill.core, "
                       "could not locate bill/core.cljs, bill/core.cljc, "
                       "or JavaScript source providing \"bill.core\", "
                       ":data {:tag :cljs/analysis-error}}")]

      (test-do
       db :check
       :do #(-> @editor .getDoc (.setValue "(ns bob.core)"))
       :set [:input] "(ns bob.core)"
       :set [:file-changed] true :check
       :do #(-> @editor .getDoc (.setValue prog))
       :do #(click-run view)
       :set [:input] prog
       :set [:output] #queue [err-msg]
       :set [:file-changed] true :check))))

(deftest file-save-load-view
  (testing "File Save And load through view actions"
    (let [{:keys [fs input menu current-file current-folder file-changed]
           :as db}
          (default-db :temp),
          editor (atom nil),
          view (rtl/render (r/as-element [core/home-page db {:editor editor}]))]
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
          view (rtl/render (r/as-element [core/home-page db {:editor editor}]))]
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
          view (rtl/render (r/as-element [core/home-page db {:editor editor}]))]
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
        :async #(fs.mkdir "dir" %)
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
          view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                             :repl repl}]))]
      (test-do
       db :check
       :do #(-> @editor .getDoc (.setValue "(println (+ 1 2))"))
       :set [:input] "(println (+ 1 2))" :check
       :do #(.click rtl/fireEvent (first (.getAllByText view strings/RUN)))
       :set [:output] #queue ["3"] :check
       :do #(is (= (-> @repl .getDoc .getValue) "3"))))))

(comment ;;; XXX UNCOMMENT!!!
(deftest test-stopify
  (testing "Make sure stopify works"
    (async
     done
     (let [{:keys [fs input output menu runner]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                              :repl repl}]))
           prog1 "(loop [x 0] (when (< x 10) (println x) (recur (inc x))))"
           prog2 "
(defn oh-no []
  (println \"Oh no!\")
  (recur))

(oh-no)"]
       (is (= "Warning" "Test not run!"))
       (done)
       (comment ;test-do
        db :check
        :do @(reset! input prog1)
        :set [:input] prog1 :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/RUN)))
        :set [:output] #queue ["0" "1" nil] :check
        :do #(reset! input prog2)
        :set [:input] prog2 :check
        :do #(click-run view)
        :wait 100
        :async #(.pause @runner %)
        :do #(js/console.log "Paused")
        :check
        :get [:output]
        :do #(do
               (js/console.log %)
               (is (seq %))
               (is (> (count %) 1))
               (is (every? (partial (= "Oh no!")) %)))
        :done #(done))))))
)

(deftest multiple-files-eval
  (testing "Make sure eval works"
    (async
     done
     (let [{:keys [fs input output menu current-file current-folder file-changed]
            :as db}
           (default-db :temp),
           core-prog "
(ns test.core)
(defn main [] (println \"Hello World!\"))
(println \"Loading Core...\")
"
           use-prog "
(ns test.use (:require [test.core :as test]))
(println \"Loading Use...\")
(test/main)
"
           expected-res #queue ["Loading Core..."
                                "Loading Use..."
                                "Hello World!"]
           editor (atom nil),
           repl (atom nil),
           view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                              :repl repl}]))]
       (test-do
        db :check
        :async #(fs.mkdir "/test" %)
        :async #(fs.writeFile "/test/core.cljs" core-prog %)
        :do #(-> @editor .getDoc (.setValue use-prog))
        :set [:input] use-prog :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/RUN)))
        :set [:output] expected-res :check
        :do #(is (= (-> @repl .getDoc .getValue) (string/join "\n" expected-res)))
        :done #(done))))))

(deftest change-folder-in-browser
  (testing "Change folder in file browser and ensure buffer doesn't change"
    (async
     done
     (let [{:keys [fs input output menu current-file current-folder file-changed]
            :as db}
           (default-db :temp)
           file-body "(+ 1 2)"
           new-body "(+ 4 5)"
           file-browser #js {:current nil}
           view (rtl/render
                 (r/as-element
                  [core/home-page db {:load-file-browser file-browser}]))
           file-browser (->RefAtom file-browser)]
       (test-do
        db :check
        :async #(fs.mkdir "/A" %)
        :async #(fs.writeFile "/f.cljs" file-body %)
        :do #(reset! input file-body)
        :set [:input] file-body
        :do #(reset! current-folder "/")
        :set [:current-folder] "/"
        :do #(reset! current-file "f.cljs")
        :set [:current-file] "f.cljs" :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
        :do #(.requestFileAction @file-browser ChonkyActions.OpenFiles
                                 (clj->js {:targetFile {:isDir true :name "A"}}))
        :then
        :set [:menu] [:home :load]
        :set [:file-browser-folder] "/A" :check
        :do #(reset! menu [:home])
        :set [:menu] [:home] :check
        :done #(done)
        )))))

(defn -main [& args]
  (run-tests-async 10000))
