(ns interactive-syntax.db
  (:require [reagent.core :as r :refer [atom]]
            [cljs.spec.alpha :as s]
            [alandipert.storage-atom :refer [local-storage]]))


(def default-db
  (into {:output (atom nil)
         :options (into {}
                        (for [kv {:orientation "horizontal"
                                  :keymap "sublime"
                                  :font-size 12
                                  :theme "material"
                                  :show-editors true}]
                          [(key kv) (local-storage (atom (val kv)) (key kv))]))}
        (for [kv {:input ""
                  :menu [:home]
                  :current-folder "/"
                  :current-file nil
                  :file-changed false}]
          [(key kv) (local-storage (atom (val kv)) (key kv))])))
