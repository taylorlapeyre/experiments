(ns clojurenews.controllers.stories
  (use ring.util.response)
  (require [clojurenews.models.story :as story]
           [clojurenews.views.stories.index :as index-views]
           [clojurenews.views.stories.show :as show-views]
           [clojurenews.views.stories.new :as new-views]))

(defn index
  "Shows all stories on the front page of Clojure News."
  [limit]
  (index-views/page (story/all-with-user)))

(defn show
  "Shows a particular story and its comments."
  [story-id]
  (show-views/page (story/find {:id story-id})))

(defn new
  "Simply shows a form that allows you to submit a new story."
  []
  (new-views/page))

(defn create
  [story]
  (when (story/create! (assoc story :user_id 1))
    (redirect "/")))
