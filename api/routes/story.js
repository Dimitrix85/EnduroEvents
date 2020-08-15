const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.story.get.all);

router.get('/top', controllers.story.get.top);

router.get('/details', controllers.story.get.details);

router.post('/', auth, controllers.story.post);

router.put('/:id', controllers.story.put)

module.exports = router;