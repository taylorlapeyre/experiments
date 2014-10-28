(ns clojurenews.models.story
  (require [yesql.core :refer [defqueries]]
           [clojurenews.database :refer [db]]
           [clojurenews.models.user :as user]))

(defqueries "sql/stories/queries.sql"
  {:connection db})

(defn get-user
  [story]
  (user/find {:id (:user_id story)}))
