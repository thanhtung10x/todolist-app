const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Task = new Schema({

    nameTask: { type: String },
    isCompleted: { type: Boolean },

});

module.exports = mongoose.model('Task', Task);