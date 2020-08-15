const models = require('../models');
const { model, Collection } = require('mongoose');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Story.find().sort([['created_at', -1]]).populate('author')
                .then((stories) => res.send(stories))
                .catch(next);
        },
        top: (req, res, next) => {
            models.Story.find().sort([['like', -1]]).limit(2).populate('author')
                .then(stories => res.send(stories))
                .catch(next)
        },
        details: (req, res, next) => {
            models.Story.findById(req.query.id).populate('author')
                .then((story) => res.send(story))
                .catch((err) => res.status(500).send("Error"))
        }
    },
    put: async (req, res, next) => {
        const id = req.params.id
        const { userId } = req.body

        await models.Story.update({ _id: id }, {
            $addToSet: {
                likes: [userId]
            }, $inc: {
                like: 1
            }
        })

        models.Story.findById(id)
            .then(story => res.send(story))

    },
    post: (req, res, next) => {
        const { title, description, img, author } = req.body
        models.Story.create({ title, description, img, author })
            .then(data => {
                res.send(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
}