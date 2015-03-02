var Backbone = require('backbone');
var template = require('../../templates/styles/index.hbs');

module.exports = Backbone.View.extend({
  className: 'styles-index',

  render: function() {
    this.$el.html(template({styles: this.collection.toJSON()}));
    return this;
  }
})
