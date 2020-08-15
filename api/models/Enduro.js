const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model
const { String, ObjectId } = Schema.Types

const enduroSchema = new Schema({
    startPoint: {
        type: String,
        required: true
    },
    date: {
        type: String,
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
    }]
}
    , { timestamps: { createdAt: 'created_at' } })
module.exports = new Model('Enduro', enduroSchema)