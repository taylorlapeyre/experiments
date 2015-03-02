var User = require('../models/user');
var uuid = require('node-uuid');

// "controllers" are just regular javascript objects.
// There is nothing special about their functions, other than the fact
// that they assume that they are callbacks to Hapi routes.

module.exports = {
  create: function(request, reply) {
    var user = new User(request.payload);
    user.token = uuid.v4();
    user.save(function(err) {
      if (err) throw err;
      reply(user);
    });
  }
}
