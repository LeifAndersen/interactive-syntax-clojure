(ns interactive-syntax.core
    (:require
      [reagent.core :as r :refer [atom]]
      [reagent.dom :as d]
      [clojure.string :as string]
      [cljs.tools.reader :refer [read read-string]]
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
      ["@stopify/stopify" :as stopify]
      [browserfs]
      [react-split-pane :refer [Pane]]
      [chonky :refer [ChonkyActions]]
      [alandipert.storage-atom :refer [local-storage]]))

;; -------------------------
;; Components
(def ^:private SplitPane (.-default react-split-pane))

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
                     ;;
                     (contains? program :value)
                     (let [runner (stopify.stopifyLocally (:value program))]
                       (set! runner.g #js {:cljs js/cljs})
                       (.run runner #(swap! output conj nil)))
                     ;;
                     (contains? program :error)
                     (pprint (-> program :error)))))))


;; -------------------------
;; File Dialogs

(defn file-description [fs filepath]
  (let* [stats (fs.statSync filepath)
         ret {:id (-> js/nodeCrypto
                      (.createHash "sha1")
                      (.update filepath)
                      (.digest "base64"))
              :name (js/path.basename filepath)
              :isDir (.isDirectory stats)
              :modDate stats.ctime}
         ret (if (= (.charAt filepath 0) ".")
               (assoc ret :isHidden true)
               ret)
         ret (if (.isSymbolicLink stats)
               (assoc ret :isSymlink true)
               ret)
         ret (if (.isDirectory stats)
               ret
               (assoc ret :size stats.size))]
    (clj->js ret)))

(defn save-buffer [current-folder current-file input file-changed]
  (fs.writeFileSync (js/path.join @current-folder @current-file) @input)
  (reset! file-changed false))

(defn load-buffer [current-folder current-file input file-changed]
  (reset! input (fs.readFileSync (js/path.join @current-folder @current-file)))
  (reset! file-changed false))

(defn handle-file-action [fs menu current-folder]
  (fn [action data]
    (condp = action.id
      ,ChonkyActions.OpenParentFolder.id nil
      ,ChonkyActions.CreateFolder.id (swap! menu conj :new-folder)
      ,ChonkyActions.OpenFiles.id
      (cond
        ,(contains? (js->clj data.target) "breadCrumb")
        (swap! current-folder
               #(apply js/path.join
                       (conj (for [i (range data.target.breadCrumb)]
                               "..")
                             %)))
        ,data.target.isDir (swap! current-folder #(js/path.join % data.target.name))
        :else (println "TODO"))
      ,(println data))))

(defn make-control-dialog [menu title confirm action]
  (let [text (atom "")]
    (fn []
      [:> Modal {:show (= (peek @menu) :new-folder)
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

(defn new-dialog [fs menu current-folder]
  (make-control-dialog menu "New" "Create"
                       (fn [text]
                         (fn []
                           (when (not= @text "")
                             (let [new-path (js/path.join @current-folder @text)]
                               (fs.mkdir new-path)
                               (reset! current-folder new-path))
                             (swap! menu pop))))))

(defn confirm-save-dialog []
  [:> Modal {:show false}
   [:> Modal.Header {:close-button true}]
   [:> Modal.Footer
    [:> Button {:variant "primary"}
     "Save"]
    [:> Button {:variant "secondary"}
     "Close Without Saving"]]])

(defn file-browser [fs menu current-folder]
  [:> chonky/FileBrowser
   {:files (for [file (fs.readdirSync @current-folder)]
             (file-description fs (js/path.join @current-folder file)))
    :folder-chain (let [split (filter (partial not= "")
                                      (.split @current-folder js/path.sep))]
                    (for [[i folder] (map list
                                          (range)
                                          (conj split "/"))]
                      #js {:id (str "folder" i)
                           :breadCrumb (- (count split) i)
                           :name folder}))
    :file-actions [ChonkyActions.CreateFolder
                   ChonkyActions.DeleteFiles
                   ChonkyActions.UploadFiles
                   ChonkyActions.DownloadFiles
                   ChonkyActions.CopyFiles]
    :on-file-action (handle-file-action fs menu current-folder)}
   [:> chonky/FileToolbar]
   [:> chonky/FileSearch]
   [:> chonky/FileList]])

(defn save-dialog [fs menu current-folder current-file input file-changed]
  (let [text (atom "")]
    [:> Modal {:show (= (peek @menu) :save)
               :size "xl"
               :on-hide #(swap! menu pop)}
     [:> Modal.Header {:close-button true}
      [:h3 "Save"]]
     [:> Modal.Body
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
             (when (not= text "")
               (reset! current-file @text)
               (save-buffer current-folder current-file input file-changed)
               (swap! menu pop)))}
          "Save"]]]]
      [file-browser fs menu current-folder]]]))

(defn load-dialog [fs menu current-folder]
  [:> Modal {:show (= (peek @menu) :load)
             :size "xl"
             :on-hide #(swap! menu pop)}
   [:> Modal.Header {:close-button true}
    [:h3 "Load"]]
   [:> Modal.Body
    [file-browser fs menu current-folder]]])

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
                       (when (not (js/isNaN value))
                         (reset! (:font-size options) value)))
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

(defn button-row [input output menu]
  (let []
    (fn []
      [:> Row
       [:> Col {:xs "auto"}
        [:> Button "New"]
        [:> SplitButton {:title "Save"}
         [:> Dropdown.Item {:on-click #(swap! menu conj :save)}
        "Save As"]]
        [:> Button {:on-click #(swap! menu conj :load)}
         "Load"]
        [:> DropdownButton {:as ButtonGroup
                            :title "Project"}
         [:> Dropdown.Item "Import"]
         [:> Dropdown.Item "Export"]]
        [:> Button
         {:on-click #(swap! menu conj :options)}
         "Options"]]
       [:> Col]
       [:> Col {:xs "auto"}
        [:> Button
         {:on-click #(let []
                       (reset! output #queue [])
                       (eval-str @input output))}
         "Run"]
        [:> Button
         "Stop"]]])))

(defn editor [input options file-changed]
  (let [edit (atom nil)]
    (fn []
      (when (not= @edit nil)
        (set! (-> @edit .getWrapperElement .-style .-fontSize)
              (str @(:font-size options) "px"))
        (-> @edit .refresh))
      [:> cm/Controlled
       {:value @input
        :options {:mode "clojure"
                  :keyMap @(:keymap options)
                  :theme @(:theme options "material")
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers true}
        :onBeforeChange #(let []
                     (reset! file-changed true)
                     (reset! input %3))
        :editorDidMount #(reset! edit %)}])))

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
        file-changed (local-storage (atom "") :file-changed)
        options (into {}
                      (for [kv {:saved false
                                :orientation "horizontal"
                                :keymap "sublime"
                                :font-size 12
                                :theme "material"}]
                        [(key kv) (local-storage (atom (val kv)) (key kv))]))
        fs (browserfs/BFSRequire "fs")]
    (fn []
      (browserfs/configure #js {:fs "LocalStorage"}
                           #(when %
                              (throw %)))
      (set! js/window.stopify stopify)
      (set! js/window.fs fs) ; <-- XXX For debugging, should remove
      [:main {:role "main"}
       [save-dialog fs menu current-folder current-file input file-changed]
       [load-dialog fs menu current-folder]
       [options-dialog options menu]
       [button-row input output menu]
       [new-dialog fs menu current-folder]
       [:> SplitPane {:split @(:orientation options)
                      :minSize 300
                      :defaultSize 300}
        [editor input options file-changed]
        [result-view output options]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
