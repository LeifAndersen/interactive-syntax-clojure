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
      [react-split-pane :refer [Pane]]))

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

(defn orientation-button [options type display]
  [:> Button {:variant (if (= (:orientation @options) type) "primary" "secondary")
              :on-click #(swap! options assoc :orientation type)}
   display])

(defn keymap-button [options type display]
  [:> Button {:variant (if (= (:keymap @options) type) "primary" "secondary")
              :on-click #(swap! options assoc :keymap type)}
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
       [orientation-button options "horizontal" "Horizontal"]
       [orientation-button options "vertical" "Vertical"]]]]
    [:> Row
     [:> Col [:h3 "Keymap:"]]
     [:> Col
      [:> ButtonGroup {:aria-label "Keyamp"}
       [keymap-button options "vim" "Vim"]
       [keymap-button options "emacs" "Emacs"]
       [keymap-button options "sublime" "Sublime"]]]]
    [:> Row
     [:> Col [:h3 "Font Size:"]]
     [:> Col
      [:> Button {:on-click #(swap! options update :font-size dec)}
       "-"]
      (:font-size @options)
      [:> Button {:on-click #(swap! options update :font-size inc)}
       "+"]]
     ]]
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
                  :keyMap (:keymap @options)
                  :theme "material"
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
                  :theme "material"
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers false}
        :editorDidMount #(reset! edit %)}])))


;; -------------------------
;; Views

(defn home-page []
  (let [input (atom "")
        output (atom nil)
        options (atom {:options-menu false
                       :orientation "horizontal"
                       :keymap "sublime"
                       :font-size 12})]
    (fn []
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
