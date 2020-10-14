(ns interactive-syntax.core
    (:require
      [reagent.core :as r :refer [atom]]
      [reagent.dom :as d]
      [clojure.string :as string]
      [cljs.tools.reader :refer [read read-string]]
      [cljs.js :as cljs :refer [empty-state compile-str js-eval]]
      [cljs.pprint :refer [pprint]]
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
                 (binding [*print-fn*
                           #(swap! output (fn [x]
                                            (conj x %)))]
                   (cond
                     ;;
                     (contains? program :value)
                     (let [runner (.stopifyLocally stopify (:value program))]
                       (set! (.-g runner) #js {:cljs js/cljs})
                       (.run runner
                             #(swap! output (fn [x]
                                              (conj x nil)))))
                     ;;
                     (contains? program :error)
                     (pprint (-> program :error)))))))

;; -------------------------
;; Options

(defn- close-options-dialog [options]
  (swap! options #(assoc % :options-menu false)))


(defn orientation-button [options type]
  [:> Button {:variant (if (= (:orientation @options) type) "primary" "secondary")
              :on-click
              #(swap! options (fn [x] (assoc x :orientation type)))}
   (if (= type "horizontal")
     "Horizontal"
     "vertical")])

(defn options-dialog [options]
  [:> Modal {:show (:options-menu @options)
             :on-hide #(close-options-dialog options)}
   [:> Modal.Header {:close-button true}]
   [:> Modal.Body
    [:> Row
     [:> Col [:h3 "Split:"]]
     [:> Col
      [:> ButtonGroup {:aria-label "Split"}
       [orientation-button options "horizontal"]
       [orientation-button options "vertical"]]]]]
   [:> Modal.Footer
    [:> Button {:variant "primary"
                :on-click #(close-options-dialog options)}
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
        {:on-click #(swap! options (fn [x] (assoc x :options-menu true)))}
        "Options"]])))

(defn editor [input]
  (let []
    (fn []
      [:> UnControlled
       {:value ""
        :options {:mode "clojure"
                  ;;:keyMap "vim"
                  :theme "material"
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers true}
        :onChange #(reset! input %3)}])))

(defn result-view [output]
  (let []
    (fn []
      [:> Controlled
       {:value (string/join "\n" @output)
        :options {:mode "clojure"
                  :theme "material"
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers false}}])))


;; -------------------------
;; Views

(defn home-page []
  (let [input (atom "")
        output (atom nil)
        options (atom {:options-menu false
                       :orientation "vertical"})]
    (fn []
      (set! (.-stopify js/window) stopify)
      [:main {:role "main"}
       [options-dialog options]
       [:> Container {:style {:borderBottom "5px solid rgba(255, 255, 255, 0)"}}
        [button-row input output options]
        [:> SplitPane {:split (:orientation @options)
                       :minSize 300
                       :defaultSize 300}
         [editor input]
         [result-view output]]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
