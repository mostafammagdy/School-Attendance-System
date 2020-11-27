const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, requred: true},
  regular: { type: Boolean, required: true },
}, {
  timestamps: true,
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;