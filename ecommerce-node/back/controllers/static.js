var getBootstrappedData = require('../bootstrappedData');

module.exports = {
  index: function(request, reply) {
    // See bootstrappedData.js for documentation on how this works.
    getBootstrappedData(function(data) {
      reply.view('index', {
        data: JSON.stringify(data)
      });
    });
  }
}
