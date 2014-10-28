# Clojure News

A simple news website written in Clojure, inspired by [hn-clojure](https://github.com/taylorlapeyre/hn-clojure).

## Code Organization

Clojure News follows a structure that loosely follows MVC. It's strongly influenced by Rails. In leu of classes, there are simply namespaces: an organized collection of procedures.

### Models

The only parts of the application that are not written as [pure functions](http://en.wikipedia.org/wiki/Pure_function) are the models, which are implemented with [yesql](https://github.com/krisajenkins/yesql). Put simply, each model defines some SQL functions that it can call. The SQL is stored in /resources/sql. I use MySQL.

The names of the SQL functions are loosely based on the API of [ActiveRecord](http://api.rubyonrails.org/classes/ActiveRecord/Base.html).

### Views

Instead of using HTML, views are written in [Hiccup](https://github.com/weavejester/hiccup), which simply expresses HTML as nested vecors (arrays). A "view" is just a function that returns an array. Hiccup transforms the final structure into an HTML string.

### Controllers

Controllers are simply functions that render views with data provided from the models. They are named according to Rails conventions.

### Routing

Routing is done via the excellent [compojure](https://github.com/weavejester/compojure) library. The routes are defined in `clojurenews.core`.

## Getting It Running

1. Make sure that you have **Java** installed.

2. Make sure that you have MySQL installed and running.

3. Install [leiningen](http://leiningen.org).

4. Create a database called "testdb" (this will change in the future).

5. To create the necessary tables, start up a REPL with `lein repl` and execute the prodedure: `(clojurenews.database/create-tables)`.

6. Exit the REPL and run `$ lein run`.

## Licence

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
