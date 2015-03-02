var $        = require('jquery');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/api/users',

  logIn: function() {
    return $.ajax({
      url: '/api/authenticate',
      method: 'POST',
      data: {
        username: this.get('username'),
        password: this.get('password')
      },
      success: function(data) {
        this.set('key', data.key);
        localStorage.setItem('currentUser', JSON.stringify(this.attributes));
      }.bind(this)
    });
  }
})
