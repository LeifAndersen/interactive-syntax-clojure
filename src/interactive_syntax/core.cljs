(ns interactive-syntax.core
    (:require
     [reagent.core :as r :refer [atom]]
     [reagent.dom :as d]
     [clojure.string :as string]
     [cljs.pprint :refer [pprint]]
     [cljs.core.match :refer [match]]
     [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                        oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]
     [interactive-syntax.db :as db :refer [files-root]]
     [interactive-syntax.strings :as strings]
     [interactive-syntax.env :as env]
     [interactive-syntax.stdlib :as stdlib]
     [popper.js]
     [bootstrap]
     [alandipert.storage-atom :as storage]
     [react-bootstrap :refer [Button ButtonGroup ButtonToolbar SplitButton
                              Dropdown DropdownButton Tabs Tab
                              Row Col Form Container Modal
                              Table Spinner]]
     [react-hotkeys :refer [GlobalHotKeys]]
     [codemirror]
     ["@leifandersen/react-codemirror2" :as cm]
     [crypto-browserify]
     ["codemirror/mode/clojure/clojure"]
     ["codemirror/keymap/vim"]
     ["codemirror/keymap/emacs"]
     ["codemirror/keymap/sublime"]
     ["codemirror/addon/search/searchcursor"]
     [browserfs]
     [base64-js]
     [react-split-pane :refer [Pane]]
     [react-switch]
     [react-dnd :refer [DndProvider]]
     [react-dnd-html5-backend :refer [HTML5Backend]]
     [chonky :refer [ChonkyActions]]
     [chonky-icon-fontawesome]))

;; -------------------------
;; Components
(def ^:private SplitPane (.-default react-split-pane))
(def ^:private Switch (.-default react-switch))

(defn deps-dialog [{:keys [deps-env deps menu] :as db}]
  (reset! deps-env nil)
  (let [new-deps (atom @deps)]
    (fn [{:keys [deps menu] :as db}]
      [:> Modal {:show (= (peek @menu) :deps)
                 :size "xl"
                 :on-hide (fn []
                            (swap! menu pop)
                            (reset! new-deps @deps))}
       [:> Modal.Header {:close-button true}
        [:h3 strings/DEPENDENCIES]]
       [:> Modal.Body
        [:> Form {:onSubmit #(do (.preventDefault %)
                                 (.stopPropagation %))}
         [:> Table {:striped true
                    :bordered true
                    :hover true
                    :responsive true
                    :size "sm"}
          [:thead
           [:tr
            [:th strings/NAME]
            [:th (str strings/VERSION " " strings/OPTIONAL)]
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
                [:td [:> (oget Form :Control) {:on-change (on-change :version)
                                               :aria-label strings/VERSION
                                               :value (:version package)}]]
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
                                   (reset! deps-env nil)
                                   (env/setup-deps db true)
                                   (swap! menu pop))}
            strings/UPDATE]]]]]])))

(defn hold-dialog [{:keys [menu]
                    :as db}]
  [:> Modal {:show (= (peek @menu) :hold)
             :size "xl"}
   [:> (oget Modal :Body)
    [:> Spinner {:animation "modal"
                 :role "status"}
     "Processing..."]]])

;; -------------------------
;; File Dialogs

(defn filepath->id [filepath]
  (-> crypto-browserify
      (.createHash "sha1")
      (.update filepath)
      (.digest "base64")))


