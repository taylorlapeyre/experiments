var Hapi       = require('hapi');
var Good       = require('good');
var Handlebars = require('handlebars');
var mongoose   = require('mongoose');
var routes     = require('./routes');

// This is where we create the server and specify where the views
// will be located.
var inProd = process.env.PORT
var port   = process.env.PORT || 8000;
var server = new Hapi.Server(port, {
  views: {
    engines: { html: Handlebars },
    // this is the only place where the front and back end codebases meet.
    path: __dirname + '/../front'
  }
});

server.route(routes);

// Good is just a logging utility.
server.pack.register(Good, function(err) {
  if (err) { throw err };

  server.start(function () {
    // start the server and connect to the database.
    mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/everlane');
    server.log('Server running at: ', server.info.uri);
  });
});

module.exports = server;
