var Backbone = require('backbone');
var UserModal = require('./users/create_account_modal');
var template = require('../templates/body.hbs');

module.exports = Backbone.View.extend({
  tagName: 'body',
  events: {
    'click .open-user-modal': 'openUserModal',
    'click .log-out': 'logOut'
  },

  initialize: function() {
    Everlane.router.bind('loggedIn', function() {
      this.render();
    }.bind(this));
  },

  render: function() {
    var html = template(Everlane.currentUser() ? {currentUser: Everlane.currentUser().toJSON()} : {});
    this.$el.html(html);
    return this;
  },

  openUserModal: function() {
    var userModal = new UserModal();
    this.$el.append(userModal.render().el);
  },

  logOut: function(event) {
    Everlane.logOut();
    Everlane.router.navigate('', {trigger: true});
    this.render();
  }
})
