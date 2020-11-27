const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parentSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, requred: true},
  student: { type: String, required: true },
}, {
  timestamps: true,
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;