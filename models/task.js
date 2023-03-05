const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String,
    isCompleted : Boolean,
})

module.exports = mongoose.model('Task', TaskSchema)