var mongoose = require('mongoose');

// Collections are just... collections - of styles. Just a container, that's all.
var collectionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  styles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Style'
  }]
});

module.exports = mongoose.model('Collection', collectionSchema);
