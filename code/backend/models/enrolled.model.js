const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const enrolledSchema = new Schema({
  name: { type: String, required: true },
  studentID: {type: String},
  role: { type: String, required: true },
  classname: { type: String, required: true },

}, {
  timestamps: true,
});

const Enrolled = mongoose.model('Enrolled', enrolledSchema);

module.exports = Enrolled;