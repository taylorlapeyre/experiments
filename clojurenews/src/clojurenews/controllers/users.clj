(ns clojurenews.controllers.users
  (use ring.util.response)
  (require [clojurenews.models.user :as user]
           [clojurenews.models.story :as story]
           [clojurenews.views.users.show :as show-views]))

(defn show
  "Shows a particular user and their submitted stories."
  [username]
  (let [user (first (user/find-by-username {:username username}))
        full-user (assoc user :stories (story/find-by-user {:user_id (:id user)}))]
    (show-views/page full-user)))

; (defn new
;   "Simply shows a form that allows you to create an account."
;   []
;   (new-views/page))

(defn create
  [user]
  (when (user/create! user)
    (redirect "/")))
