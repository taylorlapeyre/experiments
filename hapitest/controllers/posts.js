var Post = require('../models/post');

module.exports = {
  index: function(request, reply) {
    Post.find({}, function(err, posts) {
      if (err) {
        reply(err).code(400);
      } else {
        reply(posts);
      }
    })
  },

  show: function(request, reply) {
    Post.findById(request.params.id, function(err, post) {
      if (err) {
        reply(err);
      } else {
        if (post) {
          reply(post);
        } else {
          reply().code(404);
        }
      }
    })
  },

  create: function(request, reply) {
    var post = new Post(request.payload.post);
    post.save(function(err) {
      if (err) {
        reply(err).code(422);
      } else {
        reply(post);
      }
    });
  },

  delete: function(request, reply) {
    Post.find({}).remove(function(err) {
      if (err) {
        reply(err).code(400);
      } else {
        reply();
      }
    })
  }
}
