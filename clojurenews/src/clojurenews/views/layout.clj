(ns clojurenews.views.layout
  (:require [hiccup
             [page :refer [html5]]
             [page :refer [include-js include-css]]]
            [clojurenews.views.util :as util]))

(defn main-header
  []
  [:header {:class "main-header"}
    [:img {:src "https://news.ycombinator.com/y18.gif"}]
    [:h1 "Clojure News"]
    (util/link "submit" "/submit") " | "
    (util/link "taylorlapeyre/clojurenews" "https://github.com/taylorlapeyre/clojurenews")])

(defn main-layout
  "The main chrome of the website. Accepts a map that contains information
  about the page, and whatever html is to get rendered into the layout."
  [{:keys [title]} & page-content]
  (html5
    [:head
      [:title title]
      (include-js "/js/main.js")
      (include-css "/css/main.css")]
    [:body
      (main-header)
      [:div {:class "content"} page-content]]))
