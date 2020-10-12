(ns interactive-syntax.core
    (:require
      [reagent.core :as r :refer [atom]]
      [reagent.dom :as d]
      [cljs.tools.reader :refer [read read-string]]
      [cljs.js :as cljs :refer [empty-state compile-str js-eval]]
      [cljs.pprint :refer [pprint]]
      [codemirror]
      [react-codemirror2 :as CodeMirror]
      ["codemirror/mode/clojure/clojure"]
      ["codemirror/keymap/vim"]
      ["@stopify/stopify" :as stopify]
      [react-split-pane]))

;; -------------------------
;; Evaluator

(defn eval-str [s]
  (compile-str (empty-state)
               s
               "UNTITLED.cljs"
               {:eval js-eval
                :source-map true}
               (fn [program]
                 (println program)
                 (cond
                   (contains? program :value)
                   (let [runner (.stopifyLocally stopify (:value program))]
                     (set! (.-g runner) #{js/cljs})
                     (.run runner
                           (fn []
                             (println "Who needs results?"))))))))

;; -------------------------
;; Editor

(defn editor [input]
  (let [CM (.-UnControlled CodeMirror)]
    (fn []
      [:> CM
       {:value ""
        :options {:mode "clojure"
                  ;;:keyMap "vim"
                  :matchBrackets true
                  :showCursorWhenSelecting true
                  :lineNumbers true}
        :onChange #(reset! input %3)}])))

(defn render-code [this]
  (->> this d/dom-node (.highlightBlock js/hljs)))

(defn result-view [output]
  (r/create-class
   {:render (fn []
              [:pre>code.clj
               (with-out-str (pprint @output))])
    ;;:component-did-update render-code
    }))


;; -------------------------
;; Views

(defn home-page []
  (let [input (atom "")
        output (atom nil)
        orientation (atom "horizontal")
        pane (.-Pane react-split-pane)
        split-pane (.-default react-split-pane)]
    (fn []
      (set! (.-stopify js/window) stopify)
      [:> split-pane {:split "horizontal"
                      :defaultSize 50
                      :allowResize false}
       [:div.btn-row
        [:div>button
         {:on-click #(reset! output (:value (eval-str @input)))}
         "Run"]
        [:div>button
         "Stop"]
        [:div>button
         {:on-click #(swap! orientation (fn [x]
                                          (if (= x "horizontal")
                                            "vertical"
                                            "horizontal")))}
         "Options"]]
       [:> split-pane {:split @orientation
                       :minSize 300
                       :defaultSize 300}
        [editor input]
        [result-view output]]])))

;; ---i----------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
