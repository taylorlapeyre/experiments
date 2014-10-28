(defproject clojurenews "0.1.0-SNAPSHOT"
  :description "A simple news site."
  :url "http://github.com/taylorlapeyre/clojurenews"
  :main clojurenews.core
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-ring "0.8.7"]]
  :dependencies [[org.clojure/clojure "1.6.0"]
                  [ring/ring-jetty-adapter "1.3.1"]
                  [mysql/mysql-connector-java "5.1.32"]
                  [compojure "1.1.6"]
                  [environ "0.5.0"]
                  [hiccup "1.0.4"]
                  [yesql "0.5.0-beta2"]
                  [prismatic/schema "0.3.1"]])
