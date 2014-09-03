var Hapi       = require('hapi');
var Good       = require('good');
var Handlebars = require('handlebars');
var routes     = require('./routes');

var server = new Hapi.Server(3000, {
  views: {
    engines: { html: Handlebars },
    path: __dirname + '/templates'
  }
});

server.route(routes);

server.pack.register(Good, function(err) {
  if (err) { throw err };

  server.start(function () {
    server.log('Server running at:', server.info.uri);
  });
});
