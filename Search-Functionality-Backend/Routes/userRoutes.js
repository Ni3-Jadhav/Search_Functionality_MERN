const express = require('express');

const userController = require('../Controller/userController');

const router = express.Router();

router.post('/newUser', userController.newUser);

router.get('/searchUser', userController.searchUser);


module.exports = router;
