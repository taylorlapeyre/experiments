(ns clojurenews.views.stories.new
  (:require [clojurenews.views.layout :refer [main-layout]]
            [clojurenews.views.util :as util]))

(defn header
  []
  [:header
    [:h2 "Submit a new Story"]])

(defn story-form
  []
  [:form {:action "/submit" :method "POST"}
    [:div
      [:label "Title"]
      [:input {:type "text" :name "story[title]"}]]
    [:div
      [:label "URL"]
      [:input {:type "url" :name "story[url]"}]]
    [:div
      [:button {:type "submit"} "Submit"]]])

(defn page
  []
  (main-layout {:title "Submit a new Story"}
    (header)
    (story-form)))
