(ns interactive-syntax.core
    (:require
      [reagent.core :as r :refer [atom]]
      [reagent.dom :as d]
      [clojure.string :as string]
      [clojure.walk :as walk]
      [cljs.tools.reader :refer [read read-string]]
      [cljs.tools.reader.reader-types :refer [indexing-push-back-reader
                                              get-line-number
                                              get-column-number]]
      [cljs.js :as cljs :refer [empty-state compile-str js-eval]]
      [cljs.pprint :refer [pprint]]
      [cljs.core.match :refer [match]]
      [jquery]
      [popper.js]
      [bootstrap]
      [react-bootstrap :refer [Button ButtonGroup SplitButton
                               Dropdown DropdownButton
                               Row Col Form Container Modal]]
      [codemirror]
      [react-codemirror2 :as cm]
      ["codemirror/mode/clojure/clojure"]
      ["codemirror/keymap/vim"]
      ["codemirror/keymap/emacs"]
      ["codemirror/keymap/sublime"]
      ["codemirror/addon/search/searchcursor"]
      ["@stopify/stopify" :as stopify]
      [browserfs]
      [react-split-pane :refer [Pane]]
      [react-switch]
      [react-dnd :refer [DndProvider]]
      [react-dnd-html5-backend :refer [HTML5Backend]]
      [chonky :refer [ChonkyActions]]
      [alandipert.storage-atom :refer [local-storage]]))

;; -------------------------
;; Components
(def ^:private SplitPane (.-default react-split-pane))
(def ^:private Switch (.-default react-switch))

;; -------------------------
;; Evaluator

