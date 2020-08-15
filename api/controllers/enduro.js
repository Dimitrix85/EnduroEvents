const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.Enduro.find()
            .then((user) => res.send(user))
            .catch((err) => res.status(500).send("Error"))
    },
    post: (req, res, next) => {
        const { startPoint, date, skillLevel, author, created_at } = req.body
        models.Enduro.create({ startPoint, date, skillLevel, author, created_at })
            .then(data => {
                res.send(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
}
