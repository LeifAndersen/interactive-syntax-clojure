(ns interactive-syntax.fs
  (:require
   [crypto-browserify]
   [jszip :refer [loadAsync]]
   [file-saver :refer [saveAs]]
   [interactive-syntax.db :as db]
   [goog.object :as obj]
   [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                      oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

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

(defn dir->zip [fs dir cb]
  (let [zip (new jszip)]
    ((fn rec [z dir name cb]
       (ocall fs :stat dir
              (fn [err stats]
                (if (ocall stats :isDirectory)
                  (let [z (if name (ocall z :folder name) z)]
                    (ocall fs :readdir dir
                           (fn [err files]
                             ((fn frec [files cb]
                                (if (empty? files)
                                  (cb)
                                  (let [name (first files)
                                        fullpath (js/path.join dir name)]
                                    (rec z fullpath name #(frec (rest files) cb)))))
                              files cb))))
                  (ocall fs :readFile dir
                         (fn [err txt]
                           (ocall z :file name txt)
                           (cb)))))))
     zip dir false #(-> (ocall zip :generateAsync #js {:type "blob"})
                        (.then cb)
                        (.catch js/console.log)))))

(defn export-to-zip [fs dir & [mname]]
  (let [name (or mname "files")]
    (dir->zip fs dir #(saveAs % (str name ".zip")))))

(defn merge-file [fs file cb]
  (if (oget file :dir)
    (ocall fs :mkdir (js/path.join db/files-root (oget file :name))
           (fn [err]
             (when (and err (not= (oget err :code) "EEXIST"))
               (js/console.error err))
             (cb)))
    (-> (ocall file :async "nodebuffer")
        (.then (fn [buff]
                 (ocall fs :writeFile
                        (js/path.join db/files-root (oget file :name)) buff
                        (fn [err]
                          (when err
                            (console.error err))
                          (cb)))))
        (.catch js/console.log))))

(defn merge-zip [fs zip cb]
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

(defn wipe-project! [{:keys [fs] :as db} cb]
  (ocall fs :readdir db/files-root
         (fn [err files]
           ((fn rec [files cb]
              (if (empty? files)
                (cb)
                (let [fullpath (js/path.join db/files-root (first files))]
                  (recursive-rm fs fullpath #(rec (rest files) cb)))))
            files cb))))
