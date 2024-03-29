(ns interactive-syntax.core-test
  (:require-macros
   [interactive-syntax.slurp :refer [slurp]])
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures async]]
            [figwheel.main.testing :refer-macros [run-tests-async]]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as string]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            [reagent.ratom :as ratom]
            [chonky :refer [ChonkyActions]]
            ["@testing-library/react" :as rtl]
            [interactive-syntax.db :as db :refer [default-db ->RefAtom
                                                  files-root deps-root]]
            [interactive-syntax.fs :as fs]
            [interactive-syntax.git :as git]
            [interactive-syntax.strings :as strings]
            [interactive-syntax.core :as core]
            [interactive-syntax.utils :as utils :refer [cb-thread cb-loop]]
            [interactive-syntax.env :as env]
            [interactive-syntax.stdlib :as stdlib]))

(def test-dep (slurp "test/res/react-hexgrid.js"))
(def git-host "http://localhost:8174/")

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

(defn default-clean-db [type cb]
  (cb-thread #(db/default-db type %)
             #(fs/wipe-project! %2 (fn [] (cb %2)))))

(use-fixtures :each
  {:after rtl/cleanup})

;; Checks all items in this that are in good
;; EXCEPTIONS:
;;  - Does not check fs, runner, env, etc.
;;  - output has pure newlines stripped
(defn is-db= [this other & [check-keys]]
  (when (or (not check-keys) (some #{:output} check-keys))
    (let [this-out (filter #(and (not (= % "\n")) (not (= % "<EOF>")))
                           @(:output this))
          other-out (filter #(and (not (= % "\n")) (not (= % "<EOF>")))
                            @(:output other))]
      (is (= (count this-out) (count other-out)))
      (doseq [[t o] (map list this-out other-out)]
        (when-not (or (= t :ignore) (= o :ignore))
          (cond
            (regexp? o) (is (re-matches o t))
            (regexp? t) (is (re-matches t o))
            :else (is (= t o)))))))
  (when (or (not check-keys) (some #{:deps} check-keys))
    (is (= (vals @(:deps this)) (vals @(:deps other)))))
  (let [test-keys (or check-keys [:input
                                  :menu
                                  :file-changed
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
      :wait-until
      (let [[_ pred atm & rest] cmds]
        (if (pred @atm)
          (test-do-helper expected-state ui-state rest nil)
          (add-watch atm ::temp
                     (fn [k r o n]
                       (when (pred n)
                         (remove-watch atm ::temp)
                         (test-do-helper expected-state ui-state rest nil))))))
      :async
      (let [[_ proc & rest] cmds]
        (proc #(test-do-helper expected-state ui-state rest nil)))
      :done
      ((second cmds))
      :do
      (let [p ((second cmds) prev)]
        (r/flush)
        (js/setTimeout
         (fn []
           (r/flush)
           (js/setTimeout
            #(test-do-helper expected-state ui-state (next (next cmds)) p)
            0))
         0)))))

(defn test-do [ui-state & cmds]
  (test-do-helper (default-db :temp) ui-state cmds nil))

(deftest debug-respected
  (testing "Ensure globals aren't set unless debug mode is enable"
    (let [db (default-db :temp)]
      (rtl/render (r/as-element [core/home-page db]))
      (is (or (not js/window.db)
              (not (instance? ratom/RAtom js/window.db))))
      (is (or (not js/window.fs)
              (not (instance? ratom/RAtom js/window.fs)))))))

(deftest file-system-available
  (testing "File System Access"
    (let [fs (:fs (default-db :temp))]
      (is (= (js->clj (.readdirSync fs files-root))
             [])))))

(deftest zip-import-export
  (testing "Ensure that import/export works from/to zip"
    (async
     done
     (let [{:keys [fs input output deps
                   current-file current-folder file-browser-folder]
            :as db} (default-db :temp)
           ival "hello world"
           oval #queue ["A" "B"]
           uri (utils/module->uri test-dep)
           new-deps {1 {:name "react-hexgrid"
                        :url uri}}
           new-dir (js/path.join db/files-root "A")
           new-file "x"
           fb-dir (js/path.join db/files-root "B")
           zbox (atom nil)]
      (test-do
       db :check
       :async #(fs.mkdir (.join js/path files-root "A") %)
       :async #(fs.writeFile (.join js/path files-root "A/x") "ABCD" %)
       :async #(fs.writeFile (.join js/path files-root "A/y") "QWER" %)
       :async #(fs.mkdir (.join js/path files-root "B") %)
       :async #(fs.writeFile (.join js/path files-root "B/x") "ZXCV" %)
       :async #(fs.writeFile (.join js/path files-root "B/1") "1234" %)
       :async #(fs.writeFile (.join js/path deps-root "react-hexgrid") test-dep %)
       :do #(is (= (count (.readdirSync fs files-root)) 2))
       :do #(reset! deps new-deps)
       :async #(fs/export-to-zip db (fn [x] (reset! zbox x) (%)))
       :do #(reset! input ival)
       :set [:input] ival
       :do #(reset! output oval)
       :set [:output] oval
       :do #(reset! current-folder new-dir)
       :set [:current-folder] new-dir
       :do #(reset! current-file new-file)
       :set [:current-file] new-file
       :do #(reset! file-browser-folder fb-dir)
       :set [:file-browser-folder] fb-dir
       :set [:deps] new-deps
       :check
       :async #(fs/wipe-project! db %)
       :do #(is (= (count (.readdirSync fs files-root)) 0))
       :do #(is (= (count (.readdirSync fs deps-root)) 0))
       :set [:input] ""
       :set [:output] ""
       :set [:current-folder] db/files-root
       :set [:current-file] nil
       :set [:file-browser-folder] db/files-root
       :set [:deps] {}
       :check
       :async #(fs/import-from-zip db @zbox %)
       :do #(is (= (count (.readdirSync fs files-root)) 2))
       :do #(is (= (count (.readdirSync fs (js/path.join files-root "A"))) 2))
       :do #(is (= (.toString (fs.readFileSync (js/path.join files-root "A/x")))
                   "ABCD"))
       :do #(is (= (.toString (fs.readFileSync (js/path.join files-root "A/y")))
                   "QWER"))
       :do #(is (= (count (.readdirSync fs (js/path.join files-root "B"))) 2))
       :do #(is (= (.toString (fs.readFileSync (js/path.join files-root "B/x")))
                   "ZXCV"))
       :do #(is (= (.toString (fs.readFileSync (js/path.join files-root "B/1")))
                   "1234"))
       :do #(is (= (count (.readdirSync fs deps-root)) 1))
       :do #(is (= (.toString (fs.readFileSync (js/path.join deps-root
                                                             "react-hexgrid")))
                   test-dep))
       :set [:deps] new-deps
       :check
       :do #(js/URL.revokeObjectURL uri)
       :done #(done))))))

(deftest custom-file-actions
  (testing "Test custom file actions"
    (async
     done
     (let [{:keys [fs] :as db} (default-db :temp)]
       (test-do
        db
        :async #(fs.writeFile (js/path.join files-root "A") "payload" %)
        :async #(fs/copy-path fs (js/path.join files-root "A")
                              (js/path.join files-root "B")
                              %)
        :do #(is (= (str (fs.readFileSync (js/path.join files-root "B")))
                    "payload"))
        :async #(fs.mkdir (js/path.join files-root "dA") %)
        :async #(fs.writeFile (js/path.join files-root "dA/A") "pay1" %)
        :async #(fs.writeFile (js/path.join files-root "dA/B") "pay2" %)
        :async #(fs.mkdir (js/path.join files-root "dA/sub") %)
        :async #(fs.writeFile (js/path.join files-root "dA/sub/A") "pay3" %)
        :async #(fs/copy-path fs (js/path.join files-root "dA")
                              (js/path.join files-root "dB")
                              %)
        :do #(is (= (str (fs.readFileSync (js/path.join files-root "dB/A")))
                    "pay1"))
        :do #(is (= (str (fs.readFileSync (js/path.join files-root "dB/B")))
                    "pay2"))
        :do #(is (= (str (fs.readFileSync (js/path.join files-root "dB/sub/A")))
                    "pay3"))
        :done #(done))))))

