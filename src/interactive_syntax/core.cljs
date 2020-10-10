(ns interactive-syntax.core
    (:require
      [reagent.core :as r :refer [atom]]
      [reagent.dom :as d]
      [cljs.tools.reader :refer [read read-string]]
      [cljs.js :as cljs :refer [empty-state eval js-eval]]
      [cljs.pprint :refer [pprint]]
      [codemirror :as CodeMirror]
      ["codemirror/mode/clojure/clojure"]
      ["codemirror/mode/clojure/clojure"]
      ["codemirror/keymap/vim"]
      [react-split-pane]))

;; -------------------------
;; Evaluator

(defn eval-str [s]
  (eval (empty-state)
        (read-string s)
        {:eval js-eval
         :source-map true
         :context :expr}
        (fn [x] x)))

;; -------------------------
;; Editor

(defn editor-did-mount [input]
  (fn [this]
    (let [cm (.fromTextArea CodeMirror
                            (d/dom-node this)
                            #js {:mode "clojure"
                                 ;:keyMap "vim"
                                 :matchBrackets true
                                 :showCursorWhenSelecting true
                                 :lineNumbers true})]
      (.on cm "change" #(reset! input (.getValue %))))))

(defn editor [input]
  (r/create-class
   {:render (fn [] [:textarea
                    {:default-value ""
                     :auto-complete "off"}])
    :component-did-mount (editor-did-mount input)}))

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
  (let [input (atom nil)
        output (atom nil)
        orientation (atom "horizontal")
        pane (.-Pane react-split-pane)
        split-pane (.-default react-split-pane)]
    (fn []
      (println pane)
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
