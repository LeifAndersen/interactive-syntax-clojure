(ns interactive-syntax.fs
  (:require
   [crypto-browserify]
   [jszip :refer [loadAsync]]
   [interactive-syntax.db :as db]
   [interactive-syntax.utils :refer [cb-thread cb-loop]]
   [goog.object :as obj]
   [cljs.pprint :refer [pprint]]
   [cljs.reader :refer [read-string]]
   [file-saver :refer [saveAs]]
   [cognitect.transit :as t]
   [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                      oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(def zip-root "/project")
(def manifest-path "manifest.edn")

(defn filepath->id [filepath]
  (-> crypto-browserify
      (.createHash "sha1")
      (.update filepath)
      (.digest "base64")))

(defn recursive-rm [fs dir cb]
  (ocall fs :stat dir
         (fn [err stats]
           (if (ocall stats :isDirectory)
             (ocall fs :readdir dir
                    (fn [err files]
                      (cb-loop files
                               #(let [fullpath (js/path.join dir %2)]
                                  (recursive-rm fs fullpath %))
                               #(ocall fs :rmdir dir cb))))
             (ocall fs :unlink dir cb)))))

(defn copy-path [fs src dst cb]
  (ocall fs :stat src
         (fn [err stats]
           (if (ocall stats :isDirectory)
             (cb-thread
              #(ocall fs :mkdir dst %)
              #(ocall fs :readdir src %)
              #(cb-loop %3
                        #(copy-path
                          fs (js/path.join src %2) (js/path.join dst %2) %)
                        cb))
             (cb-thread
              #(ocall fs :readFile src %)
              #(ocall fs :writeFile dst %3 cb))))))

(defn file-description [fs filepath cb]
  (ocall fs :stat filepath
         (fn [err stats]
           (cond-> {:id (filepath->id filepath)
                    :name (js/path.basename filepath)
                    :isDir (ocall stats :isDirectory)
                    :modDate stats.ctime}
             (= (.charAt filepath 0) ".") (assoc :isHidden true)
             (ocall stats :isSymbolicLink) (assoc :isSymlink true)
             (not (ocall stats :isDirectory)) (assoc :size (oget stats :size))
             :always clj->js
             :always cb))))

(defn add-dir-to-zip! [fs zip dir name cb]
  (ocall fs :stat dir
         (fn [err stats]
           (if (ocall stats :isDirectory)
             (let [zip (if name (ocall zip :folder name) zip)]
               (ocall fs :readdir dir
                      (fn [err files]
                        ((fn rec [files cb]
                           (if (empty? files)
                                  (cb)
                                  (let [name (first files)
                                        fullpath (js/path.join dir name)]
                                    (add-dir-to-zip! fs zip fullpath name
                                                     #(rec (rest files) cb)))))
                         files cb))))
             (ocall fs :readFile dir
                    (fn [err txt]
                      (ocall zip :file name txt)
                      (cb)))))))

(defn export-to-zip [{:keys [fs version deps] :as db} cb]
  (let [zip (new jszip)
        project (ocall zip :folder "project")
        manifest {:visr-version @version :deps @deps}]
    (ocall project :file manifest-path (with-out-str (pprint manifest)))
    (cb-thread #(add-dir-to-zip! fs project db/files-root "files" %)
               #(add-dir-to-zip! fs project db/deps-root "deps" %)
               #(-> (ocall zip :generateAsync #js {:type "blob"})
                    (.then cb)
                    (.catch js/console.log)))))

(defn merge-file [{:keys [fs] :as db} file db-box cb]
  (let [name (js/path.relative zip-root (js/path.join "/" (oget file :name)))]
    (cond
      (= name manifest-path)
      (-> (ocall file :async "string")
          (.then #(let [new-db (read-string %)]
                    (reset! db-box new-db)
                    (cb)))
          (.catch js/console.log)),
      (oget file :dir) (ocall fs :mkdir (js/path.join "/" name)
                              (fn [err]
                                (when (and err (not= (oget err :code) "EEXIST"))
                                  (js/console.error err))
                                (cb))),
      :else (-> (ocall file :async "nodebuffer")
                (.then (fn [buff]
                         (ocall fs :writeFile (js/path.join "/" name) buff
                                (fn [err]
                                  (when err
                                    (console.error err))
                                  (cb)))))
                (.catch js/console.log)))))

(defn import-from-zip [{:keys [deps] :as db} zip cb]
  (let [db-box (clojure.core/atom nil)]
    (cb-thread
     #(-> (loadAsync zip)
          (.then %)
          (.catch js/console.log))
     #(let [files (oget %2 :files)]
        (cb-loop (js-keys files)
                 #(merge-file db (obj/get files %2) db-box %)
                 %))
     #(do
        (swap! deps into (:deps @db-box))
        (cb)))))

(defn wipe-project! [{:keys [fs input output menu deps
                             file-changed running? current-folder
                             current-file file-browser-folder] :as db}
                     cb]
  (reset! input "")
  (reset! output "")
  (reset! deps {})
  (reset! file-changed false)
  (reset! running? false)
  (reset! current-folder db/files-root)
  (reset! current-file nil)
  (reset! file-browser-folder db/files-root)
  (reset! menu [:home])
  (cb-thread
   #(ocall fs :readdir db/files-root
           (fn [err files]
             (cb-loop files
                      #(recursive-rm fs (js/path.join db/files-root %2) %)
                      %)))
   #(ocall fs :readdir db/deps-root
           (fn [err files]
             (cb-loop files
                      #(recursive-rm fs (js/path.join db/deps-root %2) %)
                      %)))
   #(db/git-init db cb)))

;; -------------------------
;; (For creating embedding states, currently unused)

(defn state->serializable [db cb]
  (cb-thread
   #(export-to-zip db %)
   #(-> %2 .arrayBuffer (.then %))
   #(cb (t/write (t/writer :json) {:zip (js/Uint8Array. %2) :db @(:backing db)}))))

(defn capture-state! [db name]
  (cb-thread
   #(state->serializable db %)
   #(saveAs (js/Blob. #js [%2]) (or name "state.visr"))))
