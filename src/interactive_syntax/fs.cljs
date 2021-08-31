(ns interactive-syntax.fs
  (:require
   [crypto-browserify]
   [jszip :refer [loadAsync]]
   [interactive-syntax.db :as db]
   [interactive-syntax.utils :refer [cb-thread]]
   [goog.object :as obj]
   [cljs.pprint :refer [pprint]]
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
                      ((fn rec [files cb]
                         (if (empty? files)
                           (cb)
                           (let [fullpath (js/path.join dir (first files))]
                             (recursive-rm fs fullpath #(rec (rest files) cb)))))
                       files
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
        manifest {:visr-version @version :deps (vals @deps)}]
    (ocall project :file manifest-path (with-out-str (pprint manifest)))
    (cb-thread #(add-dir-to-zip! fs project db/files-root "files" %)
               #(add-dir-to-zip! fs project db/deps-root "deps" %)
               #(-> (ocall zip :generateAsync #js {:type "blob"})
                    (.then cb)
                    (.catch js/console.log)))))

(defn merge-file [fs file cb]
  (let [name (js/path.relative zip-root (js/path.join "/" (oget file :name)))]
    (cond
      (= name manifest-path) (cb),
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

(defn import-from-zip [{:keys [fs] :as db} zip cb]
  (-> (loadAsync zip)
      (.then (fn [zip]
               (let [files (oget zip :files)]
                 ((fn rec [fnames cb]
                    (if (empty? fnames)
                      (cb)
                      (merge-file fs (obj/get files (first fnames))
                                  #(rec (rest fnames) cb))))
                  (js-keys files) cb))))
      (.catch js/console.log)))

(defn wipe-project! [{:keys [fs input output menu deps deps-env env
                             file-changed running? current-folder
                             current-file file-browser-folder] :as db}
                     cb]
  (reset! input "")
  (reset! output "")
  (reset! deps {})
  (reset! deps-env nil)
  (reset! env nil)
  (reset! file-changed false)
  (reset! running? false)
  (reset! current-folder db/files-root)
  (reset! current-file nil)
  (reset! file-browser-folder db/files-root)
  (reset! menu [:home])
  (ocall fs :readdir db/files-root
         (fn [err files]
           ((fn rec [files cb]
              (if (empty? files)
                (cb)
                (let [fullpath (js/path.join db/files-root (first files))]
                  (recursive-rm fs fullpath #(rec (rest files) cb)))))
            files cb))))

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
