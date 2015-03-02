var StylesController         = require('./controllers/styles');
var UsersController          = require('./controllers/users');
var StaticController         = require('./controllers/static');
var AuthenticationController = require('./controllers/authentication');

// the `config` property is optional, but recommended. You can generate
// documentation with it. There's some package or something.
module.exports = [
  {
    method:  'GET',
    path:    '/api/styles',
    handler: StylesController.index,
    config: {
      description: "Returns all styles in the database.",
      notes: "Takes an optional `limit` parameter."
    }
  },
  {
    method:  'GET',
    path:    '/api/styles/{permalink}',
    handler: StylesController.show,
    config: {
      description: "Returns a single style in the database.",
      notes: "Requires a valid permalink."
    }
  },
  {
    method:  'POST',
    path:    '/api/users',
    handler: UsersController.create,
    config: {
      description: "Creates a new user.",
      notes: "Requires a `user` object with a `content` field"
    }
  },
  {
    method:  'POST',
    path:    '/api/authenticate',
    handler: AuthenticationController.authenticate,
    config: {
      description: "Give a valid username and password and receive that user's API token.",
      notes: "Requires a username and password, sends back `token`."
    }
  },
  {
    method:  'GET',
    path:    '/',
    handler: StaticController.index,
    config: {
      description: "Kicks off the front end application."
    }
  },
  {
    method:  'GET',
    path:    '/front/{path*}',
    handler: {
      directory: { path: './front' }
    },
  },
  {
    method:  'GET',
    path:    '/{path*}',
    handler: StaticController.index,
    config: {
      description: "Kicks off the front end application."
    }
  },
]
