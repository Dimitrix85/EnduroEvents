const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const length = req.query.length ? parseInt(req.query.length) : 20
        models.Story.find().limit(length).populate('author')
            .then((stories) => res.send(stories))
            .catch(next);
    }
}