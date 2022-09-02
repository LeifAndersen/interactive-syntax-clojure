(ns interactive-syntax.git
  (:require [interactive-syntax.utils :refer [cb-thread]]
            [interactive-syntax.fs :as fs]
            [interactive-syntax.db :as db]
            [isomorphic-git :as git]
            ["isomorphic-git/http/web" :as isohttp]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(def cors-url "https://cors.isomorphic-git.org")

(defn onAuth [{:keys [type username passwd]}]
  (condp = type
    :github #js {:username "token" :password passwd}
    #js {:username username :password passwd}))
(def author #js {:name "VISr" :email "ide@visr.pl"})

(defn remote->url [type remote]
  (try
    (js/URL. remote)
    remote
    (catch js/Error e
      (str (condp = type
             :github "https://github.com/"
             :bitbucket "https://bitbucket.org/"
             :gitlab "https://gitlab.com/"
             "")
           remote))))

(defn try-with-cors [op data cb-pass cb-fail]
  (-> (op (clj->js data))
      (.then cb-pass)
      (.catch #(if (.-code %)
                 (cb-fail %)
                 (-> (op (clj->js (assoc data :corsProxy cors-url)))
                     (.then cb-pass)
                     (.catch cb-fail))))))


(defn add-remote [{:keys [fs auth] :as db} name url cb]
  (-> (ocall git :addRemote #js {:fs fs :dir db/git-root :force true
                                 :remote name :url url})
      (.then cb)
      (.catch (fn [e] (js/console.error e) (cb)))))

(defn remove-remote [{:keys [fs auth] :as db} remote cb]
  (-> (ocall git :deleteRemote #js {:fs fs :dir db/git-root :remote remote})
      (.then cb)
      (.catch (fn [e] (js/console.error e) (cb)))))

(defn push [{:keys [fs auth] :as db} remote cb]
  (let [pr-and-ret (fn [e] (js/console.error e) (cb e))
        {:keys [type passwd] :as auth-data} (get @auth remote)
        remote (remote->url type remote)
        cache #js {}
        branch "main"
        rem-name "origin"]
    (cb-thread
     #(-> (ocall git :init #js {:fs fs :dir db/git-root :cache cache
                                :noCheckout true})
          (.then %) (.catch pr-and-ret))
     #(-> (ocall git :addRemote #js {:fs fs :dir db/git-root :cache cache
                                     :force true
                                     :remote rem-name
                                     :url remote})
          (.then %) (.catch pr-and-ret))
     #(try-with-cors
       #(ocall git :fetch %)
       {:fs fs :dir db/git-root :cache cache :http isohttp
        :onAuth #(onAuth auth-data) :remote rem-name}
       % pr-and-ret)
     #(-> (ocall git :checkout #js {:fs fs :dir db/git-root :cache cache
                                    :remote rem-name
                                    :ref branch
                                    :force true :noCheckout true})
          (.then %) (.catch pr-and-ret))
     #(-> (ocall git :add #js {:fs fs :dir db/git-root :filepath "." :cache cache})
          (.then %) (.catch pr-and-ret))
     #(-> (ocall git :commit #js {:fs fs :dir db/git-root :cache cache
                                  :message "VISr IDE"
                                  :author author})
          (.then %) (.catch pr-and-ret))
     #(try-with-cors
       #(ocall git :push %)
       {:fs fs :http isohttp :dir db/git-root :cache cache
        :remote rem-name :onAuth #(onAuth auth-data)}
       cb pr-and-ret))))

(defn pull [{:keys [fs auth] :as db} remote cb]
  (let [pr-and-ret (fn [e] (js/console.error e) (cb e))
        {:keys [type passwd] :as auth-data} (get @auth remote)
        remote (remote->url type remote)
        cache #js {}
        branch "main"
        rem-name "origin"]
    (cb-thread
     #(-> (ocall git :init #js {:fs fs :dir db/git-root :cache cache
                                :noCheckout true})
          (.then %) (.catch pr-and-ret))
     #(-> (ocall git :addRemote #js {:fs fs :dir db/git-root :cache cache
                                     :force true
                                     :remote rem-name
                                     :url remote})
          (.then %) (.catch pr-and-ret))
     #(try-with-cors
       #(ocall git :fetch %)
       {:fs fs :dir db/git-root :cache cache
        :http isohttp :onAuth #(onAuth auth-data)
        :remote rem-name
        :ref branch
        :author author}
       % pr-and-ret)
     #(-> (ocall git :checkout #js {:fs fs :dir db/git-root :cache cache
                                    :http isohttp :corsProxy cors-url
                                    :remote rem-name
                                    :ref (str rem-name "/" branch)
                                    :author author
                                    :force true})
          (.then cb) (.catch pr-and-ret)))))
