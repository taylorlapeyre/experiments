var User = require('../models/user')

module.exports = {

  // This is how a user logs in. When we get a username and password,
  // we find that user's token and respond with it.

  // Obviously, this implementation is not safe. But it's not hard to encrypt
  // all of this stuff.
  authenticate: function(request, reply) {
    User.findOne({
      username: request.payload.username,
      password: request.payload.password
    }, function(err, user) {
      if (err) {
        reply().code(500)
      } else {
        if (user) {
          reply({token: user.token});
        } else {
          reply().code(403);
        }
      }
    })
  }
}
