(ns rewrite-clj.parser
  "Parse Clojure/ClojureScript/EDN source code to nodes.

  Parsing includes all source code elements including whitespace.

  After parsing, the typical next step is [[rewrite-clj.zip/edn]] to create zipper.

  Alternatively consider parsing and zipping in one step from [[rewrite-clj.zip/of-string]] or [[rewrite-clj.zip/of-file]]."
  (:require [rewrite-clj.node.forms :as nforms]
            [rewrite-clj.parser.core :as p]
            [rewrite-clj.reader :as reader]))

#?(:clj (set! *warn-on-reflection* true))

;; ## Parser Core

(defn ^:no-doc parse
  "Parse next form from the given reader."
  [#?(:cljs ^not-native reader :default reader)]
  (p/parse-next reader))

(defn ^:no-doc parse-all
  "Parse all forms from the given reader."
  [#?(:cljs ^not-native reader :default reader)]
  (let [nodes (->> (repeatedly #(parse reader))
                   (take-while identity))
        position-meta (merge (meta (first nodes))
                             (select-keys (meta (last nodes))
                                          [:end-row :end-col]))]
    (with-meta (nforms/forms-node nodes) position-meta)))

;; ## Specialized Parsers

(defn parse-string
  "Return a node for first source code element in string `s`."
  [s]
  (parse (reader/string-reader s)))

(defn parse-string-all
  "Return forms node for all source code elements in string `s`."
  [s]
  (parse-all (reader/string-reader s)))

#?(:clj
   (defn parse-file
     "Return node for first source code element in file `f`."
     [f]
     (with-open [r (reader/file-reader f)]
       (parse r))))

#?(:clj
   (defn parse-file-all
     "Return forms node for all source code elements in file `f`."
     [f]
     (with-open [r (reader/file-reader f)]
       (parse-all r))))
