const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user)

    app.use('/api/story', router.story)

    app.use('/api/enduro', router.enduro)

    app.use('/api/utils', router.utils)

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};