(ns interactive-syntax.fs
  (:require
   [crypto-browserify]
   [jszip :refer [loadAsync]]
   [interactive-syntax.db :as db]
   [interactive-syntax.utils :refer [cb-thread cb-loop]]
   [goog.object :as obj]
   [cljs.pprint :refer [pprint]]
   [cljs.reader :refer [read-string]]
   [isomorphic-git]
   ["isomorphic-git/http/web" :as isohttp]
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

(defn merge-file [{:keys [fs deps deps-env env] :as db} file cb]
  (let [name (js/path.relative zip-root (js/path.join "/" (oget file :name)))]
    (cond
      (= name manifest-path)
      (-> (ocall file :async "string")
          (.then #(let [new-db (read-string %)]
                    (swap! deps into (:deps new-db))
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

(defn import-from-zip [db zip cb]
  (cb-thread
   #(-> (loadAsync zip)
        (.then %)
        (.catch js/console.log))
   #(let [files (oget %2 :files)]
      (cb-loop (js-keys files)
               #(merge-file db (obj/get files %2) %)
               cb))))

(defn wipe-project! [{:keys [fs input output menu deps deps-env env
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
                      cb)))))

;; -------------------------
;; Git

(defn git-clone [{:keys [fs] :as db} dir url cb]
  (cb-thread
   #(-> (ocall isomorphic-git :clone #js {:fs fs :http isohttp :dir dir :url url})
        (.then (fn [v] (cb v)))
        (.catch (fn [e] (%))))
   #(-> (ocall isomorphic-git :clone
               #js {:fs fs :http isohttp :dir dir
                    :url (str "https://cors.isomorphic-git.org/" url)})
        (.then (fn [v] (cb v)))
        (.catch (fn [e] (cb e))))))
