(ns interactive-syntax.git
  (:require [interactive-syntax.utils :refer [cb-thread]]
            [interactive-syntax.fs :as fs]
            [interactive-syntax.db :as db]
            [isomorphic-git :as git]
            ["isomorphic-git/http/web" :as isohttp]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(def cors-url "https://cors.isomorphic-git.org")

(defn add-remote [{:keys [fs auth] :as db} name url cb]
  (-> (ocall git :addRemote #js {:fs fs :dir db/git-root :remote name :url url})
      (.then cb)
      (.catch (fn [e] (js/console.error e) (cb)))))

(defn remove-remote [{:keys [fs auth] :as db} remote cb]
  (-> (ocall git :deleteRemote #js {:fs fs :dir db/git-root :remote remote})
      (.then cb)
      (.catch (fn [e] (js/console.error e) (cb)))))

(defn push [{:keys [fs auth] :as db} remote branch cb]
  (let [pr-and-ret (fn [e] (js/console.error e) (cb e))
        cache #js {}]
    (cb-thread
     #(-> (ocall git :checkout #js {:fs fs :dir db/git-root :cache cache
                                    :remote remote :ref branch
                                    :force true :noCheckout true})
          (.then %) (.catch pr-and-ret))
     #(-> (ocall git :add #js {:fs fs :dir db/git-root :filepath "." :cache cache})
          (.then %) (.catch pr-and-ret))
     #(-> (ocall git :commit #js {:fs fs :dir db/git-root :message "VISr IDE"
                                  :author {:name "VISr"} :cache cache})
          (.then %) (.catch pr-and-ret))
     #(-> (ocall git :push #js {:fs fs :http isohttp :dir db/git-root :cache cache
                                :remote remote :corsProxy cors-url
                                :onAuth #(js/console.error
                                          "Auth not implemented")})
          (.then cb) (.catch pr-and-ret)))))

(defn pull [{:keys [fs auth] :as db} remote branch cb]
  (let [pr-and-ret (fn [e] (js/console.error e) (cb e))
        cache #js {}]
    (cb-thread
     #(-> (ocall :fetch #js {:fs fs :http isohttp :dir db/git-root :cache cache
                             :remote remote :corsProxy cors-url
                             :onAuth #(js/console.error
                                       "Auth not implemented")})
          (.then %) (.catch pr-and-ret))
     #(-> (ocall :checkout #js {:fs fs :dir db/git-root :remote remote :ref branch
                                :force true :cache cache})
          (.then %) (.catch pr-and-ret)))))

