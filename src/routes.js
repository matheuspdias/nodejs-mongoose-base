const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');

router.get('/ping', UserController.ping);
router.post('/users', UserController.getUsers);

module.exports = router;