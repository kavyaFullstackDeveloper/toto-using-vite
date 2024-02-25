const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false
    },
    deadline: {
        type: Object,
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("task", taskSchema);
