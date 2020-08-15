const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model
const { String, Number, ObjectId } = Schema.Types

const storySchema = new Schema({
    title: {
        type: String,
        requre: true
    },
    description: {
        type: String,
        requre: true
    },
    img: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    },
    likes: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    author: {
        type: ObjectId,
        ref: 'User'
    }
}, { timestamps: { createdAt: 'created_at' } })
module.exports = new Model('Story', storySchema)