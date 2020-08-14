const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model
const { String, ObjectId, Date } = Schema.Types

const motorcycleSchema = new Schema({
    startPoint: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    skillLevel: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: 'User'
    },
    participants: [{
        type: ObjectId,
        ref: 'User'
    }],
    created_at: {
        type: String,
        required: true
    }
})
module.exports = new Model('Motorcycle', motorcycleSchema)