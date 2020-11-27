const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const enrolledSchema = new Schema({
  username: { type: String, required: true },
  role: { type: String, required: true },
  classname: { type: String, required: true },

}, {
  timestamps: true,
});

const Enrolled = mongoose.model('Enrolled', enrolledSchema);

module.exports = Enrolled;