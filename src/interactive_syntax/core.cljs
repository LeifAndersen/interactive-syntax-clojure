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
      [react-codemirror2 :refer [Controlled UnControlled]]
      ["codemirror/mode/clojure/clojure"]
      ["codemirror/keymap/vim"]
      ["codemirror/keymap/emacs"]
      ["codemirror/keymap/sublime"]
      ["@stopify/stopify" :as stopify]
      [browserfs]
      [react-split-pane :refer [Pane]]
      [chonky :refer [FileBrowser FileList FileSearch FileToolbar ChonkyActions]]
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

(defn handle-file-action [fs current-folder]
  (fn [action data]
    (println (= ChonkyActions.CreateFolder.id action.id))
    (condp = action.id
      ChonkyActions.CreateFolder.id (println data)
      ChonkyActions.OpenFiles.id (println "YAY")
      nil)))

(defn new-dialog [fs new-menu current-folder]
  [:> Modal {:show @new-menu
             :on-hide #(reset! new-menu false)}
   [:> Modal.Header {:close-button true}]
   [:> Modal.Body
    [:> Form
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 @new-menu]]]]]])

(defn save-dialog []
  [:> Modal {:show false}
   [:> Modal.Header {:close-button true}]
   [:> Modal.Footer
    [:> Button {:variant "primary"}
     "Save"]
    [:> Button {:variant "secondary"}
     "Close Without Saving"]]])

(defn load-dialog [fs load-menu current-folder]
  [:> Modal {:show @load-menu
             :size "xl"
             :on-hide #(reset! load-menu false)}
   [:> Modal.Header {:close-button true}
    [:h2 "Load"]]
   [:> Modal.Body
    [:> FileBrowser
     {:files (for [file (fs.readdirSync @current-folder)]
               (file-description fs file))
      :folder-chain (for [[i folder] (map list
                                         (range)
                                         (conj (filter (partial not= "")
                                                       (.split @current-folder
                                                               js/path.sep))
                                               "/"))]
                     #js {:id (str "folder" i)
                          :name folder})
      :file-actions [ChonkyActions.CreateFolder
                    ChonkyActions.DeleteFiles
                    ChonkyActions.UploadFiles
                    ChonkyActions.DownloadFiles
                    ChonkyActions.CopyFiles]
      :on-file-action (handle-file-action fs current-folder)}
     [:> FileToolbar]
     [:> FileSearch]
     [:> FileList]]]])

;; -------------------------
;; Options

(defn option-button [options key type display]
  [:> Button {:variant (if (= @(key options) type) "primary" "secondary")
              :on-click #(reset! (key options) type)}
   display])

(defn options-dialog [options options-menu]
  [:> Modal {:show @options-menu
             :on-hide #(reset! options-menu false)}
   [:> Modal.Header {:close-button true}
    [:h2 "Options Menu"]]
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
                :on-click #(reset! options-menu false)}
     "Close"]]])

;; -------------------------
;; Editor

(defn button-row [input output options-menu load-menu]
  (let []
    (fn []
      [:> Row
       [:> Col {:xs "auto"}
        [:> Button "New"]
        [:> SplitButton {:title "Save"}
         [:> Dropdown.Item "Save As"]]
        [:> Button
         {:on-click #(reset! load-menu true)}
         "Load"]
        [:> DropdownButton {:as ButtonGroup
                            :title "Project"}
         [:> Dropdown.Item "Import"]
         [:> Dropdown.Item "Export"]]
        [:> Button
         {:on-click #(reset! options-menu true)}
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

(defn editor [input options]
  (let [edit (atom nil)]
    (fn []
      (when (not= @edit nil)
        (set! (-> @edit .getWrapperElement .-style .-fontSize)
              (str @(:font-size options) "px"))
        (-> @edit .refresh))
      [:> UnControlled
       {:value ""
        :options {:mode "clojure"
                  :keyMap @(:keymap options)
                  :theme @(:theme options "material")
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers true}
        :onChange #(reset! input %3)
        :editorDidMount #(reset! edit %)}])))

(defn result-view [output options]
  (let [edit (atom nil)]
    (fn []
      (when (not= @edit nil)
        (set! (-> @edit .getWrapperElement .-style .-fontSize)
              (str @(:font-size options) "px"))
        (-> @edit .refresh))
      [:> Controlled
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
        options-menu (local-storage (atom false) :options-menu)
        load-menu (local-storage (atom false) :load-menu)
        new-menu (local-storage (atom false) :new-menu)
        current-folder (local-storage (atom "/") :current-folder)
        options (into {}
                      (for [kv {:saved false
                                :orientation "horizontal"
                                :keymap "sublime"
                                :font-size 12
                                :theme "material"
                                :current-file nil}]
                        [(key kv) (local-storage (atom (val kv)) (key kv))]))
        fs (browserfs/BFSRequire "fs")]
    (fn []
      (browserfs/configure #js {:fs "LocalStorage"}
                           #(when %
                              (throw %)))
      (set! js/window.stopify stopify)
      [:main {:role "main"}
       [load-dialog fs load-menu current-folder]
       [options-dialog options options-menu]
       [button-row input output options-menu load-menu]
       [new-dialog fs new-menu current-folder]
       [:> SplitPane {:split @(:orientation options)
                      :minSize 300
                      :defaultSize 300}
        [editor input options]
        [result-view output options]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
