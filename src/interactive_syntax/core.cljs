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
      [react-bootstrap :refer [Button ButtonGroup
                               Row Col
                               Container
                               Modal Modal.Header Modal.Body Modal.Footer]]
      [codemirror]
      [react-codemirror2 :refer [Controlled UnControlled]]
      ["codemirror/mode/clojure/clojure"]
      ["codemirror/keymap/vim"]
      ["codemirror/keymap/emacs"]
      ["codemirror/keymap/sublime"]
      ["@stopify/stopify" :as stopify]
      [browserfs]
      [react-split-pane :refer [Pane]]
      [chonky :refer [FileBrowser FileList FileSearch FileToolbar]]
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
                     (let [runner (.stopifyLocally stopify (:value program))]
                       (set! (.-g runner) #js {:cljs js/cljs})
                       (.run runner
                             #(swap! output conj nil)))
                     ;;
                     (contains? program :error)
                     (pprint (-> program :error)))))))

;; -------------------------
;; Options

(defn option-button [options key type display]
  [:> Button {:variant (if (= (key @options "") type) "primary" "secondary")
              :on-click #(swap! options assoc key type)}
   display])

(defn options-dialog [options]
  [:> Modal {:show (:options-menu @options)
             :on-hide #(swap! options assoc :options-menu false)}
   [:> Modal.Header {:close-button true}]
   [:> Modal.Body
    [:> Row
     [:> Col [:h3 "Split:"]]
     [:> Col
      [:> ButtonGroup {:aria-label "Split"}
       [option-button options :orientation "horizontal" "Horizontal"]
       [option-button options :orientation "vertical" "Vertical"]]]]
    [:> Row
     [:> Col [:h3 "Keymap:"]]
     [:> Col
      [:> ButtonGroup {:aria-label "Keyamp"}
       [option-button options :key "vim" "Vim"]
       [option-button options :key "emacs" "Emacs"]
       [option-button options :key "sublime" "Sublime"]]]]
    [:> Row
     [:> Col [:h3 "Font Size:"]]
     [:> Col
      [:> Button {:on-click #(swap! options update :font-size dec)}
       "-"]
      (:font-size @options)
      [:> Button {:on-click #(swap! options update :font-size inc)}
       "+"]]]
    [:> Row
     [:> Col [:h3 "Theme:"]]
     [:> Col
      [:> ButtonGroup {:aria-label "Theme"}
       [option-button options :theme "neat" "Light"]
       [option-button options :theme "material" "Dark"]]]]]
   [:> Modal.Footer
    [:> Button {:variant "primary"
                :on-click #(swap! options assoc :options-menu false)}
     "Close"]]])

;; -------------------------
;; Editor

(defn button-row [input output options]
  (let []
    (fn []
      [:> Row
       [:> Button
        {:on-click #(let []
                      (reset! output #queue [])
                      (eval-str @input output))}
        "Run"]
       [:> Button
        "Stop"]
       [:> Button
        {:on-click #(swap! options assoc :options-menu true)}
        "Options"]])))

(defn editor [input options]
  (let [edit (atom nil)]
    (fn []
      (when (not= @edit nil)
        (set! (-> @edit .getWrapperElement .-style .-fontSize)
              (str (:font-size @options) "px"))
        (-> @edit .refresh))
      [:> UnControlled
       {:value ""
        :options {:mode "clojure"
                  :keyMap (:keymap @options "sublime")
                  :theme (:theme @options "material")
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
              (str (:font-size @options) "px"))
        (-> @edit .refresh))
      [:> Controlled
       {:value (string/join "\n" @output)
        :options {:mode "clojure"
                  :theme (:theme @options "material")
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers false}
        :editorDidMount #(reset! edit %)}])))


;; -------------------------
;; Views

(defn home-page []
  (let [input (atom "")
        output (atom nil)
        options (local-storage
                 (atom {:options-menu false
                        :orientation "horizontal"
                        :keymap "sublime"
                        :font-size 12
                        :theme "material"})
                 :options)
        fs (browserfs/BFSRequire "fs")]
    (fn []
      (browserfs/configure #js {:fs "LocalStorage"}
                           #(when %
                              (throw %)))
      (set! (.-stopify js/window) stopify)
      [:main {:role "main"}
       [options-dialog options]
       [button-row input output options]
       [:> SplitPane {:split (:orientation @options)
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
