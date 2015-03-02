var mongoose = require('mongoose');
require('./style');

// A Variant is a single variation of a style. It's a sku.
// Example: Medium Blue Mens Poplin Button Down.
var variantSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  sku: {
    type: String,
    required: true,
    unique: true
  },
  style: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Style'
  },
  color: String,
  size: String
});

module.exports = mongoose.model('Variant', variantSchema);
