(ns clojurenews.database
  (require [yesql.core :refer [defqueries]]))

(def db {:subprotocol "mysql"
           :subname "//127.0.0.1:3306/testdb"
           :user "root"
           :password ""})

(defqueries "sql/util.sql"
  {:connection db})

(defn drop-tables
  []
  (drop-stories-table!)
  (drop-users-table!)
  (drop-comments-table!))

(defn create-tables
  []
  (create-users-table!)
  (create-stories-table!)
  (create-comments-table!))
