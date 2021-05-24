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
     [cljs.js :as cljs :refer [empty-state js-eval *loaded*]]
     [cljs.pprint :refer [pprint]]
     [cljs.core.match :refer [match]]
     [interactive-syntax.db :as db]
     [interactive-syntax.strings :as strings]
     [interactive-syntax.fakegoog :as fakegoog]
     [jquery]
     [popper.js]
     [bootstrap]
     [alandipert.storage-atom :as storage]
     [react-bootstrap :refer [Button ButtonGroup SplitButton
                              Dropdown DropdownButton Tabs Tab
                              Row Col Form Container Modal]]
     [react-hotkeys :refer [GlobalHotKeys]]
     [codemirror]
     [react-codemirror2 :as cm]
     ["codemirror/mode/clojure/clojure"]
     ["codemirror/keymap/vim"]
     ["codemirror/keymap/emacs"]
     ["codemirror/keymap/sublime"]
     ["codemirror/addon/search/searchcursor"]
     ["@stopify/higher-order-functions" :as hof]
     ["@babel/parser" :as babylon]
     ["@babel/template" :as babel-template]
     [browserfs]
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
(def ^:private template (.-default babel-template))

(defn print-res [{:keys [output]
                  :as db}
                 res]
  (binding [*print-fn* #(swap! output conj %)]
    (cond
      (contains? res :error) (println (:error res))
      (contains? res :value)
      (when (get-in res [:value :value])
        (println (get-in res [:value :value]))))))


;; -------------------------
;; Package Manager

;; XXX There is a 100% chance of some injection attack here.
(defn get-package [{:keys [url name version]} cb]
  (let [req (js/XMLHttpRequest.)
        url (or url (str "https://unpkg.com/" name))]
    (.addEventListener req "load" #(-> % .-target .-responseText cb))
    (.open req "GET" url)
    (.send req)))

(defn setup-packages [db force-update]
  nil)

;; -------------------------
;; Evaluator

(defn sandbox-env [runner]
  {:cljs js/cljs
   :goog {:provide (partial fakegoog/prov runner)
          :require (partial fakegoog/req runner)}
   :console js/console
   :navigator js/navigator
   :document js/document
   :window js/window
   :String js/String
   :Object js/Object
   :Function js/Function
   :Array js/Array
   :Math js/Math
   :$stopifyArray js/stopifyArray})

(defn ns->string [fs {:keys [name macros path]} cb]
  (letfn  [(rec [extensions]
             (if (empty? extensions)
               (cb nil)
               (let [file-path (str "/" path "." (first extensions))]
                 (.readFile
                  fs
                  file-path
                  (fn [err data]
                    (if err
                      (rec (rest extensions))
                      (cb {:lang (if (= (first extensions)
                                        "js")
                                   :js
                                   :clj)
                           :source (.toString data)
                           :file file-path})))))))]
    (rec (if macros
           ["clj" "cljc"]
           ["cljs" "cljc" "js"]))))

(defn eval-opts [fs runner print-fn sandbox?]
  {:eval (if sandbox?
           (fn [{:keys [source name cache]} cb]
             (binding [*print-fn* print-fn]
               (let [ast (babylon/parse source)
                     polyfilled (hof/polyfillHofFromAst ast)]
                 (.evalAsyncFromAst runner polyfilled cb))))
           cljs.js/js-eval)
   :load (partial ns->string fs)
   :source-map true})

(defn eval-str [src
                {:keys [env
                        fs
                        loaded
                        lang
                        file-name
                        print-fn
                        runner
                        sandbox]}
                cb]
  (let [resume (and runner true)
        sandbox (if (nil? sandbox) true sandbox)
        old-loaded @*loaded*
        runner (or runner (js/stopify.stopifyLocally ""))
        globs (clj->js (cond
                         (fn? env) (env runner)
                         env env
                         :else (sandbox-env runner)))
        loaded (cond
                 (coll? loaded) (atom loaded)
                 (= nil loaded) (atom #{})
                 :else loaded)
        file-name (or file-name strings/UNTITLED)
        print-fn (or print-fn #())
        opts (eval-opts fs runner print-fn sandbox)
        lang (or lang :clj)
        cb (fn [res]
             (swap! loaded into @*loaded*)
             (reset! *loaded* old-loaded)
             (cb res))]
    (when-not resume
      (set! runner.g globs)
      (.run runner #()))
    (try
      (reset! *loaded* @loaded)
      (condp = lang
        :clj (cljs/eval-str (empty-state) src file-name opts cb)
        :js ((:eval opts) {:source src :name file-name} cb))
      {:runner runner
       :loaded loaded}
      (catch :default e
        (reset! *loaded* old-loaded)))))

(defn eval-buffer [{:keys [input
                           output
                           file-name
                           fs]
                    :as db}
                   & [callback]]
  (let [cb (or callback
               #(print-res db %))
        {:keys [runner loaded]} (eval-str @input
                                          {:env sandbox-env
                                           :fs fs
                                           :file-name file-name
                                           :print-fn #(swap! output conj %)}
                                          cb)]
    (reset! (:runner db) runner)))

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

(defn save-buffer [{:keys [fs current-folder current-file input file-changed]
                    :as db}]
  (fs.writeFileSync (js/path.join @current-folder @current-file) @input)
  (reset! file-changed false))

(defn load-buffer [{:keys [fs current-folder current-file input file-changed]
                    :as db}]
  (reset! input (-> (js/path.join @current-folder @current-file)
                    fs.readFileSync
                    .toString))
  (reset! file-changed false))

(defn make-control-dialog [menu key title confirm action]
  (let [text (atom "")]
    (fn []
      [:> Modal {:show (= (peek @menu) key)
                 :on-hide #(swap! menu pop)}
       [:> Modal.Header {:close-button true}
        [:h3 title]]
       [:> Modal.Body
        [:> Form {:onSubmit #(do (.preventDefault %)
                                 (.stopPropagation %)
                                 (confirm))}
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

(defn new-folder-dialog [{:keys [fs menu current-folder]
                          :as db}]
  (make-control-dialog menu :new-folder strings/NEW strings/CREATE
                       (fn [text]
                         (fn []
                           (when (not= @text "")
                             (let [new-path (js/path.join @current-folder @text)]
                               (fs.mkdir new-path)
                               (reset! current-folder new-path))
                             (swap! menu pop))))))

(defn confirm-save-dialog [{:keys [menu current-file]
                            :as db}]
  (let [item (peek @menu)]
    [:> Modal {:show (and (coll? item) (= (first item) :confirm-save))
               :on-hide #(swap! menu pop)}
     [:> Modal.Header {:close-button true}
      [:h3 strings/UNSAVED-CHANGES]]
     [:> Modal.Footer
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
                            current-folder
                            current-file
                            options]
                     :as db}
                    choice-text
                    choice-callback
                    & [ref]]
  (let [text (atom "")
        confirm-action (fn []
                         (when (not= @text "")
                           (choice-callback @text)
                           (swap! menu #(let [item (peek %)
                                              rest (pop %)]
                                          (if (and (coll? item)
                                                   (= (count item) 2))
                                            (conj rest (second item))
                                            rest)))))]
    [:div {:style #js {:height "450px"}}
     [:> chonky/FileBrowser
      {:enable-drag-and-drop @(:enable-drag-and-drop options)
       :disable-drag-and-drop-provider true
       :ref (or ref #js {:current nil})
       :files (for [file (fs.readdirSync @current-folder)]
                (file-description fs (js/path.join @current-folder file)))
       :folder-chain (let [split (filter (partial not= "")
                                         (.split @current-folder js/path.sep))]
                       (for [[i folder] (map list (range) (conj split " "))]
                         #js {:id (str "folder" i)
                              :breadCrumb (- (count split) i)
                              :name folder}))
       :file-actions [ChonkyActions.CreateFolder
                      ChonkyActions.DeleteFiles
                      ChonkyActions.UploadFiles
                      ChonkyActions.DownloadFiles
                      ChonkyActions.CopyFiles]
       :on-file-action
       (fn [data-js]
         (let [{id "id"
                action "action"
                payload "payload"
                :as data}
               (js->clj data-js)]
           (condp = id
             ChonkyActions.OpenParentFolder.id nil,
             ChonkyActions.CreateFolder.id
             (swap! menu conj :new-folder),
             ChonkyActions.OpenFiles.id
             (cond
               (contains? (get-in payload ["targetFile"])
                          "breadCrumb")
               (swap! current-folder
                      #(apply js/path.join
                              (conj
                               (for [i
                                     (range
                                      (get-in payload ["targetFile" "breadCrumb"]))]
                                 "..")
                               %))),
               (get-in payload ["targetFile" "isDir"])
               (swap! current-folder
                      #(js/path.join % (get-in payload ["targetFile" "name"]))),
               :else (do
                       (reset! text (get-in payload ["targetFile" "name"]))
                       (confirm-action))),
             ChonkyActions.ClearSelection.id
             (swap! menu pop),
             ChonkyActions.ChangeSelection.id
             nil,
             (println data))))}
      [:> Form {:onSubmit #(do (.preventDefault %)
                               (.stopPropagation %)
                               (confirm-action))}
       [:> Form.Group {:as Row}
        [:> Col {:xs "auto"}
         [:> Form.Label {:column true}
          strings/FILE]]
        [:> Col {:xs 10}
         [:> Form.Control {:on-change #(reset! text (-> % .-target .-value))}]]
        [:> Col {:xs "auto"}
         [:> Button
          {:on-click
           #(confirm-action)}
          choice-text]]]]
      [:> chonky/FileNavbar]
      [:> chonky/FileToolbar]
      [:> chonky/FileList]]]))

(defn save-dialog [{:keys [menu current-file]
                    :as db}]
  (let [item (peek @menu)]
    [:> Modal {:show (and (coll? item) (= (first item) :save))
               :size "xl"
               :on-hide #(swap! menu pop)}
     [:> Modal.Header {:close-button true}
      [:h3 strings/SAVE]]
     [file-browser db strings/SAVE
      (fn [file]
        (reset! current-file file)
        (save-buffer db))]]))

(defn load-dialog [{:keys [menu current-file]
                    :as db}]
  [:> Modal {:show (= (peek @menu) :load)
             :size "xl"
             :on-hide #(swap! menu pop)}
   [:> Modal.Header {:close-button true}
    [:h3 strings/LOAD]]
   [:> Modal.Body
    [file-browser db strings/LOAD
     (fn [file]
       (reset! current-file file)
       (load-buffer db))]]])

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
   [:> Modal.Header {:close-button true}
    [:h3 strings/OPTIONS-MENU]]
   [:> Modal.Body
    [:> Form {:onSubmit #(do (.preventDefault %)
                              (.stopPropagation %))}
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 (str strings/VISUAL-EDITORS ":")]]
      [:> Col [:> Switch {:checked @show-editors
                          :on-change #(reset! show-editors %)}]]]
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 (str strings/SPLIT ":")]]
      [:> Col [:> ButtonGroup {:aria-label strings/SPLIT}
               [option-button orientation "horizontal" strings/HORIZONTAL]
               [option-button orientation "vertical" strings/VERTICAL]]]]
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 (str strings/KEYMAP ":")]]
      [:> Col [:> ButtonGroup {:aria-label strings/KEYMAP}
               [option-button keymap "vim" "Vim"]
               [option-button keymap "emacs" "Emacs"]
               [option-button keymap "sublime" "Sublime"]]]]
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 (str strings/FONT-SIZE ":")]]
      [:> Col [:> Row [:> Col {:xs "auto"}
                       [:> Button {:on-click #(swap! font-size dec)}
                        "-"]]
        [:> Col {:xs 4}
         [:> Form.Control
          {:on-change #(let [value (js/parseInt (-> % .-target .-value))]
                         (when-not (js/isNaN value)
                           (reset! font-size (max 1 value))))
           :value @font-size}]]
        [:> Col {:xs "auto"}
         [:> Button {:on-click #(swap! font-size inc)}
          "+"]]]]]
     [:> Form.Group {:as Row}
      [:> Form.Label {:column true}
       [:h4 (str strings/THEME ":")]]
      [:> Col [:> ButtonGroup {:aria-label strings/THEME}
               [option-button theme "neat" strings/LIGHT]
        [option-button theme "material" strings/DARK]]]]]]
   [:> Modal.Footer
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
                          runner]
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
        file-name (str (if @current-file
                         (js/path.join @current-folder @current-file)
                         strings/UNTITLED)
                       (if @file-changed
                         "*"
                         ""))
        run #(let []
               (reset! output #queue [])
               (eval-buffer db))]
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
         [:> Dropdown.Item {:on-click new-file} strings/NEW]
         [:> Dropdown.Item {:on-click save-file} strings/SAVE]
         [:> Dropdown.Item {:on-click save-file-as} strings/SAVE-AS]
         [:> Dropdown.Item {:on-click load-file} strings/LOAD]
         [:> Dropdown.Item {:on-click options} strings/OPTIONS]
         [:> Dropdown.Item strings/NEW-PROJECT]
         [:> Dropdown.Item strings/IMPORT-PROJECT]
         [:> Dropdown.Item strings/EXPORT-PROJECT]]]
       [:> Col
        [:> Container {:class-name "d-none d-sm-block"
                       :fluid true
                       :overflow "hidden"
                       ;;:text-overflow "ellipsis"
                       }
         file-name]]
       [:> Col {:xs "auto"
                :style {:padding-right 0}}
        [:> SplitButton {:title strings/RUN
                         :size "sm"
                         :on-click run}
         [:> Dropdown.Item strings/STOP]]]]]
     [:div {:className "d-none d-md-block"}
      [:> Row {:className "align-items-center"
               :style {:margin-left 0
                       :margin-right 0}}
       [:> Col {:xs "auto"
                :style {:padding-left 0}}
        [:> Button {:on-click new-file} strings/NEW]
        [:> SplitButton
         {:title strings/SAVE
          :on-click save-file}
         [:> Dropdown.Item {:on-click save-file-as} strings/SAVE-AS]]
        [:> Button {:on-click load-file} strings/LOAD]
        [:> DropdownButton {:as ButtonGroup
                            :title strings/PROJECT}
         [:> Dropdown.Item strings/NEW-PROJECT]
         [:> Dropdown.Item strings/IMPORT-PROJECT]
         [:> Dropdown.Item strings/EXPORT-PROJECT]]
        [:> Button {:on-click options} strings/OPTIONS]]
       [:> Col [:> Container file-name]]
       [:> Col {:xs "auto"
                :style {:paddingRight 0}}
        [:> Button {:on-click run} strings/RUN]
        [:> Button strings/STOP]]]]]))

(defn mk-editor [{:keys [component]
                  :as data}
                 stx runner loaded fs cb]
  (cond
    (map? component)
    (ns->string
     fs (:ns component)
     (fn [src]
       (let [src (if src (:source src) "")
             ret (eval-str src
                           {:runner runner
                            :loaded @loaded
                            :fs fs}
                           #(cb [:> Button "Test"]))]
         (reset! loaded (:loaded ret)))))
    (vector? component)
    (eval-str (str component)
              {:runner runner
               :loaded loaded
               :fs fs}
              (fn [ret]
                (cb
                 (cond
                   (:value ret) (.-value (:value ret))
                   :else ret))))
    :else (throw "TODO")))

(defn reset-editors! [s editor instances options operation fs]
  (doseq [[tag i] @instances]
    (do (when (:widget i) (.clear (:widget i)))
        (.clear (:range i))))
  (reset! instances {})
  (when (and @(:show-editors options) @editor)
    (let [prog (indexing-push-back-reader s)
          eof (atom nil)
          {:keys [runner loaded]}
          (eval-str
           ""
           {:env #(conj (sandbox-env %)
                        {:reagent.core js/reagent.core
                         :reagent.dom js/reagent.dom
                         :react_bootstrap
                         js/interactive_syntax.core.node$module$react_bootstrap})
            :loaded #{'reagent.core 'reagent.dom}
            :fs fs}
           #())]
      (try
        (loop [tag 0]
          (let [form (try (read {:eof eof} prog)
                          (catch js/Error e
                            (ex-info (.-message e)
                                     {:line (.-lineNumber e)
                                      :char (.-columnNumber e)
                                      :name (.-name e)
                                      :file (.-fileName e)}
                                     :read-error)))]
            (when-not (identical? form eof)
              (when (coll? form)
                ((fn rec [form tag]
                   (let [info (meta form)]
                     (condp = (:tag info)
                       'editor
                       (let [hider (.createElement js/document "span")]
                         (d/render
                          [:> Button
                           {:size "sm"
                            :style {:padding 0
                                    :font-size "0.8em"}
                            :on-click
                            #(swap! instances update tag
                                    (fn [old] ; Note, probably not safe?
                                      (if (= (:widget old) nil)
                                        (let [element
                                              (.createElement js/document "div")]
                                          (mk-editor info form runner loaded fs
                                                     (fn [v]
                                                       (d/render v element)))
                                          (assoc old :widget
                                                 (-> @editor
                                                     (.getDoc)
                                                     (.addLineWidget
                                                      (dec (:line info))
                                                      element
                                                      false))))
                                        (do (.clear (:widget old))
                                            (assoc old :widget nil)))))}
                           "..."]
                          hider)
                         (swap! instances conj
                                {tag
                                 {:range
                                  (-> @editor
                                      (.getDoc)
                                      (.markText
                                       #js {:line (dec (:line info)),
                                            :ch (dec (:column info))}
                                       #js {:line (dec (:end-line info)),
                                            :ch (dec (:end-column info))}
                                       #js {:collapsed true
                                            :replacedWith hider}))
                                  :widget nil}}))
                       nil)
                     (doseq [e form]
                       (when (coll? e)
                         (rec e (inc tag))))))
                 form tag))
              (recur (inc tag)))))
        (catch ExceptionInfo e
          (js/console.log e))
        (catch js/Error e
          (throw e))))))

(defn editor-view [{:keys [menu input options file-changed current-file fs]
                    :as db}
                   & [editor-ref]]
  (let [edit (atom nil)
        editors (atom {})
        watch-updater (fn [k r o n]
                        (when (and @edit (not= o n))
                          (let [fc @file-changed]
                            (-> @edit .getDoc (.setValue @input))
                            (reset! file-changed fc))))]
    (add-watch current-file ::editor-view watch-updater)
    (add-watch menu ::editor-view watch-updater)
    (fn [{:keys [menu input options file-changed current-file]
          :as db}
         & [editor-ref]]
      @current-file
      @menu
      (when (not= @edit nil)
        ;(-> @edit .getDoc .getValue pprint)
        (set! (-> @edit .getWrapperElement .-style .-fontSize)
              (str @(:font-size options) "px"))
        (-> @edit .refresh))
      [:> cm/UnControlled
       {:options {:mode "clojure"
                  :keyMap @(:keymap options)
                  :theme @(:theme options)
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineWrapping @(:line-wrapping options)
                  :lineNumbers @(:line-numbers options)}
        :onChange (fn [this operation value]
                    (reset! file-changed true)
                    (reset! input value)
                    (reset-editors! value edit editors options operation fs))
        :editorDidMount #(do
                           (let [fc @file-changed]
                             (-> % .getDoc (.setValue @input))
                             (reset! file-changed fc))
                           (reset! edit %)
                           (when editor-ref
                             (reset! editor-ref %))
                           (reset-editors! @input edit editors options nil fs))}])))

(defn result-view [{:keys [output options]
                    :as db}
                   & [repl-ref]]
  (let [edit (atom nil)]
    (fn []
      (when (not= @edit nil)
        (set! (-> @edit .getWrapperElement .-style .-fontSize)
              (str @(:font-size options) "px"))
        (-> @edit .refresh))
      [:> cm/Controlled
       {:value (string/join "\n" @output)
        :options {:mode "clojure"
                  :theme @(:theme options)
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineWrapping @(:line-wrapping options)
                  :lineNumbers false}
        :editorDidMount #(do
                           (when repl-ref
                             (reset! repl-ref %))
                           (reset! edit %))}])))


;; -------------------------
;; Views

(defn home-page [{{:keys [orientation]} :options
                  :keys [fs buffers]
                  :as db}
                 & [editor-ref repl-ref]]
  (set! js/window.fs fs) ; <-- XXX For debugging, should remove
  (chonky/setChonkyDefaults
   #js {:iconComponent chonky-icon-fontawesome/ChonkyIconFA})
  (set! codemirror/commands.save #(save-file db))
  [:main {:role "main"
          :style {:height "100%"
                  :display "flex"
                  :flex-flow "column"}}
   [:> GlobalHotKeys
    {:keyMap {:save-file "ctrl+s"}
     :handlers {:save-file #(do (.preventDefault %)
                                (save-file db))}}]
   [new-file-action db]
   [save-dialog db]
   [load-dialog db]
   [options-dialog db]
   [confirm-save-dialog db]
   [new-folder-dialog db]
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
   [:> DndProvider {:backend HTML5Backend}
    [home-page (db/default-db :local)]]
   (.getElementById js/document "app")))

(defn init! []
  (mount-root))

