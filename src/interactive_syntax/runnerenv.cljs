(ns interactive-syntax.runnerenv
  (:require [interactive-syntax.stdlib]
            [interactive-syntax.utils :refer [cb-thread cb-loop module->uri]]
            [cljs.tools.reader :refer [read read-string]]
            [cljs.js :as cljs]
            [goog.object :as obj]
            [jszip :refer [loadAsync]]
            [ajax.core :refer [GET POST PUT]]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(def zip-root "project")
(def files-path "files")
(def deps-path "deps")
(def manifest-path "manifest.edn")

(defn load-dep [name dep cb]
  (let [url (module->uri dep)]
    (-> js/System (ocall :import url)
        (.then (fn [res]
                 (obj/set js/window name (.-default res))
                 (cb)))
        (.catch js/console.error)
        (.finally #(js/URL.revokeObjectURL url)))))

(defn ns->string [zip {:keys [name macros path]} cb]
  ((fn rec [extensions]
     (if (empty? extensions)
       (cb nil)
       (let [file-path (str zip-root "/" files-path
                            "/" path "." (first extensions))
             file (ocall zip :file file-path)]
         (-> (ocall file :async "string")
             (.then #(cb {:lang (if (= (first extensions) "js") :js :clj)
                          :source %
                          :file file-path}))
             (.catch #(rec (rest extensions)))))))
   (if macros
     ["clj" "cljc" "cljs"]
     ["cljs" "cljc" "js"])))

(defn run [zip cb]
  (cb-thread
   #(-> (loadAsync zip)
        (.then %)
        (.catch js/console.error))
   (fn [next zip]
     (let [manifest (ocall zip :file (js/path.join zip-root manifest-path))]
       (-> (ocall manifest :async "string")
           (.then #(next % zip))
           (.catch js/console.error))))
   #(let [{:keys [deps main]} (read-string %2)]
      (cb-loop deps
               (fn [next [key {:keys [name]}]]
                 (let [dep (ocall %3 :file
                                  (js/path.join zip-root "deps" (str name)))]
                   (-> (ocall dep :async "string")
                       (.then #(load-dep (str name) % next))
                       (.catch js/console.error))))
               (fn [] (% main %3))))
   #(let [zip %3
          main (ocall %3 :file (js/path.join zip-root "files" %2))]
      (-> (ocall main :async "string")
          (.then #(cljs/eval-str (cljs/empty-state) % "UNTITLED.cljs"
                                 {:eval cljs/js-eval
                                  :load (partial ns->string zip)
                                  :verbose true
                                  :source-map false}
                                 (or cb #())))
          (.catch js/console.error)))))

;; Probably would be better to use GET, if I could get response type to work.
(defn run-uri [uri cb]
  (cb-thread
   #(let [req (js/XMLHttpRequest.)]
      (.addEventListener req "load" (fn [res] (% (oget res :target :response))))
      (set! (.-responseType req) "arraybuffer")
      (.open req "GET" uri)
      (.send req))
   #(run %2 cb)))
