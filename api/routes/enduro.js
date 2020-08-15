const controllers = require('../controllers/')
const router = require('express').Router()
const { auth } = require('../utils')

router.get('/', controllers.enduro.get)

router.post('/', controllers.enduro.post)

router.put('/:id', controllers.enduro.put)

module.exports = router;