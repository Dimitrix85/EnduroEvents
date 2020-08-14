const models = require('../models');
const { model, Collection } = require('mongoose');

module.exports = {
    get: {
        all: (req, res, next) => {
            const length = req.query.length ? parseInt(req.query.length) : 20
            models.Story.find().limit(length).populate('author')
                .then((stories) => res.send(stories))
                .catch(next);
        },
        top: (req, res, next) => {
            models.Story.find().sort([['likes', -1]]).limit(2).populate('author')
                .then(stories => res.send(stories))
                .catch(next)
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