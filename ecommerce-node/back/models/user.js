var mongoose = require('mongoose');

// Users are really basic right now.
var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  password: String,
  firstName: String,
  lastName: String,
  braintreeCustomerID: Number
});

module.exports = mongoose.model('User', userSchema);
