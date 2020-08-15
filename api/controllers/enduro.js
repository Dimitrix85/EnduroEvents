const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.Enduro.find().sort([['date', 1]])
            .then((user) => res.send(user))
            .catch((err) => res.status(500).send("Error"))
    },
    post: (req, res, next) => {
        const { startPoint, date, skillLevel, author } = req.body
        models.Enduro.create({ startPoint, date, skillLevel, author })
            .then(data => {
                res.send(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
}
