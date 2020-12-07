const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminsSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, requred: true},
  regular: { type: Boolean, required: true },
}, {
  timestamps: true,
});

const Admins = mongoose.model('Admins', adminsSchema);

module.exports = Admins;