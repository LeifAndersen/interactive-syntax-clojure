(ns ^:no-doc rewrite-clj.parser.namespaced-map
  (:require [rewrite-clj.node.namespaced-map :as nsmap]
            [rewrite-clj.node.protocols :as node]
            [rewrite-clj.node.whitespace :as nws]
            [rewrite-clj.reader :as reader] ))

#?(:clj (set! *warn-on-reflection* true))

(defn- parse-qualifier
  [reader]
  (let [auto-resolved? (= ":" (reader/read-while reader (fn [c] (= \: c))))
        prefix (reader/read-until reader (fn [c] (or (reader/boundary? c)
                                                     (reader/whitespace? c))))]
    (nsmap/map-qualifier-node auto-resolved?
                             (when (seq prefix) prefix))))

(defn- parse-to-next-elem [reader read-next]
  (loop [nodes []]
    (let [n (read-next reader)]
      (if (and n (nws/whitespace? n))
        (recur (conj nodes n))
        [nodes n]))))

(defn parse-namespaced-map
  "The caller has parsed up to `#:` and delegates the details to us."
  [reader read-next]
  (reader/ignore reader)
  (let [qualifier-node (parse-qualifier reader)]
    (when (and (not (:auto-resolved? qualifier-node))
               (nil? (:prefix qualifier-node)))
      (reader/throw-reader reader "namespaced map expects a namespace"))
    (let [[whitespace-nodes map-node] (parse-to-next-elem reader read-next)]
      (when (or (not map-node)
                (not= :map (node/tag map-node)))
        (reader/throw-reader reader "namespaced map expects a map"))
      (nsmap/namespaced-map-node
       (concat [qualifier-node] whitespace-nodes [map-node])))))
