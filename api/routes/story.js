const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.story.get.all);

router.get('/top', controllers.story.get.top);

router.post('/', controllers.story.post);

module.exports = router;