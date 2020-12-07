const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const secretarySchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, requred: true},
  school: { type: String, requred: true},
}, {
  timestamps: true,
});

const Secretary = mongoose.model('Secretary', secretarySchema);

module.exports = Secretary;