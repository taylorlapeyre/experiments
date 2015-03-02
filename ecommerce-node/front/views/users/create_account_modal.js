var Backbone = require('backbone');
var User     = require('../../models/user');
var template = require('../../templates/users/create_account_modal.hbs');

module.exports = Backbone.View.extend({
  className: 'user-modal',
  events: {
    'click .create-account': 'createUser',
    'click .log-in': 'logInUser'
  },

  render: function() {
    this.$el.html(template({}));
    return this;
  },

  createUser: function(event) {
    event.preventDefault();
    var $form = this.$('.user-form');

    var user = new User({
      email: $form.find('.email').val(),
      password: $form.find('.password').val()
    });

    user.save().then(function() {
      user.logIn().then(function() {
        this.remove();
      }.bind(this));
    }.bind(this));
  },

  logInUser: function(event) {
    event.preventDefault();
    var $form = this.$('.login-form');

    var user = new User({
      email: $form.find('.email').val(),
      password: $form.find('.password').val()
    });

    user.fetch().then(function() {
      user.logIn().then(function() {
        this.remove();
      }.bind(this));
    }.bind(this));
  }
})
