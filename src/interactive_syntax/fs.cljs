(ns interactive-syntax.fs
  (:require
   [crypto-browserify]
   [jszip]
   [file-saver :refer [saveAs]]
   [interactive-syntax.db :as db]
   [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                      oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(defn filepath->id [filepath]
  (-> crypto-browserify
      (.createHash "sha1")
      (.update filepath)
      (.digest "base64")))


(defn recursive-rm [fs dir cb]
  (ocall fs :readdir dir
         (fn [err files]
           ((fn rec [files cb]
              (if (empty? files)
                (cb)
                (let [fullpath (js/path.join dir (first files))]
                  (ocall fs :stat fullpath
                         (fn [err stats]
                           (if (ocall stats :isDirectory)
                             (recursive-rm fs fullpath #(rec (rest files) cb))
                             (ocall fs :unlink fullpath
                                    #(rec (rest files) cb))))))))
            files
            #(ocall fs :rmdir dir cb)))))


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

(defn export-to-zip [fs dir & [mname]]
  (let [name (or mname "files")
        zip (new jszip)]
    ((fn rec [z dir name cb]
       (ocall fs :stat dir
              (fn [err stats]
                (if (ocall stats :isDirectory)
                  (let [z (ocall z :folder name)]
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
     zip dir name (fn []
                    (-> (ocall zip :generateAsync #js {:type "blob"})
                        (.then #(saveAs % (str name ".zip")))
                        (.catch #(js/console.log %)))))))

