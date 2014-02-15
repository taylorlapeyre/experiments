var restify  = require('restify');
var userSave = require('save')('user')

var server = restify.createServer({name: 'my-api'});
server.use(restify.fullResponse()).use(restify.bodyParser());

server.listen(4242, function() {
  console.log("%s listening at %s", server.name, server.url)
});

var usersController = {
  index: function(req, res, next) {
    userSave.find({}, function (error, users) {
      res.send(users)
    });
  },
  show: function(req, res, next) {
    userSave.findOne({_id: req.params.id }, function(error, user) {
      if (error) {
        return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
      } else {
        if (user) {
          res.send(user);
        } else {
          res.send(404);
        }
      }
    });
  },
  create: function(req, res, next) {
    if (req.params.name === undefined) {
      return next(new restify.InvalidArgumentError('Name must be supplied'))
    }
    userSave.create({ name: req.params.name }, function(error, user) {
      if (error) {
        return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
      } else {
        res.send(201, user);
      }
    });
  },
  update: function(req, res, next) {
    if (req.params.name === undefined) {
      return next(new restify.InvalidArgumentError('Name must be supplied'))
    }
    userSave.update({ _id: req.params.id, name: req.params.name }, function(error, user) {
      if (error) {
        return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
      } else {
        res.send();
      }
    });
  },
  delete: function(req, res, next) {
    userSave.delete(req.params.id, function(error, user) {
      if (error) {
        return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
      } else {
        res.send();
      }
    });
  }
}

/* Define our routes */
server.get('/users', usersController.index);
server.post('/users', usersController.create);
server.get('/users/:id', usersController.show);
server.put('/users/:id', usersController.update);
server.del('users/:id', usersController.delete);
