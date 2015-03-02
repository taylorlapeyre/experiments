var mongoose = require('mongoose');

// If a model is related to another model, it must require it so that
// we know what we're talking about in the Schema.
require('./variant');

// A Style is like a product. For example, Mens Poplin Button Downs are
// a style. They are anything that can have multiple colors and sizes.
var styleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  permalink: {
    type: String,
    required: true,
    unique: true
  },
  variants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Variant'
  }],
  shortName: String,
  waitlistable: Boolean,
  price: Number
});

module.exports = mongoose.model('Style', styleSchema);
