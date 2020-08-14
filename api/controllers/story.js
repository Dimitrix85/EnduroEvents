const models = require('../models');
const { model, Collection } = require('mongoose');

module.exports = {
    get: {
        all: (req, res, next) => {
            // const length = req.query.length ? parseInt(req.query.length) : 20
            models.Story.find().sort([['created_at', -1]]).populate('author')
                .then((stories) => res.send(stories))
                .catch(next);
        },
        top: (req, res, next) => {
            models.Story.find().sort([['likes', -1]]).limit(2).populate('author')
                .then(stories => res.send(stories))
                .catch(next)
        },
        details: (req, res, next) => {
            models.Story.findById(req.query.id)
            .then((story) => res.send(story))
            .catch((err) => res.status(500).send("Error"))
        }
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