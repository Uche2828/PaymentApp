const mongoose = require('mongoose');

const Account = mongoose.model('Account', new mongoose.Schema({
  id: String,
  name: String,
  balance: {
    default: 50,
    type: Number,
  },
}));

module.exports = { Account };