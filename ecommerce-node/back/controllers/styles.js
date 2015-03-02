var Style = require('../models/style');

module.exports = {
  index: function(request, reply) {

    // Document databases don't really have the same concepts of things like
    // "has_many", etc. Instead, a model can "populate" one of its fields
    // with other models that match its ID.
    Style.find().populate('variants').exec(function(err, posts) {
      if (err) {
        reply(err).code(400);
      } else {
        reply(posts);
      }
    });
  },

  show: function(request, reply) {
    Style.find({permalink: request.params.permalink})
         .populate('variants')
         .exec(function(err, post) {
      if (err) {
        reply(err);
      } else {
        if (post) {
          reply(post);
        } else {
          reply().code(404);
        }
      }
    });
  }
}
