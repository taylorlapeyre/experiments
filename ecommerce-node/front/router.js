var $                = require('jquery');
var Backbone         = require('backbone');
var StylesController = require('./controllers/styles');
Backbone.$           = $;

module.exports = Backbone.Router.extend({
  routes: {
    "":                  StylesController.index,
    "styles/:permalink": StylesController.show,
    // "users/new": UsersController.new,
    // "login":     UsersController.logIn
  }
})
