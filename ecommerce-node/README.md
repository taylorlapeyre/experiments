## Ecommerce on Node

**Note:** This implementation is incomplete.

### What?

This is an experimentation of what it might be like to write a functioning ecommerce codebase using Node.js.

### Why?

I'm curious of what a Node stack is capable of and how mature its ecosystem is. As a challenge, I thought that this would be a great way to explore this area.

### The Stack

#### Back End

| Tool              | Node Solution | Rails Solution |
|-------------------|---------------|----------------|
| Language          | Javascript    | Ruby           |
| Web Framework     | Hapi          | Rails          |
| Database          | MongoDB       | MySQL          |
| ODM               | Mongoose      | ActiveRecord   |
| Testing Framework | Mocha         | Rspec          |

#### Front End

| Tool                | Node Solution | Rails Solution |
|---------------------|---------------|----------------|
| Language            | Javascript    | Coffeescript   |
| Framework           | Backbone      | Chaplin        |
| Templating Language | Handlebars    | Handlebars     |
| Moduling Solution   | Browserify    | Sprockets      |
| CSS Preprocessor    | Myth          | Sass           |

### Getting Set Up

You'll need:

-  The latest node.js.

``` bash
$ which node || brew install node
```

- A locally running instance of MongoDB.

```
$ which mongo || brew install mongodb
$ mongod --config /usr/local/etc/mongod.conf
```

- Grunt

``` bash
$ npm install grunt-cli -g
```

### Developing

**To run the website locally, run:**

``` bash
$ cd everlane-node
$ grunt
```

This will also start up a few processes that will watch for file changes and recompile things as needed.

Finally, I've provided a way to have a `rails c`-like console. Run:

``` bash
./back/bin/console
ecommerce > User
.. (lots of stuff)
```
