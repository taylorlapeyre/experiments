(ns clojurenews.views.stories.show
  (:require [clojurenews.views.layout :refer [main-layout]]
            [clojurenews.views.util :as util]))

(defn story-header
  "Displays information about the story (title, etc)"
  [story]
  [:header {:class "story-header"}
    (util/link [:h2 (:title story)] (:url story))
    (util/user-link [:h3 "By " (:author story)] (:author story))])

(defn comment-html
  "Recursively generates the HTML comment tree for a given comment."
  [comment]
  [:div {:class "comment"}
    (util/user-link [:h4 (comment "by")] (comment "by"))
    [:p (comment "text")]
    [:ul (map comment-html (comment "comments"))]])

(defn comment-section
  "Shows the nested comments on the story."
  [comments]
  (map comment-html comments))

(defn page [story]
  (main-layout {:title (str "HN: " (story "title"))}
    (story-header story)))
