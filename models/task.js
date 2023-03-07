const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be void'],
        trim : true,
        maxlength : [20, 'Name can not exceed 20 character limit']
    },
    isCompleted : {
        type: Boolean,
        default : false
    }
})

module.exports = mongoose.model('Task', TaskSchema)