(defn eval-str [s output]
  (compile-str (empty-state)
               s
               "UNTITLED.cljs"
               {:eval js-eval
                :source-map true}
               (fn [program]
                 (binding [*print-fn* #(swap! output conj %)]
                   (cond
                     (contains? program :value)
                     (let [runner (stopify.stopifyLocally (:value program))]
                       (set! runner.g #js {:cljs js/cljs})
                       (.run runner #(swap! output conj nil))),
                     (contains? program :error) (pprint (-> program :error)))))))


;; -------------------------
;; File Dialogs

(defn file-description [fs filepath]
  (let [stats (fs.statSync filepath)]
    (cond-> {:id (-> js/nodeCrypto
                     (.createHash "sha1")
                     (.update filepath)
                     (.digest "base64"))
             :name (js/path.basename filepath)
             :isDir (.isDirectory stats)
             :modDate stats.ctime}
      (= (.charAt filepath 0) ".") (assoc :isHidden true)
      (.isSymbolicLink stats) (assoc :isSymlink true)
      (not (.isDirectory stats)) (assoc :size stats.size)
      :always clj->js)))

(defn save-buffer [current-folder current-file input file-changed]
  (fs.writeFileSync (js/path.join @current-folder @current-file) @input)
  (reset! file-changed false))

(defn load-buffer [current-folder current-file input file-changed]
  (reset! input (fs.readFileSync (js/path.join @current-folder @current-file)))
  (reset! file-changed false))

(defn make-control-dialog [menu key title confirm action]
  (let [text (atom "")]
    (fn []
      [:> Modal {:show (= (peek @menu) key)
                 :on-hide #(swap! menu pop)}
       [:> Modal.Header {:close-button true}
        [:h3 title]]
       [:> Modal.Body
        [:> Form
         [:> Form.Group {:as Row}
          [:> Col {:xs "auto"}
           [:> Form.Label {:sr-only true}
            title]]
          [:> Col {:xs 8}
           [:> Form.Control {:on-change #(reset! text (-> % .-target .-value))}]]
          [:> Col {:xs "auto"}
           [:> Button
            {:on-click (action text)}
            confirm]]]]]])))

(defn new-folder-dialog [fs menu current-folder]
  (make-control-dialog menu :new-folder "New" "Create"
                       (fn [text]
                         (fn []
                           (when (not= @text "")
                             (let [new-path (js/path.join @current-folder @text)]
                               (fs.mkdir new-path)
                               (reset! current-folder new-path))
                             (swap! menu pop))))))

(defn confirm-save-dialog [menu current-folder current-file input file-changed]
  (let [item (peek @menu)]
    [:> Modal {:show (and (coll? item) (= (first item) :confirm-save))
               :on-hide #(swap! menu pop)}
     [:> Modal.Header {:close-button true}
      [:h3 "Unsaved Changes..."]]
     [:> Modal.Footer
      [:> Button
       {:variant "primary"
        :on-click (fn []
                    (if @current-file
                      (save-buffer current-folder
                                   current-file
                                   input
                                   file-changed)
                      (swap! menu #(-> % pop (conj [:save (second item)])))))}
       "Save"]
      [:> Button {:variant "secondary"
                  :on-click (fn [] (swap! menu #(-> % (conj (second item)))))}
       "Continue Without Saving"]]]))

(defn file-browser [fs menu current-folder current-file choice-text choice-callback]
  (let [text (atom "")]
    [:div {:style #js {:height "450px"}}
     [:> chonky/FileBrowser
      {:enable-drag-and-drop true
       :files (for [file (fs.readdirSync @current-folder)]
                (file-description fs (js/path.join @current-folder file)))
       :folder-chain (let [split (filter (partial not= "")
                                         (.split @current-folder js/path.sep))]
                       (for [[i folder] (map list (range) (conj split "/"))]
                         #js {:id (str "folder" i)
                              :breadCrumb (- (count split) i)
                              :name folder}))
       :file-actions [ChonkyActions.CreateFolder
                      ChonkyActions.DeleteFiles
                      ChonkyActions.UploadFiles
                      ChonkyActions.DownloadFiles
                      ChonkyActions.CopyFiles]
       :on-file-action (fn [action data]
                         (condp = action.id
                           ChonkyActions.OpenParentFolder.id nil,
                           ChonkyActions.CreateFolder.id
                           (swap! menu conj :new-folder),
                           ChonkyActions.OpenFiles.id
                           (cond
                             (contains? (js->clj data.target) "breadCrumb")
                             (swap! current-folder
                                    #(apply js/path.join
                                            (conj (for [i (range
                                                           data.target.breadCrumb)]
                                                    "..")
                                                  %))),
                             data.target.isDir
                             (swap! current-folder
                                   #(js/path.join % data.target.name)),
                             :else (choice-callback data.target.name)),
                           (println data)))}
      [:> Form
       [:> Form.Group {:as Row}
        [:> Col {:xs "auto"}
         [:> Form.Label {:column true}
          "File"]]
        [:> Col {:xs 10}
         [:> Form.Control {:on-change #(reset! text (-> % .-target .-value))}]]
        [:> Col {:xs "auto"}
         [:> Button
          {:on-click
           (fn []
             (when (not= @text "")
               (choice-callback @text)
               (swap! menu #(let [item (peek %)
                                  rest (pop %)]
                              (if (and (coll? item)
                                       (= (count item) 2))
                                (conj rest (second item))
                                rest)))))}
          choice-text]]]]
      [:> chonky/FileToolbar]
      [:> chonky/FileSearch]
      [:> chonky/FileList]]]))

(defn save-dialog [fs menu current-folder current-file input file-changed]
  (let [item (peek @menu)]
    [:> Modal {:show (and (coll? item) (= (first item) :save))
               :size "xl"
               :on-hide #(swap! menu pop)}
     [:> Modal.Header {:close-button true}
      [:h3 "Save"]]
     [file-browser fs menu current-folder current-file "Save"
      (fn [file]
        (reset! current-file file)
        (save-buffer current-folder current-file input file-changed))]]))

(defn load-dialog [fs menu current-folder current-file input file-changed]
  [:> Modal {:show (= (peek @menu) :load)
             :size "xl"
             :on-hide #(swap! menu pop)}
   [:> Modal.Header {:close-button true}
    [:h3 "Load"]]
   [:> Modal.Body
    [file-browser fs menu current-folder current-file "Load"
     (fn [file]
       (reset! @current-file file)
       (load-buffer current-folder current-file input file-changed))]]])

(defn new-file-action [menu current-file input file-changed]
  (when (= (peek @menu) :new)
    (println @menu)
    (reset! current-file nil)
    (reset! file-changed false)
    (reset! input "")
    (swap! menu pop))
  [:div])

;; -------------------------
;; Options

(defn option-button [options key type display]
  [:> Button {:variant (if (= @(key options) type) "primary" "secondary")
              :on-click #(reset! (key options) type)}
   display])

(defn options-dialog [options menu]
  [:> Modal {:show (= (peek @menu) :options)
             :on-hide #(swap! menu pop)}
   [:> Modal.Header {:close-button true}
    [:h3 "Options Menu"]]
   [:> Modal.Body
    [:> Form
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 "Visual Editors:"]]
      [:> Col
       [:> Switch {:checked @(:show-editors options)
                   :on-change #(reset! (:show-editors options) %)}]]]
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 "Split:"]]
      [:> Col
       [:> ButtonGroup {:aria-label "Split"}
        [option-button options :orientation "horizontal" "Horizontal"]
        [option-button options :orientation "vertical" "Vertical"]]]]
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 "Keymap:"]]
      [:> Col
       [:> ButtonGroup {:aria-label "Keyamp"}
        [option-button options :keymap "vim" "Vim"]
        [option-button options :keymap "emacs" "Emacs"]
        [option-button options :keymap "sublime" "Sublime"]]]]
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 "Font Size:"]]
      [:> Col
       [:> Row
      [:> Col {:xs "auto"}
       [:> Button {:on-click #(swap! (:font-size options) dec)}
        "-"]]
      [:> Col {:xs 4}
       [:> Form.Control
        {:on-change #(let [value (js/parseInt (-> % .-target .-value))]
                       (when-not (js/isNaN value)
                         (reset! (:font-size options) (max 1 value))))
         :value @(:font-size options)}]]
      [:> Col {:xs "auto"}
       [:> Button {:on-click #(swap! (:font-size options) inc)}
        "+"]]]]]
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 "Theme:"]]
      [:> Col
       [:> ButtonGroup {:aria-label "Theme"}
        [option-button options :theme "neat" "Light"]
        [option-button options :theme "material" "Dark"]]]]]]
   [:> Modal.Footer
    [:> Button {:variant "primary"
                :on-click #(swap! menu pop)}
     "Close"]]])

;; -------------------------
;; Editor

(defn button-row [input output current-folder current-file file-changed menu]
  (let [new-file (if @file-changed
                   #(swap! menu conj [:confirm-save :new])
                   #(swap! menu conj :new))
        save-file (if @current-file
                     #(save-buffer current-folder
                                   current-file
                                   input
                                   file-changed)
                     #(swap! menu conj [:save]))
        save-file-as #(swap! menu conj [:save])
        load-file (if @file-changed
                    #(swap! menu conj [:confirm-save :load])
                    #(swap! menu conj :load))
        options #(swap! menu conj :options)
        file-name (str (if @current-file
                         (js/path.join @current-folder @current-file)
                         "UNTITLED.cljs")
                       (if @file-changed
                         "*"
                         ""))
        run #(let []
               (reset! output #queue [])
               (eval-str @input output))]
    (fn []
      [:div
       [:div {:class-name "d-block d-md-none"}
        [:> Row {:class-name "align-items-center flex-nowrap"
                 :style {:margin-left 0
                         :margin-right 0}}
         [:> Col {:xs "auto"
                  :style {:padding-left 0}}
          [:> DropdownButton {:as ButtonGroup
                              :title "Menu"
                              :size "sm"}
           [:> Dropdown.Item {:on-click new-file} "New"]
           [:> Dropdown.Item {:on-click save-file} "Save"]
           [:> Dropdown.Item {:on-click save-file-as} "Save As"]
           [:> Dropdown.Item {:on-click load-file} "Load"]
           [:> Dropdown.Item {:on-click options} "Options"]
           [:> Dropdown.Item "Import Project"]
           [:> Dropdown.Item "Export Project"]]]
         [:> Col
          [:> Container {:class-name "d-none d-sm-block"
                         :fluid true
                         :overflow "hidden"
                         ;;:text-overflow "ellipsis"
                         }
           file-name]]
         [:> Col {:xs "auto"
                  :style {:padding-right 0}}
          [:> SplitButton {:title "Run"
                           :size "sm"
                           :on-click run}
           [:> Dropdown.Item "Stop"]]]]]
       [:div {:className "d-none d-md-block"}
        [:> Row {:className "align-items-center"
                 :style {:margin-left 0
                         :margin-right 0}}
         [:> Col {:xs "auto"
                  :style {:padding-left 0}}
          [:> Button {:on-click new-file} "New"]
          [:> SplitButton
           {:title "Save"
            :on-click save-file}
           [:> Dropdown.Item {:on-click save-file-as} "Save As"]]
          [:> Button {:on-click load-file} "Load"]
          [:> DropdownButton {:as ButtonGroup
                              :title "Project"}
           [:> Dropdown.Item "Import"]
           [:> Dropdown.Item "Export"]]
          [:> Button {:on-click options} "Options"]]
         [:> Col [:> Container file-name]]
         [:> Col {:xs "auto"
                  :style {:paddingRight 0}}
          [:> Button {:on-click run} "Run"]
          [:> Button "Stop"]]]]])))

(defn reset-editors! [s editor instances options]
  (for [i @instances] (.clear i))
  (reset! instances [])
  (when (and @(:show-editors options) @editor)
    (let [prog (indexing-push-back-reader s)
          eof (atom nil)]
      (loop []
        (let [form (read {:eof eof} prog)]
          (when-not (identical? form eof)
            ((fn rec [form]
               (let [info (meta form)]
                 (when (= (:tag info) 'editor)
                   (swap! instances conj
                          (-> @editor
                              (.getDoc)
                              (.markText
                               #js {:line (dec (:line info)),
                                    :ch (dec (:column info))}
                               #js {:line (dec (:end-line info)),
                                    :ch (dec (:end-column info))}
                               #js {:collapsed true}))))
                 (doseq [e form]
                   (when (coll? e)
                     (rec e)))))
             form)
            (recur)))))))

(defn editor [input options file-changed]
  (let [edit (atom nil)
        instances (atom [])]
    (fn []
      (when (not= @edit nil)
        (reset-editors! @input edit instances options)
        (set! (-> @edit .getWrapperElement .-style .-fontSize)
              (str @(:font-size options) "px"))
        (-> @edit .refresh))
      [:> cm/UnControlled
       {:options {:mode "clojure"
                  :keyMap @(:keymap options)
                  :theme @(:theme options "material")
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers true}
        :onChange #(let []
                     (reset-editors! %3 edit instances options)
                     (reset! file-changed true)
                     (reset! input %3))
        :editorDidMount #(let []
                           (-> % .getDoc (.setValue @input))
                           (reset! edit %)
                           (reset-editors! @input edit instances options))}])))

(defn result-view [output options]
  (let [edit (atom nil)]
    (fn []
      (when (not= @edit nil)
        (set! (-> @edit .getWrapperElement .-style .-fontSize)
              (str @(:font-size options) "px"))
        (-> @edit .refresh))
      [:> cm/Controlled
       {:value (string/join "\n" @output)
        :options {:mode "clojure"
                  :theme @(:theme options "material")
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers false}
        :editorDidMount #(reset! edit %)}])))


;; -------------------------
;; Views

(defn home-page []
  (let [input (local-storage (atom "") :input)
        output (atom nil)
        menu (local-storage (atom [:home]) :menu)
        current-folder (local-storage (atom "/") :current-folder)
        current-file (local-storage (atom nil) :current-file)
        file-changed (local-storage (atom false) :file-changed)
        options (into {}
                      (for [kv {:orientation "horizontal"
                                :keymap "sublime"
                                :font-size 12
                                :theme "material"
                                :show-editors false}]
                        [(key kv) (local-storage (atom (val kv)) (key kv))]))
        fs (browserfs/BFSRequire "fs")]
    (fn []
      (browserfs/configure #js {:fs "LocalStorage"}
                           #(when %
                              (throw %)))
      (set! js/window.stopify stopify)
      (set! js/window.fs fs) ; <-- XXX For debugging, should remove
      [:main {:role "main"
              :style {:height "100%"
                      :display "flex"
                      :flex-flow "column"}}
       [new-file-action menu current-file input file-changed]
       [save-dialog fs menu current-folder current-file input file-changed]
       [load-dialog fs menu current-folder current-file input file-changed]
       [options-dialog options menu]
       [confirm-save-dialog menu current-folder current-file input file-changed]
       [new-folder-dialog fs menu current-folder]
       [:div {:style {:flex "0 1 auto"}}
        [button-row input output current-folder current-file file-changed menu]]
       [:div {:style {:flex "1 1 auto"}}
        [:> SplitPane {:split @(:orientation options)
                       :minSize 300
                       :defaultSize 300}
         [editor input options file-changed]
         [result-view output options]]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render
   [:> DndProvider {:backend HTML5Backend}
    [home-page]]
   (.getElementById js/document "app")))

(defn init! []
  (mount-root))
