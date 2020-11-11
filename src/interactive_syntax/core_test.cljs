(ns interactive-syntax.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [reagent.core :as r :refer [atom]]
            [reagent.dom :as d]
            [browserfs]
            ["@testing-library/react" :refer [render fireEvent cleanup]]))

(use-fixtures :each
  {:before (fn [] (-> js/localStorage .clear))
   :after cleanup})

(deftest small-test
  (let [fs (browserfs/BFSRequire "fs")]
    (browserfs/configure #js {:fs "LocalStorage"}
                         #(when % (throw %)))
    (is (= (js->clj (fs.readdirSync "/"))
           []))))
