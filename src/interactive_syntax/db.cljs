(ns interactive-syntax.db
  (:require [reagent.core :as r :refer [atom]]
            [cljs.spec.alpha :as s]
            [alandipert.storage-atom :refer [local-storage]]
            [browserfs]))


(defn default-db
  ([] (default-db :local))
  ([mode]
   (let [db (into {:output (atom nil)
                   :fs (browserfs/BFSRequire "fs")
                   :options
                   (into {}
                         (for [kv {:orientation "horizontal"
                                   :keymap "sublime"
                                   :font-size 12
                                   :theme "material"
                                   :show-editors true}]
                           [(key kv)
                            (case mode
                              :local (local-storage (atom (val kv)) (key kv))
                              :temp (atom (val kv)))]))}
                  (for [kv {:input ""
                            :menu [:home]
                            :current-folder "/"
                            :current-file nil
                            :file-changed false}]
                    [(key kv) (case mode
                                :local (local-storage (atom (val kv)) (key kv))
                                :temp (atom (val kv)))]))]
     (browserfs/configure #js {:fs (case mode
                                     :local "LocalStorage"
                                     :temp "InMemory")}
                          #(when % (throw %)))
     db)))

