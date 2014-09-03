var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hapitest');

module.exports = mongoose.model('Post',{
  content: {
    type: String,
    required: true
  }
});
