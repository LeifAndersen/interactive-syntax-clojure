(ns interactive-syntax.core
  (:require-macros
   [interactive-syntax.slurp :refer [slurp]])
  (:require
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   [clojure.string :as string]
   [cljs.pprint :refer [pprint]]
   [cljs.core.match :refer [match]]
   [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                      oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]
   [interactive-syntax.db :as db :refer [files-root default-db]]
   [interactive-syntax.utils :as utils :refer [cb-thread cb-loop]]
   [interactive-syntax.strings :as strings]
   [interactive-syntax.env :as env]
   [interactive-syntax.stdlib :as stdlib]
   [interactive-syntax.fs :as fs :refer [recursive-rm filepath->id
                                          file-description]]
   [cognitect.transit :as t]
   [ajax.core :refer [GET POST PUT]]
   [popper.js]
   [bootstrap]
   [alandipert.storage-atom :as storage]
   [react-bootstrap :refer [Button ButtonGroup ButtonToolbar SplitButton
                            Dropdown DropdownButton Tabs Tab
                            Row Col Form Container Modal
                            Table Spinner Alert]]
   [react-hotkeys :refer [GlobalHotKeys]]
   [codemirror]
   [file-saver :refer [saveAs]]
   ["@leifandersen/react-codemirror2" :as cm]
   ["codemirror/keymap/vim"]
   ["codemirror/keymap/emacs"]
   ["codemirror/keymap/sublime"]
   ["codemirror/addon/search/searchcursor"]
   ["codemirror/addon/hint/show-hint"]
   ["codemirror/addon/hint/anyword-hint"]
   ["codemirror/addon/edit/closebrackets"]
   ["codemirror/addon/fold/foldcode.js"]
   ["codemirror/addon/fold/foldgutter.js"]
   ["codemirror/addon/fold/brace-fold.js"]
   ["codemirror/addon/fold/comment-fold.js"]
   ["codemirror/mode/clojure/clojure"]
   [browserfs]
   [react-split-pane]
   ["react-split-pane/lib/Pane" :as Pane]
   [react-switch]
   [react-dnd :refer [DndProvider]]
   [react-dnd-html5-backend :refer [HTML5Backend]]
   [isomorphic-git]
   ["isomorphic-git/http/web" :as isohttp]
   [chonky :refer [ChonkyActions]]
   [chonky-icon-fontawesome]))

;; -------------------------
;; Components
(def ^:private SplitPane (.-default react-split-pane))
(def ^:private Switch (.-default react-switch))

