(ns clojurenews.models.comment
  (require [yesql.core :refer [defqueries]]
           [clojurenews.database :refer [db]]
           [clojurenews.models.user :as user]
           [clojurenews.models.story :as story]))

(defqueries "sql/comments/queries.sql"
  {:connection db})

(defn get-subcomments
  [comment]
  (find-by-comment-id {:comment_id (:comment_id comment)}))

(defn get-user
  [comment]
  (first (user/find {:id (:user_id comment)})))

(defn get-story
  [comment]
  (first (story/find {:id (:story_id comment)})))
