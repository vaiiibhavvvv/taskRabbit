import mongoose from "mongoose";

 const taskSchema = new mongoose.Schema({

        title: {
            type: String,
            require: true
        },

        description: {
            type: String
        },

        status: {
            type: String,
            enum: ['pending','in-progress','completed'],
            default: 'pending'
        },

        dueDate: {
            type: Date,
            require: true
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }

});

module.exports = mongoose.model('Task',taskSchema);