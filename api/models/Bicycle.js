const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model
const { String, ObjectId } = Schema.Types

const bicycleSchema = new Schema({
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

module.exports = new Model('Bicycle', bicycleSchema)