;; -------------------------
;; Dialogs
(defn splash-dialog [{:keys [menu version]}]
  [:> Modal {:show (= (peek @menu) :splash)
             :size "xl"}
   [:> Modal.Header
    [:h1 "VISr for ClojureScript Prototype"]]
   [:> Modal.Body
    [:ul
     [:li "This is an early prototype of VISr for ClojureScript."]
     [:li "If the prototype crashes, reset your browser's local storage."]
     [:li "This page was built on:"
      [:div {:style {:text-align "center"}}
       [:h1 [:code (slurp "src/injectable/date.inject")]]]]
     [:li "More information on interactive-syntax:"
      "[" [:a {:href "https://dl.acm.org/doi/abs/10.1145/3428290"
               :target "_blank" :rel "noopener"}
           "Paper"] "]"
      "[" [:a {:href "https://www.youtube.com/watch?v=8htgAxJuK5c"
               :target "_blank" :rel "noopener"}
           "Video"] "]"]
     [:li "Contributions and bug reports welcome on "
      [:a {:href "https://github.com/LeifAndersen/interactive-syntax-clojure"
           :target "_blank" :rel "noopener"}
       "this project's GitHub page"] "."]
     [:li "This dialog will reappear when new versions are released."]]
    [:> Button {:on-click #(swap! menu pop)} "I understand..."]]])

(defn import-dialog [{:keys [fs menu] :as db}]
  (let [file (atom nil)
        show-confirm? (atom false)
        import (fn []
                 (when @file
                   (swap! menu pop)
                   (swap! menu conj :hold)
                   (-> (ocall (aget (oget @file :target.files) 0) :arrayBuffer)
                       (.then (fn [r] (fs/import-from-zip db r #(swap! menu pop))))
                       (.catch (fn [e]
                                 (swap! menu pop)
                                 (swap! menu conj [:error (str e)]))))))
        wipe+import (fn []
                      (when @file
                        (swap! menu pop)
                        (swap! menu conj :hold)
                        (-> (ocall (aget (oget @file :target.files) 0) :arrayBuffer)
                            (.then
                             (fn [r]
                               (fs/wipe-project!
                                db (fn []
                                     (fs/import-from-zip db r #(swap! menu pop))))))
                            (.catch (fn [e]
                                      (swap! menu pop)
                                      (swap! menu conj :error))))))]
    (fn [{:keys [menu] :as db}]
      [:> Modal {:show (= (peek @menu) :import)
                 :size "x"
                 :on-hide #(swap! menu pop)}
       [:> Modal.Header {:close-button true}
        strings/IMPORT-PROJECT]
       [:> Modal.Body
        [:> Form {:onSubmit (fn [x]
                              (.preventDefault x)
                              (.stopPropagation x))}
         [:> (oget Form :Group)
          [:> (oget Form :Label) {:visuallyHidden true} strings/FILE]
          [:> (oget Form :Control) {:type "file"
                                    :on-change #(reset! file %)}]]
         [:br]
         [:div {:class-name "d-block d-md-none"}
          [:> (oget Form :Group)
           [:> (oget Form :Label) strings/IMPORT-PROJECT]
           [:div {:class-name "d-grid gap-2"}
            [:> Button {:on-click import} strings/MERGE-PROJECT]
            [:> Button {:on-click #(reset! show-confirm? true) :variant "danger"}
             strings/WIPE-PROJECT]]]]
         [:div {:className "d-none d-md-block"}
          [:> (oget Form :Group)
           [:> (oget Form :Label) strings/IMPORT-PROJECT]
           [:> Row {:class-name "align-items-center flex-nowrap"
                    :style {:margin-left 0
                           :margin-right 0}}
            [:> Col {:xs "auto"}
             [:> Button {:on-click import}
              strings/MERGE-PROJECT]]
            [:> Col {:xs "auto"}
             [:> Button {:on-click #(reset! show-confirm? true) :variant "danger"}
              strings/WIPE-PROJECT]]]]]
         (when @show-confirm?
           [:div
            [:br]
            [:> Alert {:variant "danger"} strings/WARNING-WIPE]
            [:div {:class-name "d-grid gap-2"}
             [:> Button {:on-click wipe+import} strings/CONFIRM-WIPE]]])]]])))

(defn confirm-wipe-dialog [{:keys [menu] :as db}]
  (let [wipe (fn []
               (swap! menu pop)
               (swap! menu conj :hold)
               (fs/wipe-project! db #(swap! menu pop)))]
    [:> Modal {:show (= (peek @menu) :wipe)
               :size "xl"
               :on-hide #(swap! menu pop)}
     [:> (oget Modal :Header) {:close-button true} [:h3 strings/WARNING-WIPE]]
     [:> (oget Modal :Body)
      [:div {:class-name "d-grid gap-2"}
       [:> Button {:on-click wipe :variant "danger"} strings/CONFIRM-WIPE]]]]))

(defn deps-dialog [{:keys [deps menu] :as db}]
  (let [new-deps (atom @deps)]
    (add-watch deps ::update-new-deps
               (fn [k r o n]
                 (when-not (and (= o n) (= n @new-deps))
                   (reset! new-deps n))))
    (fn [{:keys [deps menu] :as db}]
      [:> Modal {:show (= (peek @menu) :deps)
                 :size "xl"
                 :on-hide (fn []
                            (swap! menu pop)
                            (reset! new-deps @deps))}
       [:> Modal.Header {:close-button true}
        [:h3 strings/DEPENDENCIES]]
       [:> Modal.Body
        [:> Form {:onSubmit (fn [x]
                              (.preventDefault x)
                              (.stopPropagation x))}
         [:> Table {:striped true
                    :bordered true
                    :hover true
                    :responsive true
                    :size "sm"}
          [:thead
           [:tr
            [:th strings/NAME]
            [:th (str strings/URL " " strings/OPTIONAL)]]]
          [:tbody
           (for [[key package] @new-deps]
             (let [on-change (fn [prop]
                               #(let [value (oget % "target.value")]
                                  (swap! new-deps assoc-in [key prop] value)))]
               [:tr {:key key}
                [:td [:> (oget Form :Control) {:on-change (on-change :name)
                                               :aria-label strings/NAME
                                               :value (:name package)}]]
                [:td [:> (oget Form :Control) {:on-change (on-change :url)
                                               :aria-label strings/URL
                                               :value (:url package)}]]
                [:td [:> Button {:variant "danger"
                                 :on-click #(swap! new-deps dissoc key)}
                      "-"]]]))
           [:tr {:key 0}
            [:td] [:td] [:td]
            [:td [:> Button
                   {:on-click #(swap! new-deps assoc (js/Date.now) {:name ""
                                                                    :version ""
                                                                    :url ""})}
                  "+"]]]]]
         [:> Row {:class-name "align-items-center flex-nowrap"
                  :style {:margin-left 0
                          :margin-right 0}}
          [:> Col {:xs "auto"}
           [:> Button {:on-click (fn []
                                   (swap! menu pop)
                                   (reset! new-deps @deps))}
            strings/CANCEL]]
          [:> Col {:xs "auto"}
           [:> Button {:variant "success"
                       :on-click (fn []
                                   (reset! deps @new-deps)
                                   (swap! menu pop)
                                   (swap! menu conj :hold)
                                   (cb-thread
                                    #(env/setup-deps db true %)
                                    #(swap! menu pop)))}
            strings/UPDATE]]]]]])))

(defn hold-dialog [{:keys [menu] :as db}]
  [:> Modal {:show (= (peek @menu) :hold)
             :size "xl"}
   [:> (oget Modal :Body)
    [:> Spinner {:animation "modal"
                 :role "status"}
     "Processing..."]]])

(defn error-dialog [{:keys [menu] :as db}]
  (let [err (peek @menu)]
    [:> Modal{:show (and (coll? err) (= (first err) :error))
              :on-hide #(swap! menu pop)}
     [:> (oget Modal :Header) {:close-button true} [:h3 strings/ERROR-MESSAGE]]
     [:> (oget Modal :Body)
      [:pre [:code (and (coll? err) (second err))]]]
     [:> (oget Modal :Footer)
      [:> Button
       {:variant "primary"
        :on-click #(swap! menu pop)}
       strings/CLOSE]]]))

;; -------------------------
;; File Dialogs


(defn save-buffer [{:keys [fs menu current-folder current-file input
                           file-changed visr-commit! cm-ref scroll cursor]
                    :as db}
                   & [cb]]
  (let [c @cursor s @scroll]
    (swap! menu conj :hold)
    (when @visr-commit!
      (@visr-commit!))
    (ocall fs :writeFile (js/path.join @current-folder @current-file) @input
           (fn [err res]
             (reset! file-changed false)
             (swap! menu pop)
             (if-let [cm @cm-ref]
               (do (-> cm (ocall :getDoc) (ocall :setCursor c))
                   (-> cm (ocall :scrollTo (:x s) (:y s)))))
             (when cb (cb))))))

(defn load-buffer [{:keys [fs menu current-folder current-file input file-changed]
                    :as db}]
  (swap! menu conj :hold)
  (ocall fs :readFile (js/path.join @current-folder @current-file)
         (fn [err txt]
           (reset! input (ocall txt :toString))
           (reset! file-changed false)
           (swap! menu pop))))

(defn make-control-dialog [menu key title confirm placeholder action]
  (let [text (atom "")]
    (fn []
      [:> Modal {:show (= (peek @menu) key)
                 :on-hide #(swap! menu pop)}
       [:> (oget Modal :Header) {:close-button true}
        [:h3 title]]
       [:> (oget Modal :Body)
        [:> Form {:onSubmit #(do (.preventDefault %)
                                 (.stopPropagation %)
                                 (confirm))}
         [:> (oget Form :Group) {:as Row}
          [:> Col {:xs "auto"}
           [:> (oget Form :Label) {:visuallyHidden true}
            title]]
          [:> Col {:xs 8}
           [:> (oget Form :Control)
            {:placeholder placeholder
             :on-change #(reset! text (oget % "target.value"))}]]
          [:> Col {:xs "auto"}
           [:> Button {:on-click (action text)}
            confirm]]]]]])))

(defn new-folder-dialog [{:keys [fs menu file-browser-folder]
                          :as db}]
  (make-control-dialog
   menu :new-folder strings/NEW strings/CREATE strings/FOLDER
   (fn [text]
     (fn []
       (when (not= @text "")
         (let [new-path (js/path.join @file-browser-folder (.replace @text "/" ""))]
           (swap! menu conj :hold)
           (ocall fs :mkdir new-path
                  (fn [err]
                    (swap! menu (comp pop pop))
                    (reset! file-browser-folder new-path)))))))))

(defn confirm-save-dialog [{:keys [menu current-file]
                            :as db}]
  (let [item (peek @menu)]
    [:> Modal {:show (and (coll? item) (= (first item) :confirm-save))
               :on-hide #(swap! menu pop)}
     [:> (oget Modal :Header) {:close-button true}
      [:h3 strings/UNSAVED-CHANGES]]
     [:> (oget Modal :Footer)
      [:> Button
       {:variant "primary"
        :on-click (fn []
                    (if @current-file
                      (cb-thread
                       #(save-buffer db %)
                       #(swap! menu (fn [x] (-> x pop (conj (second item))))))
                      (swap! menu #(-> % pop (conj [:save (second item)])))))}
       strings/SAVE]
      [:> Button {:variant "secondary"
                  :on-click (fn [] (swap! menu #(-> % pop (conj (second item)))))}
       strings/CONTINUE-WITHOUT-SAVING]]]))

(defn file-browser [{:keys [fs
                            menu
                            current-file
                            file-browser-folder
                            options]
                     :as db}
                    choice-text
                    choice-callback
                    & [{ref :file-browser
                        list-ref :file-browser-list}]]
  (let [text (atom "")
        dir-list (atom [nil])
        populate-dir-list (fn [& [cb]]
                            (ocall fs :readdir @file-browser-folder
                                   (fn [err files]
                                     ((fn rec [acc rst]
                                        (if (empty? rst)
                                          (do (reset! dir-list acc) (when cb (cb)))
                                          (file-description
                                           fs
                                           (js/path.join @file-browser-folder
                                                         (first rst))
                                           #(rec (conj acc %) (rest rst)))))
                                      [] files))))
        confirm-action (fn []
                         (when (not= @text "")
                           (choice-callback @text)
                           (swap! menu #(let [item (peek %)
                                              rest (pop %)]
                                          (if (and (coll? item)
                                                   (= (count item) 2))
                                            (conj rest (second item))
                                            rest)))))
        ref (or ref #js {:current nil})]
    (when list-ref
      (reset! list-ref dir-list)) ; don't deref dir-list here
    (add-watch file-browser-folder ::folder-change
               (fn [k r o n]
                 (when (not= o n)
                   (populate-dir-list))))
    (populate-dir-list)
    (fn [{:keys [fs
                 menu
                 current-file
                 file-browser-folder
                 options]
          :as db}
         choice-text
         choice-callback
         & [{ref :file-browser
             list-ref :file-browser-list}]]
      [:div {:style #js {:height "450px"}}
       [:> chonky/FileBrowser
        {:disable-drag-and-drop (not @(:enable-drag-and-drop options))
         ;;:disable-drag-and-drop-provider true
         :ref ref
         :files @dir-list
         :folder-chain (let [split (filter (partial not= "")
                                           (-> @file-browser-folder
                                               (.replace files-root "")
                                               (.split js/path.sep)))]
                         (for [[i folder] (map list (range) (conj split " "))]
                           #js {:id (str "folder" i)
                                :breadCrumb (- (count split) i)
                                :isDir true
                                :name folder}))
         :file-actions [(oget ChonkyActions :CreateFolder)
                        ;;(oget ChonkyActions :UploadFiles)
                        ;;(oget ChonkyActions :DownloadFiles)
                        ;;(oget ChonkyActions :CopyFiles)
                        (oget ChonkyActions :DeleteFiles)]
         :on-file-action
         (fn [data-js]
           (let [{id "id"
                  action "action"
                  payload "payload"
                  state "state"
                  :as data}
                 (js->clj data-js)
                 begin-transaction #(swap! menu conj :hold)
                 end-transaction (fn []
                                   (populate-dir-list
                                    #(swap! menu pop)))]
             (condp = id
               (oget ChonkyActions :OpenParentFolder.id) nil,
               (oget ChonkyActions :StartDragNDrop.id) nil,
               (oget ChonkyActions :EndDragNDrop.id) nil,
               (oget ChonkyActions :MouseClickFile.id) nil,
               (oget ChonkyActions :OpenFileContextMenu.id) nil,
               (oget ChonkyActions :CreateFolder.id)
               (swap! menu conj :new-folder),
               ChonkyActions.OpenFiles.id
               (cond
                 (get-in payload ["targetFile" "breadCrumb"])
                 (swap! file-browser-folder
                        #(apply
                          js/path.join
                          (conj
                           (for [i
                                 (range
                                  (get-in payload ["targetFile" "breadCrumb"]))]
                             "..")
                           %))),
                 (get-in payload ["targetFile" "isDir"])
                 (swap! file-browser-folder
                        #(js/path.join % (get-in payload ["targetFile" "name"]))),
                 :else (do
                         (reset! text (get-in payload ["targetFile" "name"]))
                         (confirm-action))),
               (oget ChonkyActions :ClearSelection.id) nil,
               (oget ChonkyActions :ChangeSelection.id) nil,
               (oget ChonkyActions :MoveFiles.id)
               (do (begin-transaction)
                   (ocall fs :rename
                          (js/path.join @file-browser-folder
                                        (get-in payload ["draggedFile" "name"]))
                          (cond
                            (get-in payload ["destination" "breadCrumb"])
                            (let [split (filter (partial not= "")
                                                (.split @file-browser-folder
                                                        js/path.sep))
                                  total (count split)
                                  crumbs (get-in payload ["destination"
                                                          "breadCrumb"])]
                              (if (= total crumbs)
                                (js/path.join
                                 files-root
                                 (get-in payload ["draggedFile" "name"]))
                                (js/path.join
                                 files-root
                                 (apply js/path.join (take (- total crumbs) split))
                                 (get-in payload ["draggedFile" "name"])))),
                            (get-in payload ["destination" "isDir"])
                            (js/path.join @file-browser-folder
                                          (get-in payload ["destination" "name"])
                                          (get-in payload ["draggedFile" "name"])),
                            :else (js/path.join @file-browser-folder
                                                (get-in payload
                                                        ["destination" "name"])))
                          end-transaction)),
               (oget ChonkyActions :DeleteFiles.id)
               (do (begin-transaction)
                   ((fn rec [files]
                      (if (empty? files)
                        (end-transaction)
                        (let [f (first files)
                              name (js/path.join @file-browser-folder
                                                 (get-in f ["name"]))]
                          (recursive-rm fs name #(rec (rest files))))))
                    (get-in state ["selectedFilesForAction"])))
               (js/console.log data))
             (reset! file-browser-folder @file-browser-folder)))}
        [:> Form {:onSubmit #(do (.preventDefault %)
                                 (.stopPropagation %)
                                 (confirm-action))}
         [:> (oget Form :Group) {:as Row}
          [:> Col {:xs "auto"}
           [:> (oget Form :Label) {:column true}
            strings/FILE]]
          [:> Col {:xs 10}
           [:> (oget Form :Control)
            {:on-change #(reset! text (oget % "target.value"))}]]
          [:> Col {:xs "auto"}
           [:> Button
            {:on-click
             #(confirm-action)}
            choice-text]]]]
        [:> chonky/FileNavbar]
        [:> chonky/FileToolbar]
        [:> chonky/FileList]
        [:> chonky/FileContextMenu]]])))

(defn save-dialog [{:keys [menu
                           file-browser-folder
                           current-folder
                           current-file]
                    :as db}
                   & [{fb-ref :save-file-browser
                       fb-list-ref :save-file-browser-list}]]
  (let [item (peek @menu)]
    [:> Modal {:show (and (coll? item) (= (first item) :save))
               :size "xl"
               :on-hide #(swap! menu pop)}
     [:> (oget Modal :Header) {:close-button true}
      [:h3 strings/SAVE]]
     [file-browser db strings/SAVE
      (fn [file]
        (reset! current-folder @file-browser-folder)
        (reset! current-file file)
        (save-buffer db))
      {:file-browser fb-ref
       :file-browser-list fb-list-ref}]]))

(defn load-dialog [{:keys [menu
                           file-browser-folder
                           current-folder
                           current-file]
                    :as db}
                   & [{fb-ref :load-file-browser
                       fb-list-ref :load-file-browser-list}]]
  [:> Modal {:show (= (peek @menu) :load)
             :size "xl"
             :on-hide #(swap! menu pop)}
   [:> (oget Modal :Header) {:close-button true}
    [:h3 strings/LOAD]]
   [:> (oget Modal :Body)
    [file-browser db strings/LOAD
     (fn [file]
       (reset! current-folder @file-browser-folder)
       (reset! current-file file)
       (load-buffer db))
     {:file-browser fb-ref
      :file-browser-list fb-list-ref}]]])

(defn new-file-action [{:keys [menu current-file input file-changed]
                        :as db}]
  (when (= (peek @menu) :new)
    (reset! input "")
    (reset! current-file nil)
    (reset! file-changed false)
    (swap! menu pop))
  [:div])

;; -------------------------
;; Options

(defn option-button [option type display]
  [:> Button {:variant (if (= @option type) "primary" "secondary")
              :on-click #(reset! option type)}
   display])

(defn options-dialog [{{:keys [show-editors
                               orientation
                               keymap
                               tab-behavior
                               font-size
                               theme
                               autocomplete
                               insert-close
                               run-functions]} :options
                       :keys [menu]}]
  [:> Modal {:show (= (peek @menu) :options)
             :size "lg"
             :on-hide #(swap! menu pop)}
   [:> (oget Modal :Header) {:close-button true}
    [:h3 strings/OPTIONS-MENU]]
   [:> (oget Modal :Body)
    [:> Form {:onSubmit #(do (.preventDefault %)
                              (.stopPropagation %))}
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/VISUAL-EDITORS ":")]]
      [:> Col [:> Switch {:checked @show-editors
                          :on-change #(reset! show-editors %)}]]]
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/SPLIT ":")]]
      [:> Col [:> ButtonGroup {:aria-label strings/SPLIT}
               [option-button orientation "horizontal" strings/HORIZONTAL]
               [option-button orientation "vertical" strings/VERTICAL]]]]
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/KEYMAP ":")]]
      [:> Col [:> ButtonGroup {:aria-label strings/KEYMAP}
               [option-button keymap false "Default"]
               [option-button keymap "vim" "Vim"]
               [option-button keymap "emacs" "Emacs"]
               [option-button keymap "sublime" "Sublime"]]]]
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/TAB-BEHAVIOR ":")]]
      [:> Col [:> ButtonGroup {:aria-label strings/KEYMAP}
               [option-button tab-behavior "tab" strings/INSERT-TAB]
               [option-button tab-behavior "indent" strings/INDENT-LINE]
               [option-button tab-behavior "auto" strings/AUTO-INDENT]]]]
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/FONT-SIZE ":")]]
      [:> Col [:> Row [:> Col {:xs "auto"}
                       [:> Button {:on-click #(swap! font-size dec)}
                        "-"]]
        [:> Col {:xs 4}
         [:> (oget Form :Control)
          {:on-change #(let [value (js/parseInt (oget % "target.value"))]
                         (when-not (js/isNaN value)
                           (reset! font-size (max 1 value))))
           :value @font-size}]]
        [:> Col {:xs "auto"}
         [:> Button {:on-click #(swap! font-size inc)}
          "+"]]]]]
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/THEME ":")]]
      [:> Col [:> ButtonGroup {:aria-label strings/THEME}
               [option-button theme "neat" strings/LIGHT]
               [option-button theme "material" strings/DARK]]]]
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/AUTOCOMPLETE ":")]]
      [:> Col [:> ButtonGroup {:aria-label strings/AUTOCOMPLETE}
               [option-button autocomplete "auto" strings/CONTINUOUSLY]
               [option-button autocomplete "manual" strings/CTRL-SPACE]]]]
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/INSERT-CLOSE-PARENTHESES ":")]]
      [:> Col [:> Switch {:checked @insert-close
                          :on-change #(reset! insert-close %)}]]]
     [:> (oget Form :Group) {:as Row}
      [:> (oget Form :Label) {:column true}
       [:h4 (str strings/RUN-MAIN ":")]]
      [:> Col [:> Switch {:checked (= @run-functions ["main"])
                          :on-change #(reset! run-functions
                                              (if % ["main"] []))}]]]]]
   [:> (oget Modal :Footer)
    [:> Button {:variant "primary"
                :on-click #(swap! menu pop)}
     strings/CLOSE]]])

;; -------------------------
;; Editor

(defn save-file [{:keys [menu current-file] :as db}]
  (if @current-file
    (save-buffer db)
    (swap! menu conj [:save])))

(defn button-row [{:keys [input
                          output
                          current-folder
                          current-file
                          file-changed
                          menu
                          runner
                          running?
                          insert-visr!
                          fs]
                   :as db}]
  (let [new-file (if @file-changed
                   #(swap! menu conj [:confirm-save :new])
                   #(swap! menu conj :new))
        save-file* save-file
        save-file #(save-file* db)
        save-file-as #(swap! menu conj [:save])
        load-file (if @file-changed
                    #(swap! menu conj [:confirm-save :load])
                    #(swap! menu conj :load))
        options #(swap! menu conj :options)
        deps #(swap! menu conj :deps)
        file-name (str (if @current-file
                         (js/path.join (.replace @current-folder files-root "/")
                                       @current-file)
                         strings/UNTITLED)
                       (if @file-changed
                         "*"
                         ""))
        export-project #(fs/export-to-zip db (fn [res] (saveAs res "project.zip")))
        do-insert-visr #(when @insert-visr!
                          (@insert-visr!))
        run+pause (fn []
                    (reset! output #queue [])
                    (env/eval-buffer db))]
    [:div
     [:div {:class-name "d-block d-md-none"}
      [:> Row {:class-name "align-items-center flex-nowrap"
               :style {:margin-left 0
                       :margin-right 0}}
       [:> Col {:xs "auto"
                :style {:padding-left 0}}
        [:> DropdownButton {:as ButtonGroup
                            :title strings/MENU
                            :size "sm"}
         [:> (oget Dropdown :Item) {:on-click new-file} strings/NEW]
         [:> (oget Dropdown :Item) {:on-click save-file} strings/SAVE]
         [:> (oget Dropdown :Item) {:on-click save-file-as} strings/SAVE-AS]
         [:> (oget Dropdown :Item) {:on-click load-file} strings/LOAD]
         [:> (oget Dropdown :Item) {:on-click options} strings/OPTIONS]
         [:> (oget Dropdown :Item) {:on-click #(swap! menu conj :wipe)}
          strings/NEW-PROJECT]
         [:> (oget Dropdown :Item) {:on-click deps} strings/DEPENDENCIES]
         [:> (oget Dropdown :Item) {:on-click #(swap! menu conj :import)}
          strings/IMPORT-PROJECT]
         [:> (oget Dropdown :Item) {:on-click export-project}
          strings/EXPORT-PROJECT]
         [:> (oget Dropdown :Item) {:on-click #(swap! menu conj :splash)}
          strings/ABOUT]]]
       [:> Col
        [:> Container {:class-name "d-none d-sm-block"
                       :fluid true
                       :overflow "hidden"
                       ;;:text-overflow "ellipsis"
                       }
         file-name]]
       [:> Col {:xs "auto"
                :style {:padding-right 0}}
        [:> Dropdown {:as ButtonGroup
                      :size "sm"}
         [:> Button {:variant (if @running? "warning" "success")
                     :on-click run+pause}
          (if @running? strings/PAUSE strings/RUN)]
         [:> (oget Dropdown :Toggle) {:split true}]
         [:> (oget Dropdown :Menu)
          [:> (oget Dropdown :Item) strings/STOP]
          [:> (oget Dropdown :Item) {:on-click do-insert-visr}
           strings/INSERT-VISR]]]]]]
     [:div {:className "d-none d-md-block"}
      [:> Row {:className "align-items-center"
               :style {:margin-left 0
                       :margin-right 0}}
       [:> Col {:xs "auto"
                :style {:padding-left 0}}
        [:> ButtonGroup
         [:> Button {:on-click new-file} strings/NEW]
         [:> SplitButton
          {:title strings/SAVE
           :on-click save-file}
          [:> (oget Dropdown :Item) {:on-click save-file-as} strings/SAVE-AS]]
         [:> Button {:on-click load-file} strings/LOAD]
         [:> DropdownButton {:as ButtonGroup
                             :title strings/PROJECT}
          [:> (oget Dropdown :Item) {:on-click #(swap! menu conj :wipe)}
           strings/NEW-PROJECT]
          [:> (oget Dropdown :Item) {:on-click deps} strings/DEPENDENCIES]
          [:> (oget Dropdown :Item) {:on-click #(swap! menu conj :import)}
           strings/IMPORT-PROJECT]
          [:> (oget Dropdown :Item) {:on-click export-project}
           strings/EXPORT-PROJECT]
          [:> (oget Dropdown :Item) {:on-click #(swap! menu conj :splash)}
           strings/ABOUT]]
         [:> Button {:on-click options} strings/OPTIONS]]]
       [:> Col [:> Container file-name]]
       [:> Col {:xs "auto"
                :style {:paddingRight 0}}
        [:> ButtonGroup
         [:> Button {:on-click do-insert-visr
                     :variant "info"}
          strings/INSERT-VISR]
         [:> Button {:on-click run+pause
                     :variant (if @running? "warning" "success")}
          (if @running? strings/PAUSE strings/RUN)]
         [:> Button {:variant "danger"} strings/STOP]]]]]]))

(defn editor-view [{:keys [menu input output options file-changed
                           current-file fs visr-commit! insert-visr! cursor scroll]
                    :as db}
                   & [{editor-ref :editor
                       editor-reset-ref :editor-reset
                       visr-run-ref :visr-run}]]
  (let [edit (atom nil)
        cache (atom nil)
        visrs (atom {})
        set-text (fn [txt]
                   (let [c @cursor
                         s @scroll
                         cm @edit]
                     (-> @edit (ocall :getDoc) (ocall :setValue txt))
                     (-> cm (ocall :getDoc) (ocall :setCursor c))
                     (-> cm (ocall :scrollTo (:x s) (:y s)))))
        mounted? (clojure.core/atom false)
        watch-updater (fn [k r o n]
                        (when (and @edit (not= o n))
                          (let [fc @file-changed]
                            (-> @edit (ocall :getDoc) (ocall :setValue @input))
                            (reset! cache nil)
                            (reset! file-changed fc))))
        reset-queue (clojure.core/atom #queue [])]
    (add-watch current-file ::editor-view watch-updater)
    (add-watch menu ::editor-view watch-updater)
    (reset! visr-commit!
            (doseq [[k v] @visrs]
              ((:commit! v))))
    (reset! insert-visr!
            #(let [doc (ocall @edit :getDoc)
                   pos (ocall doc :getCursor)]
               (ocall doc :replaceRange stdlib/starter-visr pos)))
    (fn [{:keys [menu input options file-changed current-file cursor scroll cm-ref]
          :as db}
         & [{editor-ref :editor
             editor-reset-ref :editor-reset
             visr-run-ref :visr-run}]]
      @current-file
      @menu
      (when (not= @edit nil)
        (oset! (ocall @edit :getWrapperElement) :style.fontSize
               (str @(:font-size options) "px"))
        (ocall @edit :refresh))
      [:> cm/UnControlled
       {:options (env/codemirror-options db)
        :onChange (fn [this operation value]
                    (reset! file-changed true)
                    (reset! input value)
                    (when editor-reset-ref
                      (reset! editor-reset-ref true))
                    (env/reset-editors! @input set-text edit visrs operation
                                        cache reset-queue db
                                        #(when editor-reset-ref
                                           (reset! editor-reset-ref false))
                                        visr-run-ref))
        :onCursor (fn [editor data]
                    (reset! cursor data))
        :onScroll (fn [editor data]
                    (reset! scroll {:x (oget data :left) :y (oget data :top)}))
        :onKeyUp (fn [this e]
                   ;;(js/console.log (oget e :keyCode))
                   (when (and (= "auto" @(:autocomplete options))
                              (not (-> this .-state .-completionActive))
                              (not (contains? #{8 9 13 16 18 27 37 38 39 40 48 221}
                                              (oget e :keyCode))))
                     (ocall codemirror/commands :autocomplete this nil
                            #js {:completeSingle false})))
        :onKeyDown (fn [this e]
                     (when (and (= (oget e :key) "r") (oget e :ctrlKey))
                       (.preventDefault e)
                       (reset! output #queue [])
                       (env/eval-buffer db)))
        :editorDidMount (fn [e]
                          (let [fc @file-changed]
                            (-> e (ocall "getDoc") (ocall "setValue" @input))
                            (reset! file-changed fc))
                          (reset! edit e)
                          (reset! cm-ref e)
                          (when editor-ref
                            (reset! editor-ref e))
                          (when editor-reset-ref
                            (reset! editor-reset-ref true))
                          (env/reset-editors! @input set-text edit visrs nil
                                              cache reset-queue db
                                              (fn []
                                                (reset! mounted? true)
                                                (when editor-reset-ref
                                                  (reset! editor-reset-ref false)))
                                              visr-run-ref))}])))

(defn result-view [{:keys [output options]
                    :as db}
                   & [repl-ref]]
  (let [edit (atom nil)
        instances (atom [])
        watch-updater
        (fn [k r o n]
          (when (and @edit (not= o n))
            (-> @edit (ocall "getDoc")
                (ocall "setValue"
                       (str (string/join "\n" (filter string? n))
                            db/end-prompt)))
            (doseq [i @instances]
              (ocall i :clear))
            (loop [line 0
                   out n]
               (let [[i & rest] out]
                 (cond
                   (string? i)
                   (recur (+ line (-> i (.split #"\r\n|\r|\n") .-length)) rest),
                   (vector? i)
                   (let [element (.createElement js/document "div")]
                     (d/render [env/styled-frame i] element)
                     (swap! instances conj
                            (-> @edit (ocall "getDoc")
                                (ocall "addLineWidget" (max 0 (dec line)) element)))
                     (recur (inc line) rest)))))))]
    (add-watch output ::result-view watch-updater)
    (fn [{:keys [output options]
        :as db}
       & [repl-ref]]
      (when (not= @edit nil)
        (oset! (ocall @edit "getWrapperElement") "style.fontSize"
               (str @(:font-size options) "px"))
        (ocall @edit "refresh"))
      [:> cm/UnControlled
       {:value (string/join "\n" (filter string? @output))
        :options (conj (env/codemirror-options db)
                       {:lineNumbers false
                        :readOnly true})
        :onKeyDown (fn [this e]
                     (when (and (= (oget e :key) "r") (oget e :ctrlKey))
                       (.preventDefault e)
                       (reset! output #queue [])
                       (env/eval-buffer db)))
        :editorDidMount #(do
                           (when repl-ref
                             (reset! repl-ref %))
                           (reset! edit %))}])))


;; -------------------------
;; Views

(defn home-page [{{:keys [orientation]} :options
                  :keys [fs buffers output version menu split]
                  :as db}
                 & [{editor-ref :editor
                     editor-reset-ref :editor-reset
                     repl-ref :repl
                     visr-run-ref :visr-run
                     :as opts}]]
  (let [search (js/URLSearchParams. js/window.location.search)]
    (chonky/setChonkyDefaults
     #js {:iconComponent chonky-icon-fontawesome/ChonkyIconFA})
    (set! codemirror/commands.save #(save-file db))
    (set! js/window.CodeMirror codemirror)
    (set! codemirror/hint.clojure
          #(let [pos (ocall % :getCursor)
                 base (ocall codemirror/hint :fromList %
                             #js {:words (oget codemirror/hintWords :clojure)})
                 near (ocall codemirror/hint :anyword %)
                 from (cond base (oget base :from)
                            near (oget near :from)
                            :else pos)
                 to (cond base (oget base :to)
                          near (oget near :to)
                          :else pos)
                 base (if base (oget base :list) #js [])
                 near (if near (oget near :list) #js [])]
             #js {:from from :to to
                  :list (.concat near base)}))
    (when-not (= @version db/version)
      (db/reset-db! db)
      (when-not (or (.get search "hide-splash") (= (peek @menu) :splash))
        (swap! menu conj :splash))
      (reset! version db/version))
    [:main {:role "main"
            :style {:height "100%"
                    :display "flex"
                    :flex-flow "column"}}
     [:> GlobalHotKeys
      {:keyMap {:save-file "ctrl+s"
                :run-program "ctrl+r"}
       :handlers {:save-file (fn [v]
                               (.preventDefault v)
                               (save-file db))
                  :run-program (fn [v]
                                 (.preventDefault v)
                                 (reset! output #queue [])
                                 (env/eval-buffer db))}}]
     [splash-dialog db]
     [new-file-action db]
     [save-dialog db opts]
     [load-dialog db opts]
     [import-dialog db]
     [confirm-wipe-dialog db]
     [options-dialog db]
     [confirm-save-dialog db]
     [new-folder-dialog db]
     [deps-dialog db]
     [hold-dialog db]
     [error-dialog db]
     [:div {:style {:flex "0 1 auto"}}
      [button-row db]]
     (if (= (count @buffers) 1)
       [:div {:style {:flex "1 1 auto"
                      :overflow "auto"}}
        [:> SplitPane {:split @orientation
                       :on-change #(reset! split (aget % 0))}
         [:> Pane {:initialSize @split
                   :style [:height "100%"]}
          [editor-view db {:editor-reset editor-reset-ref
                           :editor editor-ref
                           :visr-run visr-run-ref}]]
         [result-view db repl-ref]]]
       [:div {:style {:flex "1 1 auto"
                      :overflow "auto"
                      :height "100%"
                      :display "flex"
                      :flex-flow "column"}}
        [:> Tabs {:defaultActiveKey "1"}
         [:> Tab {:eventKey "1"
                  :title "Test"}
          [:> SplitPane {:split @orientation}
           [editor-view db {:editor-reset editor-reset-ref
                            :editor editor-ref
                            :visr-run visr-run-ref}]
           [result-view db repl-ref]]]]])]))

;; -------------------------
;; Initialize app

(defn mount-root [& [{:keys [debug]}]]
  (let [search (js/URLSearchParams. js/window.location.search)
        url (.get search "get-state-from")
        id (or (.get search "send-state-id") (random-uuid))
        send-state-url (.get search "send-state-to")
        msg-counter (atom 1)]
    (cb-thread
     #(if url
        (GET url {:handler %})
        (%))
     #(if url
        (let [{:keys [zip db]} (t/read (t/reader :json) %2)]
          (cb-thread
           #(default-db :temp % db)
           (fn [n db] (fs/import-from-zip db zip (fn [] (% db))))))
        (default-db :local %))
     #(if send-state-url
        (fs/state->serializable %2 (fn [res] (% %2 res)))
        (% %2))
     (fn [next {:keys [fs menu backing] :as db} & [serialized-state]]
       (when debug
         (set! js/window.git isomorphic-git)
         (set! js/window.db db)
         (set! js/window.fs fs)
         (set! js/window.isohttp isohttp)
         (set! js/window.captureState #(fs/capture-state! db %)))
       (when (= (peek @menu) :hold)
         (swap! menu pop))
       (when send-state-url
         (POST send-state-url {:params {:id id
                                        :number 0
                                        :msg serialized-state}})
         (add-watch backing ::state-changed
                    (fn [k r o n]
                      (when-not (= o n)
                        (POST send-state-url {:params {:id id
                                                       :number @msg-counter
                                                       :msg n}})
                        (swap! msg-counter inc)))))
       (d/render [home-page db] (.getElementById js/document "app"))))))

(defn init! [& [opts]]
  (mount-root opts))

