const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.findById(req.query.id)
        .then((user) => res.send(user))
        .catch((err) => res.status(500).send("Error"))
    },

    post: {
        register: (req, res, next) => {
            const { username, password } = req.body;
            models.User.create({ username, password })
                .then((createdUser) => {
                    const token = utils.jwt.createToken({ id: createdUser._id });
                    res.header("Authorization", token).send(createdUser);
                })
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.header("Authorization", token).send(user);
                })
                .catch(next);
        },
        verify: (req, res, next) =>{
            const token = req.body.token || '';

              utils.jwt.verifyToken(token)
              .then((data) => {
                  models.User.findById(data.id)
                      .then((user) => {
                          return res.send({
                            status: true,
                            user
                          })
                      });
              })
              .catch(err => {
                  if (!redirectAuthenticated) { next(); return; }
                  
                  res.send({
                    status: false
                  })
              })
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};