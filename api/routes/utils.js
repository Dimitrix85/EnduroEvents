const controllers = require('../controllers/');
const router = require('express').Router();

router.post('/upload', controllers.utils.post.upload);

module.exports = router;