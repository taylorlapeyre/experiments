var PostsController  = require('./controllers/posts');
var StaticController = require('./controllers/static');

module.exports = [
  {
    method:  'GET',
    path:    '/',
    handler: StaticController.home,
    config: {
      description: "Provides documentation of the API."
    }
  },
  {
    method:  'GET',
    path:    '/posts',
    handler: PostsController.index,
    config: {
      description: "Returns all posts in the database.",
      notes: "Takes an optional `limit` parameter."
    }
  },
  {
    method:  'GET',
    path:    '/posts/{id}',
    handler: PostsController.show,
    config: {
      description: "Returns a single post in the database.",
      notes: "Requires a valid mongo id."
    }
  },
  {
    method:  'POST',
    path:    '/posts',
    handler: PostsController.create,
    config: {
      description: "Creates a new post.",
      notes: "Requires a `post` object with a `content` field"
    }
  },
  {
    method:  'DELETE',
    path:    '/posts',
    handler: PostsController.delete,
    config: {
      description: "Deletes all posts in the database.",
      notes: "Beware: this will delete all posts."
    }
  }
]
