const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.route('/').get(someController.someFunction);

module.exports = router;
