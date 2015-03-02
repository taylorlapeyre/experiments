var $        = require('jquery');
var Backbone = require('backbone');
var template = require('../../templates/styles/show.hbs');

module.exports = Backbone.View.extend({
  className: 'show-post',

  render: function() {
    this.$el.html(template({style: this.model}));
    return this;
  },
})