(deftest file-save-laod
  (testing "File Saving and Loading"
    (let [db (default-db :temp)
          fs (:fs db)]
      (reset! (:input db) "(+ 1 2)")
      (reset! (:file-changed db) true)
      (reset! (:current-file db) "sample.cljs")
      (core/save-buffer db)
      (is (= (js->clj (.readdirSync fs files-root)) ["sample.cljs"]))
      (is (= @(:file-changed db) false))
      (reset! (:input db) ":new-file")
      (reset! (:file-changed db) true)
      (core/load-buffer db)
      (is (= @(:input db) "(+ 1 2)"))
      (is (= @(:file-changed db) false)))))

(deftest git-pull
  (testing "Ensure Git Pull Works"
    (async
     done
     (let [db (default-db :temp)
           fs (:fs db)]
       (test-do
        db :check
        :do #(is (= (count (.readdirSync fs files-root)) 0))
        :async #(git/pull db (str git-host "simple.git") %)
        :do #(is (= (count (.readdirSync fs files-root)) 2))
        :do #(is (= (.toString (fs.readFileSync (js/path.join files-root
                                                              "test.cljs")))
                    "(+ 1 2)\n"))
        :done #(done))))))

(deftest file-title
  (testing "Make sure title matches current file, even accross save/load"
    (async
     done
     (let [{:keys [input menu current-file file-changed] :as db} (default-db :temp)
           component (rtl/render (r/as-element [:div
                                                [core/new-file-action db]
                                                [core/button-row db]]))]
       (test-do
        {}
        :do #(is (= strings/UNTITLED
                    (-> component
                        (.getAllByText strings/UNTITLED)
                        first
                        (.-innerHTML))))
        :do #(reset! file-changed true)
        :do #(is (= (str strings/UNTITLED "*")
                    (-> component
                        (.getAllByText (str strings/UNTITLED "*"))
                        first
                        (.-innerHTML))))
        :done #(done)
        :do #(reset! input "(+ 1 2)")
        :do #(reset! current-file "foo.cljs")
        :do #(is (= "/foo.cljs*"
                    (-> component
                        (.getAllByText "/foo.cljs*")
                        first
                        (.-innerHTML))))
        :do #(core/save-buffer db)
        :do #(is (= @file-changed false))
        :do #(is (= "/foo.cljs"
                    (-> component
                        (.getAllByText "/foo.cljs")
                        first
                        (.-innerHTML))))
        :do #(swap! menu conj :new)
        :do #(is (= @current-file nil))
        :do #(is (= @file-changed false))
        :do #(is (= @input ""))
        :do #(is (= strings/UNTITLED
                    (-> component
                        (.getAllByText strings/UNTITLED)
                        first
                        (.-innerHTML))))
        :done #(done))))))

(deftest bad-input-buff
  (testing "Malformed string in input buffer"
    (let [{:keys [input file-changed] :as db} (default-db :temp)
          editor (atom nil)
          view (rtl/render (r/as-element [core/editor-view db {:editor editor}]))]
      (test-do
       db :check
       :do #(-> @editor .getDoc (.setValue "(+ 1 2"))
       :set [:input] "(+ 1 2"
       :set [:file-changed] true :check))))

