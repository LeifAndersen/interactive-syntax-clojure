(ns interactive-syntax.db
  (:require [reagent.core :as r :refer [atom]]
            [cljs.spec.alpha :as s]
            [cognitect.transit :as t]
            [alandipert.storage-atom :as storage :refer [local-storage]]
            [browserfs]))

()

(deftype FunctionHandler []
  Object
  (tag [this v] "map")
  (rep [this v]
    (let [xs (clojure.string/split (.-name v) #"\$")
          name (last xs)
          ns (clojure.string/join "." (butlast xs))]
      {:name (str ns "/" name)
       :ns ns
       :display-name name
       :type "js/Function"
       :fn? true
       :string (.toString v)}))
  (stringRep [this v]))

(swap! storage/transit-write-handlers assoc
       js/Function (FunctionHandler.))

(defn default-db
  ([] (default-db :temp))
  ([mode]
   (let [fs (browserfs/BFSRequire "fs")
         _ (browserfs/configure #js {:fs (case mode
                                           :local "LocalStorage"
                                           :temp "InMemory")}
                                #(when % (throw %)))
         _ (set! fs.isdbType "fs")
         db (into {:output (atom nil)
                   :options
                   (into {}
                         (for [kv {:orientation "horizontal"
                                   :keymap "sublime"
                                   :font-size 12
                                   :theme "material"
                                   :line-wrapping false
                                   :line-numbers true
                                   :enable-drag-and-drop true
                                   :show-editors true}]
                           [(key kv)
                            (case mode
                              :local (local-storage (atom (val kv)) (key kv))
                              :temp (atom (val kv)))]))}
                  (for [kv {:input ""
                            :fs fs
                            :menu [:home]
                            :current-folder "/"
                            :current-file nil
                            :file-changed false}]
                    [(key kv) (case mode
                                :local (local-storage (atom (val kv)) (key kv))
                                :temp (atom (val kv)))]))]
     (assoc db :fs fs))))

