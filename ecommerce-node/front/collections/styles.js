var Backbone = require('backbone');
var Style    = require('../models/style');

module.exports = Backbone.Collection.extend({
  url: '/api/styles',
  model: Style,

  // fetch: function() {
  //   if (window.bootstrappedData.styles) {
  //     return {
  //       then: function() { callback(window.bootstrappedData.styles); }
  //     }
  //   } else {
  //     return this.__super__.fetch.apply(this, arguments);
  //   }
  // }
});
