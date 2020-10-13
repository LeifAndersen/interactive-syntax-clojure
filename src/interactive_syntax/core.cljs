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
      [react-bootstrap :refer [Button Row Container]]
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
                 (cond
                   (contains? program :value)
                   (let [runner (.stopifyLocally stopify (:value program))]
                     (set! (.-g runner) #js {:cljs js/cljs})
                     (binding [*print-fn*
                               #(swap! output (fn [x]
                                                (conj x %)))]
                       (.run runner
                             #(swap! output (fn [x]
                                              (conj x nil))))))))))

;; -------------------------
;; Editor

(defn button-row [input output orientation]
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
        {:on-click #(swap! orientation (fn [x]
                                         (if (= x "horizontal")
                                           "vertical"
                                           "horizontal")))}
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
        orientation (atom "vertical")]
    (fn []
      (set! (.-stopify js/window) stopify)
      [:main {:role "main"}
       [:> Container {:style {:borderBottom "5px solid rgba(255, 255, 255, 0)"}}
        [button-row input output orientation]
        [:> SplitPane {:split @orientation
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
