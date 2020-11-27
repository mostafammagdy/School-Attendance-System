const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendenceSchema = new Schema({
    classname: { type: String, required: true},
    name: { type: String, required: true},
    status: { type: String, required: true },
}, {
        timestamps: true,
    });

const Attendence = mongoose.model('Attendence', attendenceSchema);

module.exports = Attendence;