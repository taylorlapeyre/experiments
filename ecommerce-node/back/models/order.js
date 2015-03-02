var mongoose = require('mongoose');

require('./user');
require('./variant');

var orderSchema = mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  total: Number,
  state: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  variants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Variant'
  }]
});

module.exports = mongoose.model('Order', orderSchema);
