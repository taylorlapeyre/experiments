(ns clojurenews.views.stories.index
  (:require [clojurenews.views.layout :refer [main-layout]]
            [clojurenews.views.util :as util]))

(defn story-html
  "The HTML for each story on the front page."
  [story]
  [:li {:class "story"}
    (util/link (:title story) (:url story))
    [:p
      (:score story) " points by "
      (util/user-link (:author story) (:author story))]])

(defn page [stories]
  (main-layout {:title "Clojure News"}
    [:ol (map story-html stories)]))
