var Style      = require('../models/style');
var Styles     = require('../collections/styles');
var IndexView  = require('../views/styles/index');
var ShowView   = require('../views/styles/show');

// "Wait, backbone doesn't have controllers!", you gasp. Fear not.
// Just like in the backend, "controllers" are just regular javascript.
// The functions in here assume that they are callbacks to Backbone.Route.
module.exports = {
  index: function() {
    var styles = new Styles();
    styles.fetch().then(function() {
      var view = new IndexView({collection: styles});
      Everlane.activate(view);
    });
  },

  show: function(permalink) {
    var style = new Style({permalink: permalink});
    style.fetch().then(function() {
      var view = new ShowView({model: style});
      Everlane.activate(view);
    })
  }
}
