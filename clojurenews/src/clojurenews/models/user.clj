(ns clojurenews.models.user
  (require [yesql.core :refer [defqueries]]
           [clojurenews.database :refer [db]]))

(defqueries "sql/users/queries.sql"
  {:connection db})
