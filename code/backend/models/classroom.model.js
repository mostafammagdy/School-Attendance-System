const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  classname: { type: String, required: true },

}, {
  timestamps: true,
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;