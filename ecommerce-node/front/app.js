var $         = require('jquery');
var Backbone  = require('backbone');
var Router    = require('./router');
var User      = require('./models/user');
var Body      = require('./views/body');

// This is the only global variable in the codebase.
Everlane = {
  router: new Router(),

  activate: function(view) {
    $('.page').html(view.render().el);
  },

  // This is how sessions are stored. I'm using localStorage, but you
  // could also just use cookies.
  currentUser: function() {
    if (localStorage.getItem('currentUser')) {
      if (!this.currentUserModel) {
        this.currentUserModel = new User(JSON.parse(localStorage.getItem('currentUser')));
      }
      return this.currentUserModel;
    } else {
      return null;
    }
  },

  logOut: function() {
    localStorage.removeItem('currentUser');
    this.currentUserModel = null;
    return true;
  },

  // Yes, the actual <body> of the page is itself a Backbone view.
  blastOff: function() {
    this.body = new Body();
    $('html').append(this.body.render().el);
    return Backbone.history.start();
  }
}

// Let's gooo
Everlane.blastOff();