(defn recursive-rm [fs dir cb]
  (ocall fs :readdir dir
         (fn [err files]
           ((fn rec [files cb]
              (if (empty? files)
                (cb)
                (let [fullpath (js/path.join dir (first files))]
                  (ocall fs :stat fullpath
                         (fn [err stats]
                           (if (ocall stats :isDirectory)
                             (recursive-rm fs fullpath #(rec (rest files) cb))
                             (ocall fs :unlink fullpath
                                    #(rec (rest files) cb))))))))
            files
            #(ocall fs :rmdir dir cb)))))


(defn file-description [fs filepath cb]
  (ocall fs :stat filepath
         (fn [err stats]
           (cond-> {:id (filepath->id filepath)
                    :name (js/path.basename filepath)
                    :isDir (ocall stats :isDirectory)
                    :modDate stats.ctime}
             (= (.charAt filepath 0) ".") (assoc :isHidden true)
             (ocall stats :isSymbolicLink) (assoc :isSymlink true)
             (not (ocall stats :isDirectory)) (assoc :size (oget stats :size))
             :always clj->js
             :always cb))))

(defn save-buffer [{:keys [fs menu current-folder current-file input
                           file-changed visr-commit!]
                    :as db}]
  (swap! menu conj :hold)
  (when @visr-commit!
    (@visr-commit!))
  (ocall fs :writeFile (js/path.join @current-folder @current-file) @input
         (fn [err res]
           (reset! file-changed false)
           (swap! menu pop))))

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
                      (save-buffer db)
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
                    & [ref]]
  (let [text (atom "")
        dir-list (atom [nil])
        populate-dir-list (fn []
                            (ocall fs :readdir @file-browser-folder
                                   (fn [err files]
                                     ((fn rec [acc rst]
                                        (if (empty? rst)
                                          (reset! dir-list acc)
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
         & [ref]]
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
                        (oget ChonkyActions :DeleteFiles)
                        (oget ChonkyActions :UploadFiles)
                        (oget ChonkyActions :DownloadFiles)
                        (oget ChonkyActions :CopyFiles)]
         :on-file-action
         (fn [data-js]
           (let [{id "id"
                  action "action"
                  payload "payload"
                  state "state"
                  :as data}
                 (js->clj data-js)
                 begin-transaction #(swap! menu conj :hold)
                 end-transaction #(swap! menu pop)]
             ;;(js/console.log data)
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
               (oget ChonkyActions :ClearSelection.id) (swap! menu pop),
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
                          (if (get-in f ["isDir"])
                            (recursive-rm fs name #(rec (rest files)))
                            (ocall fs :unlink name #(rec (rest files)))))))
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
                   & [ref]]
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
      ref]]))

(defn load-dialog [{:keys [menu
                           file-browser-folder
                           current-folder
                           current-file]
                    :as db}
                   & [ref]]
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
     ref]]])

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
                               font-size
                               theme]} :options
                       :keys [menu]}]
  [:> Modal {:show (= (peek @menu) :options)
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
               [option-button keymap "vim" "Vim"]
               [option-button keymap "emacs" "Emacs"]
               [option-button keymap "sublime" "Sublime"]]]]
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
        [option-button theme "material" strings/DARK]]]]]]
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
                          insert-visr!]
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
        do-insert-visr #(when @insert-visr!
                          (@insert-visr!))
        run+pause #(let []
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
         [:> (oget Dropdown :Item) strings/NEW-PROJECT]
         [:> (oget Dropdown :Item) {:on-click deps} strings/DEPENDENCIES]
         [:> (oget Dropdown :Item) strings/IMPORT-PROJECT]
         [:> (oget Dropdown :Item) strings/EXPORT-PROJECT]]]
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
          [:> (oget Dropdown :Item) strings/NEW-PROJECT]
          [:> (oget Dropdown :Item) {:on-click deps} strings/DEPENDENCIES]
          [:> (oget Dropdown :Item) strings/IMPORT-PROJECT]
          [:> (oget Dropdown :Item) strings/EXPORT-PROJECT]]
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
                           current-file fs visr-commit! insert-visr!]
                    :as db}
                   & [editor-ref]]
  (let [edit (atom nil)
        editors (atom {})
        set-text (fn [txt]
                   (-> @edit (ocall :getDoc) (ocall :setValue txt)))
        watch-updater (fn [k r o n]
                        (when (and @edit (not= o n))
                          (let [fc @file-changed]
                            (-> @edit (ocall :getDoc) (ocall :setValue @input))
                            (reset! file-changed fc))))]
    (add-watch current-file ::editor-view watch-updater)
    (add-watch menu ::editor-view watch-updater)
    (reset! visr-commit!
            #(doseq [[k v] @editors]
               ((:commit! v))))
    (reset! insert-visr!
            #(let [doc (ocall @edit :getDoc)
                   pos (ocall doc :getCursor)]
               (ocall doc :replaceRange stdlib/empty-visr pos)))
    (fn [{:keys [menu input options file-changed current-file]
          :as db}
         & [editor-ref]]
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
                    (env/reset-editors!
                     input set-text edit editors operation db))
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
                          (when editor-ref
                            (reset! editor-ref e))
                          (env/reset-editors!
                           input set-text edit editors nil db))}])))

(defn result-view [{:keys [output options]
                    :as db}
                   & [repl-ref]]
  (let [edit (atom nil)
        instances (atom [])
        watch-updater
        (fn [k r o n]
          (when (and @edit (not= o n))
            (-> @edit (ocall "getDoc")
                (ocall "setValue" (string/join "\n" (filter string? n))))
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
                     (d/render i element)
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
                  :keys [fs buffers output]
                  :as db}
                 & [{editor-ref :editor
                     repl-ref :repl
                     save-fb-ref :save-file-browser
                     load-fb-ref :load-file-browser}]]
  (set! js/window.db db) ; <-- XXX For debugging, should remove
  (set! js/window.fs fs) ; <-- XXX For debugging, should remove
  (chonky/setChonkyDefaults
   #js {:iconComponent chonky-icon-fontawesome/ChonkyIconFA})
  (set! codemirror/commands.save #(save-file db))
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
   [new-file-action db]
   [save-dialog db save-fb-ref]
   [load-dialog db load-fb-ref]
   [options-dialog db]
   [confirm-save-dialog db]
   [new-folder-dialog db]
   [deps-dialog db]
   [hold-dialog db]
   [:div {:style {:flex "0 1 auto"}}
    [button-row db]]
   (if (= (count @buffers) 1)
     [:div {:style {:flex "1 1 auto"}}
      [:> SplitPane {:split @orientation}
       [editor-view db editor-ref]
       [result-view db repl-ref]]]
     [:div {:style {:flex "1 1 auto"
                    :height "100%"
                    :display "flex"
                    :flex-flow "column"}}
      [:> Tabs {:defaultActiveKey "1"}
       [:> Tab {:eventKey "1"
                :title "Test"}
        [:> SplitPane {:split @orientation}
         [editor-view db editor-ref]
         [result-view db repl-ref]]]]])])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render
   [home-page (db/default-db :local)]
   (.getElementById js/document "app")))

(defn init! []
  (mount-root))

