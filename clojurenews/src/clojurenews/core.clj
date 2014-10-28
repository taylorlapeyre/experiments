(ns clojurenews.core
  (:gen-class)
  (:use compojure.core [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.route           :as route]
            [compojure.handler         :as handler]
            [compojure.response        :as response]
            [ring.adapter.jetty        :as jetty]
            [environ.core              :refer [env]]
            [clojurenews.controllers.stories :as stories-controller]
            [clojurenews.controllers.users :as users-controller]))

(defroutes main-routes
  (GET  "/"
    [limit]
    (stories-controller/index limit))

  (GET  "/stories/:id"
    [id]
    (stories-controller/show id))

  (GET  "/submit"
    []
    (stories-controller/new))

  (POST "/submit"
    [story]
    (stories-controller/create story))

  (GET "/users/:username"
    [username]
    (users-controller/show username))

  (route/resources "/")
  (route/not-found "Page not found."))

(defn app
  "This is the handler for our routes. We wrap the base url to
  Use Hiccup."
  []
  (-> (handler/site main-routes)
      (wrap-base-url)))

(defn -main
  "This is the entry point into the application. It runs the server."
  [& [port]]
  (let [chosen-port (or port (env :port) "3000")
        parse-int #(Integer/parseInt (re-find #"\A-?\d+" %))]
    (jetty/run-jetty (app) {:port (parse-int chosen-port) :join? false})))
