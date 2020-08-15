const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        const dateTimeNow = new Date();
        const dateString = dateTimeNow.toISOString().slice(0, 16)
        models.Enduro.find({ date: { $gte: dateString } }).sort([['date', 1]])
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
    },
    put: async (req, res, next) => {
        const id = req.params.id
        const { userId } = req.body

        await models.Enduro.update({ _id: id }, {
            $addToSet: {
                participants: [userId]
            }
        })
        const dateTimeNow = new Date();
        const dateString = dateTimeNow.toISOString().slice(0, 16)
        await models.Enduro.find({ date: { $gte: dateString } }).sort([['date', 1]])
            .then((user) => res.send(user))
            .catch((err) => res.status(500).send("Error"))

    }
}
