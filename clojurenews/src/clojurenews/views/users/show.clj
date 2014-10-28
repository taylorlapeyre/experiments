(ns clojurenews.views.users.show
  (:require [clojurenews.views.layout :refer [main-layout]]
            [clojurenews.views.util :as util]))

(defn user-header
  "Displays information about the user (username, etc)"
  [user]
  [:header {:class "user-header"}
    [:h2 (:username user)]])

(defn submitted-html
  [story]
  [:div {:class "submitted-story"}
    (util/story-link [:h4 (:title story)] (:id story))])

(defn submitted-section
  "Shows each story submitted by a user."
  [stories]
  (map submitted-html stories))

(defn page [user]
  (main-layout {:title (str "HN: " (:username user))}
    (user-header user)
    (submitted-section (:stories user))))