(deftest bad-ns-buff
  (testing "Requiring a namespace that does not exist"
    (async
     done
     (let [{:keys [input file-changed running?] :as db} (default-db :temp)
           editor (atom nil)
           view (rtl/render (r/as-element [core/home-page db {:editor editor}]))
           prog "
(ns bob.core
  (:require [bill.core :as bill]))"
           err-msg (re-pattern
                    (str "(?s)Error: No such namespace: bill\\.core, "
                         "could not locate bill/core\\.cljs, bill/core\\.cljc, "
                         "or JavaScript source providing \"bill\\.core\".*"))]
       (test-do
        db :check
        :do #(-> @editor .getDoc (.setValue "(ns bob.core)"))
        :set [:input] "(ns bob.core)"
        :set [:file-changed] true :check
        :do #(-> @editor .getDoc (.setValue prog))
        :do #(click-run view)
        :wait-until not running?
        :wait 500
        :set [:input] prog
        :set [:output] #queue [err-msg]
        :set [:file-changed] true :check
        :done #(done))))))

(deftest file-save-load-view
  (testing "File Save And load through view actions"
    (async
     done
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
        :set [:file-changed] false
        :set [:current-file] "foo.cljs"
        :set [:current-folder] files-root :check
        :do #(is (= (js->clj (.readdirSync fs files-root)) ["foo.cljs"]))
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/NEW)))
        :set [:current-file] nil
        :set [:input] "" :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
        :set [:menu] [:home :load] :check
        :do #(change-file-browser-input "foo.cljs")
        :do #(submit-file-browser-input)
        :set [:menu] [:home]
        :set [:current-file] "foo.cljs"
        :set [:input] "(+ 1 2)" :check
        :done #(done))))))


(deftest save-to-save-as
  (testing "Save goes to Save As only when needed"
    (async
     done
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
        :set [:input] "(+ 1 2)" :check
        :do #(.click rtl/fireEvent (.getByText view strings/SAVE))
        :set [:menu] [:home [:save]] :check
        :do #(.click rtl/fireEvent (-> (get-modal)
                                       (.getElementsByClassName "btn-close")
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
        :set [:current-file] "saver.cljs" :check
        :done #(done))))))


(deftest save-named-unnamed-file
  (testing "Saving named and unnamed files"
    (async
     done
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
                                       (.getElementsByClassName "btn-close")
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
                                       (.getElementsByClassName "btn-close")
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
        :set [:file-changed] false
        :set [:menu] [:home] :check
        :done #(done))))))


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
                             [core/file-browser db "Unused" :simple (fn [] nil)
                              {:file-browser ref}]))]
       (test-do
        db :check
        :do #(reset! (-> db :menu) [:home :load])
        :set [:menu] [:home :load] :check
        :do #(ref.current.requestFileAction ChonkyActions.CreateFolder)
        :then
        :set [:menu] [:home :load :new-folder] :check
        :do #(reset! (-> db :menu) [:home :load])
        :async #(fs.mkdir "dir" %)
        :do #(reset! (-> db :file-browser-folder) (.join js/path files-root "dir"))
        :set [:menu] [:home :load]
        :set [:file-browser-folder] (.join js/path files-root "dir") :check
        :done #(done))))))

(deftest add-peer-folder
  (testing "Adding a peer folder in the root files directory"
    (async
     done
     (let [{:keys [fs input file-changed file-browser-folder] :as db}
           (default-db :temp)
           file-browser #js {:current nil}
           view (rtl/render
                 (r/as-element
                  [core/home-page db {:load-file-browser file-browser}]))
           file-browser (->RefAtom file-browser)]
       (test-do
        db :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
        :set [:menu] [:home :load]
        :do #(.requestFileAction @file-browser ChonkyActions.CreateFolder)
        :then :do #(.change rtl/fireEvent
                            (-> (get-modal)
                                (.querySelector "[placeholder='Folder']"))
                            #js {:target #js {:value "A"}})
        :do #(.click rtl/fireEvent (-> (get-modal)
                                      (.getElementsByTagName "button")
                                      (aget 1)))
        :do #(swap! file-browser-folder (fn [x] (.join js/path x "..")))
        :check
        :do #(.requestFileAction @file-browser ChonkyActions.CreateFolder)
        :then :do #(.change rtl/fireEvent
                            (-> (get-modal)
                                (.querySelector "[placeholder='Folder']"))
                            #js {:target #js {:value "B"}})
        :do #(.click rtl/fireEvent (-> (get-modal)
                                       (.getElementsByTagName "button")
                                       (aget 1)))
        :do #(swap! file-browser-folder (fn [x] (.join js/path x "..")))
        :check
        :do #(is (= (count (.readdirSync fs @file-browser-folder)) 2))
        :done #(done))))))

(deftest simple-eval
  (testing "Make sure eval works"
    (async
     done
     (let [{:keys [fs input output running?
                   menu current-file current-folder file-changed]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                              :repl repl}]))]
       (test-do
        db :check
        :do #(-> @editor .getDoc (.setValue "(println (+ 1 2))"))
        :set [:file-changed] true
        :set [:input] "(println (+ 1 2))" :check
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["3"] :check
        :do #(is (or (= (-> @repl .getDoc .getValue) "3")
                     (= (-> @repl .getDoc .getValue) "3<EOF>")))
        :done #(done))))))

(deftest test-stopify
  (testing "Make sure stopify works"
    (async
     done
     (let [{:keys [fs input output menu runner running?]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                              :repl repl}]))
           prog1 "(loop [x 0] (when (< x 5) (println x) (recur (inc x))))"
           prog2 "
(defn oh-no [i]
  (when (= (mod i 100000) 0)
    (println \"Oh no!\"))
  (recur (inc i)))

(oh-no 0)"
           prog3 "
(defn fac [x] (if (<= x 0) 1 (* x (fac (dec x)))))
(println (fac 5))"]
       (test-do
        db :check
        :do #(reset! input prog1)
        :set [:input] prog1 :check
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["0" "1" "2" "3" "4"] :check
        :do #(reset! input prog2)
        :set [:input] prog2 :check
        :do #(click-run view)
        :async #((:stop-eval @runner) %)
        :wait-until not running?
        :do #(do
               (is (seq @output))
               (is (>= (count @output) 1))
               (is (every? (partial = "Oh no!") @output)))
        :do #(reset! input prog3)
        :do #(reset! output "")
        :set [:output] ""
        :set [:input] prog3 :check
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["120"] :check
        :done #(done))))))

(deftest multiple-files-eval
  (testing "Make sure eval works"
    (async
     done
     (let [{:keys [fs input output running?
                   menu current-file current-folder file-changed]
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
        :async #(fs.mkdir (.join js/path files-root "test") %)
        :async #(fs.writeFile "/files/test/core.cljs" core-prog %)
        :do #(-> @editor .getDoc (.setValue use-prog))
        :set [:file-changed] true
        :set [:input] use-prog :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/RUN)))
        :wait-until not running?
        :set [:output] expected-res :check
        :do #(is (or (= (-> @repl .getDoc .getValue)
                        (str (string/join "\n" expected-res) ""))
                     (= (-> @repl .getDoc .getValue)
                        (str (string/join "\n" expected-res) "<EOF>"))))
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
        :async #(fs.mkdir (.join js/path files-root "A") %)
        :async #(fs.writeFile (.join js/path files-root "f.cljs") file-body %)
        :do #(reset! input file-body)
        :set [:input] file-body
        :do #(reset! current-folder files-root)
        :set [:current-folder] files-root
        :do #(reset! current-file "f.cljs")
        :set [:current-file] "f.cljs" :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
        :do #(.requestFileAction @file-browser ChonkyActions.OpenFiles
                                 (clj->js {:targetFile {:isDir true :name "A"}}))
        :then
        :set [:menu] [:home :load]
        :set [:file-browser-folder] (.join js/path files-root "A") :check
        :do #(reset! menu [:home])
        :set [:menu] [:home] :check
        :done #(done))))))

(deftest delete-file-and-folder
  (testing "Change folder in file browser and ensure buffer doesn't change"
    (async
     done
     (let [{:keys [fs input output menu current-file current-folder file-changed]
            :as db}
           (default-db :temp)
           fb-list (atom nil)
           file-body "(+ 1 2)"
           file-browser #js {:current nil}
           view (rtl/render
                 (r/as-element
                  [core/home-page db {:load-file-browser file-browser
                                      :load-file-browser-list fb-list}]))
           file-browser (->RefAtom file-browser)]
       (test-do
        db :check
        :async #(fs.writeFile "/files/A.cljs" file-body %)
        :async #(fs.mkdir "/files/B" %)
        :async #(fs.mkdir "/files/C" %)
        :async #(fs.writeFile "/files/C/f.cljs" file-body %)
        :do #(is (= (count (.readdirSync fs "/files/")) 3))
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
        :do #(is (= (count @@fb-list) 3))
        :do #(let [file (js/Set.)]
                  (.add file (fs/filepath->id "/files/A.cljs"))
                  (.setFileSelection @file-browser file)
                  (.requestFileAction @file-browser ChonkyActions.DeleteFiles))
        :then :do #(is (= (count (.readdirSync fs "/files/")) 2))
        :do #(is (= (count @@fb-list) 2))
        :do #(let [file (js/Set.)]
               (.add file (fs/filepath->id "/files/B"))
               (.setFileSelection @file-browser file)
               (.requestFileAction @file-browser ChonkyActions.DeleteFiles))
        :then :do #(is (= (count (.readdirSync fs "/files/")) 1))
        :do #(is (= (count @@fb-list) 1))
        :do #(let [file (js/Set.)]
               (.add file (fs/filepath->id "/files/C"))
               (.setFileSelection @file-browser file)
               (.requestFileAction @file-browser ChonkyActions.DeleteFiles))
        :then :do #(is (= (count (.readdirSync fs "/files/")) 0))
        :do #(is (= (count @@fb-list) 0))
        :do #(swap! menu pop) :check
        :done #(done))))))

(deftest test-dep-reqs
  (testing "Test :require on dependencies"
    (async
     done
     (let [{:keys [fs input output menu runner running?]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                              :repl repl}]))
           interum "(println (+ 1 2))"
           prog1 "
(ns test.core
  (:require [react-bootstrap]))
(println (nil? react-bootstrap))
"
           prog2 "
(ns test.core
  (:require [react-bootstrap]))
(println (nil? react-bootstrap/Button))
"
           prog3 "
(ns test.core
  (:require [react-bootstrap :refer [Button]]))
(println (nil? Button))
"]
       (test-do
        db :check
        :do #(reset! input prog1)
        :set [:input] prog1 :check
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["false"] :check
        :do #(reset! input interum)
        :set [:input] interum
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["3"] :check
        :do #(reset! input prog2)
        :set [:input] prog2
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["false"] :check
        :do #(reset! input interum)
        :set [:input] interum
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["3"] :check
        :do #(reset! input prog3)
        :set [:input] prog3
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["false"] :check
        :done #(done))))))

(deftest default-lib-reqs
  (testing "Ensure can use features of require for default clojure libs"
    (async
     done
     (let [{:keys [fs input output running?] :as db}
           (default-db :temp),
           prog "
(ns test.core
  (:require [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            [react-bootstrap :as rb :refer [Button]]))
(println (nil? reagent.core))
(println (nil? reagent.dom))
(println (nil? r))
(println (nil? d))
(println (nil? atom))
(println (= atom reagent.core/atom))
(println (= atom r/atom))
(println (nil? react-bootstrap))
(println (nil? rb))
(println (nil? Button))",
           old-error js/console.error,
           out #queue ["false" "false" "true" "true" "false" "true" "true"
                       "false" "false" "false"],
           view (rtl/render (r/as-element [core/home-page db]))]
       (test-do
        db :check
        :do #(reset! input prog)
        :set [:input] prog :check
        :do #(set! js/console.error #())
        :do #(click-run view)
        :wait-until not running?
        :wait 0
        :set [:output] out :check
        :do #(set! js/console.error old-error)
        :do #(done))))))

(deftest additional-dep-req
  (testing "Test req for core (but non-primitive) library"
    (async
     done
     (let [{:keys [fs input output running?] :as db}
           (default-db :temp),
           prog "
(ns test.core
  (:require [visr.utils :refer [fs]]))

(println (object? fs))
"
           out #queue ["true"]
           view (rtl/render (r/as-element [core/home-page db]))]
       (test-do
        db :check
        :do #(reset! input prog)
        :set [:input] prog :check
        :do #(click-run view)
        :wait-until not running?
        :wait 0
        :set [:output] out :check
        :done #(done))))))

(deftest test-download-dep
  (testing "Test an installed/additional dep"
    (async
     done
     (let [{:keys [fs input output menu runner running?]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                              :repl repl}]))
           interum "(println (+ 1 2))"
           uri (utils/module->uri test-dep)
           prog1 "
(ns test.core
  (:require [react-hexgrid :as rh :refer [Hex]]))
(println (nil? react-hexgrid))
(println (nil? rh))
(println (nil? Hex))
(println (nil? rh/Hex))
"]
       (test-do
        db :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/PROJECT)))
        :do #(.click rtl/fireEvent (first (.getAllByText
                                           view strings/DEPENDENCIES)))
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/ADD+SYMBOL)))
        :do #(.change rtl/fireEvent (first (.getAllByLabelText view strings/NAME))
                      #js {:target #js {:value "react-hexgrid"}})
        :do #(.change rtl/fireEvent (first (.getAllByLabelText view strings/URL))
                      #js {:target #js {:value uri}})
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/UPDATE)))
        :set [:deps] {1 {:name "react-hexgrid" :version "" :url uri :load? true}}
        :wait 1000
        :do #(reset! input prog1)
        :set [:input] prog1 :check
        :do #(set! window.mod test-dep)
        :do #(click-run view)
        :wait 1000
        :wait-until not running?
        :set [:output] #queue ["false" "false" "false" "false"] :check
        :do #(js/URL.revokeObjectURL uri)
        :done #(done))))))

(deftest test-basic-visr
  (testing "Ensure a basic visr runs"
    (async
     done
     (let [{:keys [fs input output menu runner running?]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :repl repl
                                            :editor-reset resetting}]))
           visr-prog "
(ns test.core
  (:require [react-bootstrap :refer [Button]]))
(defvisr Counter
  (render [this]
    [:> Button {:aria-label \"Counter\"
                :onClick #(swap! this inc)}
      @this])
  (elaborate [this] `'~this))"

           use-prog "
(ns test.use
  (:require-macros [test.core])
  (:require [test.core]))
(println (+ ^{:editor test.core/Counter}(test.core/Counter+elaborate 329) 5))"
           new-use "
(ns test.use
  (:require-macros [test.core])
  (:require [test.core]))
(println (+ ^{:editor test.core/Counter :show-visr true :show-text false}(test.core/Counter+elaborate 330) 5))"]
       (test-do
        db :check
        :async #(fs.mkdir (.join js/path files-root "test") %)
        :async #(fs.writeFile (.join js/path files-root "test/core.cljs")
                              visr-prog %)
        :do #(-> @editor .getDoc (.setValue use-prog))
        :set [:file-changed] true
        :set [:input] use-prog :check
        :do #(click-run view)
        :wait-until not running?
        :set [:output] #queue ["334"] :check
        :wait-until not resetting
        :wait 0
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :wait 1000
        :do #(.click rtl/fireEvent
                     (-> js/document
                         .-body
                         (.getElementsByClassName "visr-body")
                         (aget 0)
                         (.getElementsByTagName "button")
                         (aget 0)))
        :wait 1000
        :do #(click-run view)
        :wait-until not running?
        :set [:input] new-use
        :set [:output] #queue ["335"] :check
        :done #(done))))))

(deftest test-bad-visr
  (testing "Test a visr that can't compile"
    (async
     done
     (let [{:keys [fs input output menu runner]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))
           old-error js/console.error
           prog "
(ns test.core
  (:require [react-bootstrap :refer [Button]]))

(defvisr Counter
  (render [this]
    [:> ButtonGroup
     [:> Button {:onClick #(swap! this dec)} \"-\"]
     this
     [:> Button {:onClick #(swap! this inc)} \"+\"]])
   (elaborate [this] this))"
           use-prog "
(ns test.use
  (:require-macros [test.core])
  (:require [test.core]))

^{:editor test.core/Counter}(test.core/Counter+elaborate 443)"]
       (test-do
        db :check
        :do #(set! js/console.error #())
        :async #(fs.mkdir (.join js/path files-root "test") %)
        :async #(fs.writeFile (.join js/path files-root "test/core.cljs")
                              prog %)
        :do #(-> @editor .getDoc (.setValue use-prog))
        :wait-until not resetting
        :wait 0
        :set [:file-changed] true
        :set [:input] use-prog :check
        :wait 1000
        :do #(console.warn "Ignore next error message.")
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :wait 1000
        :do #(is (= (count (.getAllByLabelText view strings/VISUAL)) 1))
        :do #(set! js/console.error old-error)
        :done #(done))))))

(deftest test-visr-insert
  (testing "Test the insert visr button"
    (async
     done
     (let [{:keys [fs input output menu runner]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                              :repl repl}]))]
       (test-do
        db :check
        :do #(-> @editor .getDoc (.setValue "ABCD"))
        :set [:file-changed] true
        :set [:input] "ABCD" :check
        :do #(do (.focus @editor)
                 (.setCursor @editor #js {:line 0 :ch 2}))
        :do #(.click rtl/fireEvent
                     (first (.getAllByText view strings/INSERT-VISR)))
        :set [:input] (str "AB" stdlib/starter-visr "CD") :check
        :done #(done))))))

(deftest shown-on-load
  (testing "Test that VISrs are rendered when the document is first loaded"
    (async
     done
     (let [{:keys [fs input output menu runner]
            :as db}
           (default-db :temp),
           new-input (str "A" stdlib/empty-visr "B"),
           open-input (str "A"
                           (stdlib/write-visr "visr.core/empty-visr" "{}"
                                              {:show-visr true :show-text false})
                           "B")
           _ (reset! input new-input),
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :set [:input] new-input :check
        :wait-until not resetting
        :wait 1000
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :wait 100
        :set [:input] open-input
        :set [:file-changed] true
        :check
        :done #(done))))))

(deftest edit-around-visr
  (testing "Ensure VISrs render correctly when the user types around them"
    (async
     done
     (let [{:keys [fs input output menu runner]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :repl repl
                                            :editor-reset resetting}]))]
       (test-do
        db :check
        :do #(.click rtl/fireEvent (.getByText view strings/INSERT-VISR))
        :wait-until not resetting
        :wait 0
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/CODE) 0))
        :wait 200
        :do #(-> @editor (.getDoc) (.replaceRange "(" #js {:line 0 :ch 0}))
        :do #(-> @editor (.getDoc) (.replaceRange ")" #js {:line 0 :ch 1}))
        :wait-until not resetting
        :wait 1000
        :do #(is (= (count (.getAllByLabelText view strings/CODE)) 1))
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/CODE) 0))
        :do #(is (= (count (.getAllByLabelText view strings/CODE)) 1))
        :done #(done))))))

(deftest name-keeps
  (testing "Ensure VISrs keeps given name when leaving the input context"
    (async
     done
     (let [{:keys [fs input output menu runner]
            :as db}
           (default-db :temp),
           alt-visr-name "alt.core/not-a-visr",
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :do #(.click rtl/fireEvent (.getByText view strings/INSERT-VISR))
        :wait-until not resetting
        :wait 0
        :do #(.click rtl/fireEvent (aget (.getAllByLabelText view strings/CODE) 0))
        :wait 1000
        :do #(.change rtl/fireEvent
                     (-> js/document
                         .-body
                         (.getElementsByClassName "visr-code")
                         (aget 0)
                         (.getElementsByTagName "input")
                         (aget 0))
                     #js {:target #js {:value alt-visr-name}})
        :wait 1000
        :do #(-> @editor (.getDoc) (.replaceRange "123" #js {:line 0 :ch 0}))
        :wait-until not resetting
        :wait 100
        :do #(is (= (-> js/document
                        .-body
                        (.getElementsByClassName "visr-code")
                        (aget 0)
                        (.getElementsByTagName "input")
                        (aget 0)
                        (.getAttribute "value"))
                 alt-visr-name))
        :done #(done))))))

(deftest valid-id
  (testing "Ensure VISrs form stays the same when an invalid id is entered"
    (async
     done
     (let [{:keys [fs input output menu runner]
            :as db}
           (default-db :temp),
           editor (atom nil),
           resetting (atom nil),
           repl (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :do #(.click rtl/fireEvent (.getByText view strings/INSERT-VISR))
        :wait-until not resetting
        :wait 0
        :do #(.click rtl/fireEvent (aget (.getAllByLabelText view strings/CODE) 0))
        :wait 300
        :do #(.change rtl/fireEvent
                     (-> js/document
                         .-body
                         (.getElementsByClassName "visr-code")
                         (aget 0)
                         (.getElementsByTagName "input")
                         (aget 0))
                     #js {:target #js {:value "not a valid id"}})
        :do #(-> @editor (.getDoc) (.replaceRange "123" #js {:line 0 :ch 0}))
        :wait-until not resetting
        :wait 100
        :do #(is (= (-> js/document
                        .-body
                        (.getElementsByClassName "visr-code")
                        (aget 0)
                        (.getElementsByTagName "input")
                        (aget 0)
                        (.getAttribute "value"))
                    "visr.core/empty-visr"))
        :done #(done))))))

(deftest circular-dep
  (testing "Ensure VISrs render even with a circular dep."
    (async
     done
     (let [{:keys [fs input output menu runner]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           prog "
(ns test.user
  (:require [test.user]))
^{:editor Counter}(Counter+elaborate 4)"
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :do #(-> @editor .getDoc (.setValue prog))
        :wait-until not resetting
        :wait 0
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :do #(is (= (count (.getAllByLabelText view strings/VISUAL)) 1))
        :done #(done))))))

(deftest continue-to-load-with-save
  (testing "Ensure save works in continue with saving for loading files"
    (async
     done
     (default-clean-db
      :persist-test
      (fn [{:keys [fs input menu current-folder current-file file-changed]
            :as db}]
        (let [fpath (js/path.join files-root "x.cljs"),
              orig-prog "",
              prog "(+ 1 2)",
              _ (reset! input prog),
              _ (reset! current-folder files-root),
              _ (reset! file-changed true)
              editor (atom nil),
              repl (atom nil),
              view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                                 :repl repl}]))]
          (test-do
           db
           :set [:input] prog
           :set [:file-changed] true
           :check
           :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
           :set [:menu] [:home [:confirm-save :load]]
           :check
           :do #(.click rtl/fireEvent (-> (get-modal)
                                          (.getElementsByClassName "btn-primary")
                                          (aget 0)))
           :set [:menu] [:home [:save :load]] :check
           :do #(reset! menu [:home])
           :set [:menu] [:home] :check
           :do #(reset! current-file "x.cljs"),
           :set [:current-file] "x.cljs" :check
           :async #(fs.writeFile fpath orig-prog %)
           :wait 1000
           :do #(is (= (.toString (fs.readFileSync fpath)) orig-prog))
           :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
           :set [:menu] [:home [:confirm-save :load]]
           :check
           :do #(.click rtl/fireEvent (-> (get-modal 0)
                                          (.getElementsByClassName "btn-primary")
                                          (aget 0)))
           :set [:menu] [:home :load]
           :set [:file-changed] false :check
           :do #(is (= (.toString (fs.readFileSync fpath)) prog))
           :done #(done))))))))

(deftest find-injected-dep-refs
  (testing "Ensure :refer works for injected clojurescript deps"
    (async
     done
     (let [{:keys [fs input output menu runner running?]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           prog1 "
(ns test.user
  (:require [garden.selectors]))
(println garden.selectors/attr)"
           prog2 "
(ns test.user
  (:require [garden.selectors :as sel]))
(println sel/attr)"
           prog3 "
(ns test.user
  (:require [garden.selectors :refer [attr]]))
(println attr)"
           out #queue["#object[garden$selectors$attr]"]
           view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                              :repl repl}]))]
       (test-do
        db :check
        :do #(-> @editor .getDoc (.setValue prog1))
        :set [:file-changed] true
        :set [:input] prog1
        :do #(click-run view)
        :wait-until not running?
        :set [:output] out
        :check
        :do #(-> @editor .getDoc (.setValue ""))
        :set [:input] ""
        :do #(click-run view)
        :wait-until not running?
        :set [:output] ""
        :check
        :do #(-> @editor .getDoc (.setValue prog2))
        :set [:input] prog2
        :do #(click-run view)
        :wait-until not running?
        :set [:output] out
        :check
        :do #(-> @editor .getDoc (.setValue ""))
        :set [:input] ""
        :do #(click-run view)
        :wait-until not running?
        :set [:output] ""
        :check
        :do #(-> @editor .getDoc (.setValue prog3))
        :set [:input] prog3
        :do #(click-run view)
        :wait-until not running?
        :set [:output] out
        :check
        :do #(-> @editor .getDoc (.setValue ""))
        :set [:input] ""
        :do #(click-run view)
        :wait-until not running?
        :set [:output] ""
        :check
        :done #(done))))))

(deftest test-fs-ready
  (testing "Test that the FS is ready to go when the database is constructed"
    (async
     done
     (let [dep-db {1 {:name "react-hexgrid"}}
           editor (atom nil),
           repl (atom nil),
           err-msg (atom ""),
           old-error js/console.error]
       (set! js/console.error #(swap! err-msg (fn [old] (str old %))))
       (cb-thread
        #(default-clean-db :persist-test %)
        (fn [next {:keys [fs input output menu runner deps] :as db}]
          (is (= @err-msg ""))
          (reset! deps dep-db)
          (fs.writeFile (js/path.join deps-root "react-hexgrid") test-dep next))
        (fn [next err]
          (is (not err))
          (default-clean-db :persist-test next))
        (fn [next {:keys [fs input output menu runner deps] :as db}]
          (is (= @err-msg ""))
          (reset! deps dep-db)
          (let [view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                                   :repl repl}]))]
            (test-do
             db
             :set [:deps] dep-db :check
             :do #(set! js/console.error old-error)
             :done #(done)))))))))

(deftest wipe-resets-deps-view
  (testing "Ensure that the deps view properly resets when a project is wiped"
    (async
     done
     (let [dep-db {1 {:name "react-hexgrid"}}
           editor (atom nil),
           repl (atom nil)]
       (cb-thread
        #(default-clean-db :persist-test %)
        (fn [next {:keys [fs deps] :as db}]
          (reset! deps dep-db)
          (fs.writeFile (js/path.join deps-root "react-hexgrid") test-dep
                        #(next db %)))
        (fn [next {:keys [fs input output menu runner deps] :as db} err]
          (is (not err))
          (let [view (rtl/render (r/as-element [core/home-page db {:editor editor
                                                                   :repl repl}]))]
            (test-do
             db
             :set [:deps] dep-db :check
             :wait 1000
             :do #(.click rtl/fireEvent (.getByText view strings/MENU))
             :do #(.click rtl/fireEvent (.getByText view strings/NEW-PROJECT))
             :do #(.click rtl/fireEvent (.getByText view strings/CONFIRM-WIPE))
             :wait 1000
             :do #(.click rtl/fireEvent (.getByText view strings/MENU))
             :do #(.click rtl/fireEvent (.getByText view strings/DEPENDENCIES))
             :do #(is (not (-> (get-modal)
                               (.querySelector "[value='react-hexgrid']"))))
             :done #(done)))))))))

(deftest test-multi-update
  (testing "Ensure visrs update when two cursor atoms update simultaniously"
    (async
     done
     (let [{:keys [fs input output menu runner running?]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           lib "
(ns test.core (:require [reagent.core :refer [cursor]]))
(defvisr multi-update
  (elaborate [this] 42)
  (render [this]
   (let [a (cursor this [:a])
         b (cursor this [:b])]
    [:button {:onClick (fn [] (reset! a 42)
                              (reset! b 819))}
      \"Setup\"])))"
           use "
(ns test.use (:require [test.core :include-macros true]))
^{:editor test.core/multi-update}(test.core/multi-update+elaborate {})
(+ 1 2)"
           new-use "
(ns test.use (:require [test.core :include-macros true]))
^{:editor test.core/multi-update :show-visr true :show-text false}(test.core/multi-update+elaborate {:a 42, :b 819})
(+ 1 2)"
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :async #(fs.mkdir (.join js/path files-root "test") %)
        :async #(fs.writeFile (js/path.join files-root "test/core.cljs") lib %)
        :do #(-> @editor .getDoc (.setValue use))
        :wait-until not resetting
        :wait 0
        :set [:file-changed] true
        :set [:input] use :check
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :wait 1000
        :do #(.click rtl/fireEvent
                     (-> js/document
                         .-body
                         (.getElementsByClassName "visr-body")
                         (aget 0)
                         (.getElementsByTagName "button")
                         (aget 0)))
        :wait 1000
        :set [:file-changed] true
        :set [:input] new-use
        :check
        :done #(done))))))

(deftest test-deep-update
  (testing "Ensure edits work in nested data structures"
    (async
     done
     (let [{:keys [input fs] :as db} (default-db :temp)
           lib "
(ns test.core)
(defvisr DeepUp
  (elaborate [this] 42)
  (render [this]
    (when-not (:a @this) (swap! this assoc :a {}))
    [:button {:on-click #(swap! this assoc-in [:a :key] 42)}
     \"HELLO!\"]))"
           use1 "
(ns test.use
 (:require [test.core :include-macros true]))
^{:editor test.core/DeepUp}(test.core/DeepUp+elaborate {})
(+ 1 2)"
           use2 "
(ns test.use
 (:require [test.core :include-macros true]))
^{:editor test.core/DeepUp :show-visr true :show-text false}(test.core/DeepUp+elaborate {:a {:key 42}})
(+ 1 2)"
           editor (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting}]))]
       (test-do
        db :check
        :async #(fs.mkdir (.join js/path files-root "test") %)
        :async #(fs.writeFile (js/path.join files-root "test/core.cljs") lib %)
        :do #(-> @editor .getDoc (.setValue use1))
        :wait-until not resetting
        :wait 0
        :set [:file-changed] true
        :set [:input] use1 :check
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :wait 1000
        :do #(.click rtl/fireEvent
                     (-> js/document
                         .-body
                         (.getElementsByClassName "visr-body")
                         (aget 0)
                         (.getElementsByTagName "button")
                         (aget 0)))
        :wait 1000
        :set [:file-changed] true
        :set [:input] use2 :check
        :done #(done))))))

(comment ; TODO, is this test needed any more?
(deftest scroll-persists
  (testing "Ensure visrs presentation is kept during updates"
    (async
     done
     (let [{:keys [fs input output menu runner running?]
            :as db}
           (default-db :temp),
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           lib "
(ns test.core
  (:require [react-bootstrap :refer [Button]]))

(defvisr Scroller
 (elaborate [this] 42)
 (render [this]
  [:<>
    (for [i (range 50)]
      [:> Button {:key (str i)} \"not me\"])
    [:> Button {:key (str \"pick\") :on-click #(swap! this inc)} \"Click me!\"]]))"
           use "
(ns test.use
  (:require [test.core :include-macros true]))
^{:editor test.core/Scroller}(test.core/Scroller+elaborate 0)"
           use2 "
(ns test.use
  (:require [test.core :include-macros true]))
123
^{:editor test.core/Scroller}(test.core/Scroller+elaborate 0)"
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :async #(fs.mkdir (.join js/path files-root "test") %)
        :async #(fs.writeFile (js/path.join files-root "test/core.cljs") lib %)
        :do #(-> @editor .getDoc (.setValue use))
        :wait-until not resetting
        :wait 0
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :wait 2000
        :do #(-> js/document
                 .-body
                 (.getElementsByTagName "iframe")
                 (aget 0)
                 .-scrollingElement
                 (.scroll #js {:top 300 :left 0 :behavior "instant"}))
        :wait 3000
        :do #(-> @editor .getDoc (.setValue use2))
        :wait-until not resetting
        :wait 5000
        :do #(is (>= (-> js/document
                         .-body
                         (.getElementsByTagName "iframe")
                         .-length)
                     1))
        :do #(is (= (-> js/document
                        .-body
                        (.getElementsByTagName "iframe")
                        (aget 0)
                        .-scrollingElement
                        .-scrollTop)
                    300))
        :done #(done)))))))

(deftest bad-dep
  (testing "Ensure proper error message when bad dep added"
    (async
     done
     (let [{:keys [fs input output menu runner running? deps]
            :as db}
           (default-db :temp),
           dep-mod "not a valid javascript file",
           uri (utils/module->uri dep-mod),
           new-deps {1 {:name "bad-module" :url uri :load? true}}]
       (cb-thread
        #(fs.writeFile (.join js/path deps-root "bad-module") dep-mod %)
        #(let [resetting (atom nil),
               _ (reset! deps new-deps)
               view (rtl/render (r/as-element [core/home-page db
                                               {:editor-reset resetting}]))]
           (test-do
            db
            :set [:deps] new-deps
            :set [:output] #queue ["Cannot load dependency bad-module:"
                                   "SyntaxError: Unexpected identifier 'a'"]
            :wait-until not resetting
            :check
            :do #(js/URL.revokeObjectURL uri)
            :done #(done))))))))

(deftest visr-change
  (testing "Ensure proper updates when visr changed"
    (async
     done
     (let [{:keys [fs input output menu runner running? deps]
            :as db}
           (default-db :temp)
           lib "
(ns test.core)
(defvisr Edi1
  (elaborate [this] 42)
  (render [this] [:button \"Hello\"]))
(defvisr Edi2
  (elaborate [this] 863)
  (render [this] [:button \"World\"]))"
           use1 "
(ns test.use
  (:require [test.core :include-macros true]))
^{:editor test.core/Edi1}(test.core/Edi1+elaborate {})"
           use2 "
(ns test.use
  (:require [test.core :include-macros true]))
^{:editor test.core/Edi2 :show-visr true :show-text true}(test.core/Edi2+elaborate {})"
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :async #(fs.mkdir (js/path.join files-root "test") %)
        :async #(fs.writeFile (js/path.join files-root "test/core.cljs") lib %)
        :do #(-> @editor .getDoc (.setValue use1))
        :set [:file-changed] true
        :set [:input] use1 :check
        :wait-until not resetting
        :wait 0
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/CODE) 0))
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :wait 1000
        :do #(.change rtl/fireEvent
                      (-> js/document
                          .-body
                          (.getElementsByClassName "visr-code")
                          (aget 0)
                          (.querySelector "[aria-label=\"VISr\"]"))
                      #js {:target #js {:value "test.core/Edi2"}})
        :wait-until not resetting
        :wait 1000
        :do #(is (= (-> js/document
                        .-body
                        (.getElementsByClassName "visr-body")
                        (aget 0)
                        (.getElementsByTagName "button")
                        (aget 0)
                        .-innerHTML)
                    "World"))
        :set [:input] use2 :check
        :done #(done))))))


(deftest visr-in-mod-change
  (testing "Ensure editor updates when its surrounding module changes"
    (async
     done
     (let [{:keys [fs input output menu runner running? deps
                   file-changed current-file current-folder]
            :as db}
           (default-db :temp)
           lib "
(ns test.core)
(defvisr TheEditor
  (elaborate [this] 42)
  (render [this] [:button \"Hello\"]))
(comment ^{:editor test.core/TheEditor :show-visr false :show-text false} (test.core/TheEditor+elaborate {}))"
           lib2 "
(ns test.core)
(defvisr TheEditor
  (elaborate [this] 42)
  (render [this] [:button \"World\"]))
(comment ^{:editor test.core/TheEditor :show-visr true :show-text false} (test.core/TheEditor+elaborate {}))"

           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :async #(fs.mkdir (js/path.join files-root "test") %)
        :do #(reset! current-folder (js/path.join files-root "test"))
        :do #(reset! current-file "core.cljs")
        :set [:current-folder] (js/path.join files-root "test")
        :set [:current-file] "core.cljs" :check
        :do #(-> @editor .getDoc (.setValue lib))
        :set [:file-changed] true
        :set [:input] lib :check
        :do #(.click rtl/fireEvent (.getByText view strings/SAVE))
        :wait-until not resetting
        :wait 1000
        :set [:file-changed] false :check
        :do #(.click rtl/fireEvent
                     (aget (.getAllByLabelText view strings/VISUAL) 0))
        :wait 1000
        :do #(is (= (-> js/document
                        .-body
                        (.getElementsByClassName "visr-body")
                        (aget 0)
                        (.getElementsByTagName "button")
                        (aget 0)
                        .-innerHTML)
                    "Hello"))
        :do #(-> @editor .getDoc (.setValue lib2))
        :set [:input] lib2
        :set [:file-changed] true :check
        :wait-until not resetting
        :wait 1000
        :do #(is (= (-> js/document
                        .-body
                        (.getElementsByClassName "visr-body")
                        (aget 0)
                        (.getElementsByTagName "button")
                        (aget 0)
                        .-innerHTML)
                    "Hello"))
        :do #(.click rtl/fireEvent (.getByText view strings/SAVE))
        :set [:file-changed] false :check
        :wait-until not resetting
        :wait 1000
        :do #(is (= (-> js/document
                        .-body
                        (.getElementsByClassName "visr-body")
                        (aget 0)
                        (.getElementsByTagName "button")
                        (aget 0)
                        .-innerHTML)
                    "World"))
        :done #(done))))))


(deftest runtime-error
  (testing "Ensure printout when runtime error occurs"
    (async
     done
     (let [{:keys [fs input output menu runner running? deps]
            :as db}
           (default-db :temp)
           prog "
(ns test.core)
(def x nil)
(println \"A\")
(x)
(println \"B\")
"
           res #queue ["A"
                       "TypeError: Cannot read properties of null (reading 'call')"
                       "\t* Line 4: in (anonymous function)"
                       "Runtime Stack:"
                       :ignore]
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :do #(reset! input prog)
        :set [:input] prog :check
        :do #(click-run view)
        :wait-until not running?
        :wait 0
        :set [:output] res :check
        :done #(done))))))


(deftest visrs-reset-on-file-change
  (testing "Ensure visrs are removed when the file changes"
    (async
     done
     (let [{:keys [fs input output menu runner running? deps
                   current-file current-folder file-browser-folder]
            :as db}
           (default-db :temp),
           buff1 (str "ASDF^{:editor visr.core/empty-visr :show-visr false "
                      ":show-text false}(visr.core/empty-visr+elaborate 42)QWER")
           buff2 (string/join (for [i (range 200)] (char (+ (mod i 26) 65)))),
           editor (atom nil),
           repl (atom nil),
           resetting (atom nil),
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting
                                            :repl repl}]))]
       (test-do
        db :check
        :async #(fs.mkdir (.join js/path files-root "test") %)
        :async #(fs.writeFile (.join js/path files-root "test/B.cljs") buff2 %)
        :do #(-> @editor .getDoc (.setValue buff1))
        :wait-until not resetting
        :wait 0
        :set [:input] buff1
        :set [:file-changed] true :check
        :do #(is (= (count (.getAllByLabelText view strings/VISUAL)) 1))
        :do #(reset! file-browser-folder (js/path.join files-root "test"))
        :set [:file-browser-folder] (js/path.join files-root "test")
        :do #(reset! current-folder (js/path.join files-root "test"))
        :set [:current-folder] (js/path.join files-root "test")
        :do #(reset! current-file "A.cljs")
        :set [:current-file] "A.cljs"
        :do #(.click rtl/fireEvent (.getByText view strings/SAVE))
        :set [:file-changed] false :check
        :do #(.click rtl/fireEvent (first (.getAllByText view strings/LOAD)))
        :set [:menu] [:home :load] :check
        :do #(change-file-browser-input "B.cljs")
        :do #(submit-file-browser-input)
        :set [:menu] [:home]
        :set [:current-file] "B.cljs"
        :set [:input] buff2 :check
        :wait-until not resetting
        :do #(is (= (count (.queryAllByLabelText view strings/VISUAL)) 0))
        :done #(done))))))


(deftest test-main-functions
  (testing "Ensure default called functions match run-functions"
    (async
     done
     (let [{{:keys [run-functions]} :options :keys [input output running?] :as db}
           (default-db :temp),
           buff "
(ns test.core)
(defn- main []
  (println \"Called Main\"))
(println \"Outer Body\")"
           view (rtl/render (r/as-element [core/home-page db]))]
       (test-do
        db :check
        :do #(reset! run-functions ["main"])
        :set [:options :run-functions] ["main"]
        :do #(reset! input buff)
        :set [:input] buff :check
        :do #(click-run view)
        :wait-until not running?
        :wait 1000
        :set [:output] #queue ["Outer Body" "Called Main"] :check
        :set [:options :run-functions] []
        :do #(reset! run-functions [])
        :do #(click-run view)
        :wait-until not running?
        :wait 1000
        :set [:output] #queue ["Outer Body"] :check
        :done #(done))))))

(deftest test-correct-main-missing
  (testing "Ensure main isn't called when it does not exist"
    (async
     done
     (let [{{:keys [run-functions]} :options :keys [input output running?] :as db}
           (default-db :temp),
           buff "
(ns test.core)
(defn- not-main []
  (println \"Shouldn't get called...\"))
(println \"Outer Body\")"
           view (rtl/render (r/as-element [core/home-page db]))]
       (test-do
        db :check
        :do #(reset! run-functions ["main"])
        :set [:options :run-functions] ["main"]
        :do #(reset! input buff)
        :set [:input] buff :check
        :do #(click-run view)
        :wait-until not running?
        :wait 1000
        :set [:output] #queue ["Outer Body"] :check
        :set [:options :run-functions] []
        :do #(reset! run-functions [])
        :do #(click-run view)
        :wait-until not running?
        :wait 1000
        :set [:output] #queue ["Outer Body"] :check
        :done #(done))))))

(deftest test-state
  (testing "Test that :state updates as expected"
    (async
     done
     (let [{{:keys [run-functions]} :options :keys [input output running?] :as db}
           (default-db :temp),
           editor (atom nil),
           resetting (atom nil),
           buff "
(ns test.core (:require [react-bootstrap :refer [Button]]))
(defvisr Counter
  (:state c 0)
  (:render [this]
    [:> Button {:aria-label \"Counter\"
                :onClick #(swap! c inc)}
      @c])
  (:elaborate-fn [this] c))

(println ^{:editor Counter :show-visr true}(Counter+elaborate {:c 4}))"
           buff2 "
(ns test.core (:require [react-bootstrap :refer [Button]]))
(defvisr Counter
  (:state c 0)
  (:render [this]
    [:> Button {:aria-label \"Counter\"
                :onClick #(swap! c inc)}
      @c])
  (:elaborate-fn [this] c))

(println ^{:editor Counter :show-visr true :show-text false}(Counter+elaborate {:c 5}))"
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting}]))]
       (test-do
        db :check
        :do #(-> @editor .getDoc (.setValue buff))
        :set [:file-changed] true
        :set [:input] buff :check
        :do #(click-run view)
        :wait-until not running?
        :wait 1000
        :set [:output] #queue ["4"] :check
        :do #(.click rtl/fireEvent
                     (-> js/document
                         .-body
                         (.getElementsByClassName "visr-body")
                         (aget 0)
                         (.getElementsByTagName "button")
                         (aget 0)))
        :wait-until not resetting
        :wait 1000
        :do #(click-run view)
        :wait-until not running?
        :wait 1000
        :set [:input] buff2
        :set [:output] #queue ["5"] :check
        :done #(done))))))

(deftest test-state-different-timeout
  (testing "Test that :state updates as expected"
    (async
     done
     (let [{{:keys [run-functions]} :options :keys [input output running?] :as db}
           (default-db :temp),
           editor (atom nil),
           resetting (atom nil),
           buff "
(ns test.core (:require [react-bootstrap :refer [Button]]))
(defvisr Counter
  (:state c {:value 0 :timeout 3000})
  (:render [this]
    [:> Button {:aria-label \"Counter\"
                :onClick #(swap! c inc)}
      @c])
  (:elaborate-fn [this] c))

(println ^{:editor Counter :show-visr true}(Counter+elaborate {:c 4}))"
           buff2 "
(ns test.core (:require [react-bootstrap :refer [Button]]))
(defvisr Counter
  (:state c {:value 0 :timeout 3000})
  (:render [this]
    [:> Button {:aria-label \"Counter\"
                :onClick #(swap! c inc)}
      @c])
  (:elaborate-fn [this] c))

(println ^{:editor Counter :show-visr true :show-text false}(Counter+elaborate {:c 5}))"
           view (rtl/render (r/as-element [core/home-page db
                                           {:editor editor
                                            :editor-reset resetting}]))]
       (test-do
        db :check
        :do #(-> @editor .getDoc (.setValue buff))
        :set [:file-changed] true
        :set [:input] buff :check
        :do #(click-run view)
        :wait-until not running?
        :wait 1000
        :set [:output] #queue ["4"] :check
        :do #(.click rtl/fireEvent
                     (-> js/document
                         .-body
                         (.getElementsByClassName "visr-body")
                         (aget 0)
                         (.getElementsByTagName "button")
                         (aget 0)))
        :wait-until not resetting
        :wait 4000
        :do #(click-run view)
        :wait-until not running?
        :wait 4000
        :set [:input] buff2
        :set [:output] #queue ["5"] :check
        :done #(done))))))

(deftest test-defclass
  (testing "Test the defclass macro"
    (async
     done
     (let [{{:keys [run-functions sandbox]} :options :keys [input output running?] :as db}
           (default-db :temp),
           buff "
(ns test.core
  (:require [cljs.modern :include-macros true :refer [defclass]]))
(defclass Foo
  (constructor [this]
    (super)
    (println \"Built A\"))
  Object
  (method1 [this arg]
    (println arg)))
(-> (Foo.) (.method1 \"output\"))
(defclass Bar
  (extends Foo)
  (constructor [this]
    (super)
    (println \"Built Bar\")))
(-> (Bar.) (.method1 \"more output\"))
"
           output #queue ["Built A" "output" "Built A" "Built Bar" "more output"]
           view (rtl/render (r/as-element [core/home-page db]))]
       (test-do
        db :check
        :do #(reset! sandbox false) ;; TODO, currently only works without stopify
        :set [:options :sandbox] false :check
        :do #(reset! input buff)
        :set [:input] buff :check
        :do #(click-run view)
        :wait-until not running?
        :wait 1000
        :set [:output] output :check
        :done #(done))))))


(defn -main [& args]
  (run-tests-async 240000))

