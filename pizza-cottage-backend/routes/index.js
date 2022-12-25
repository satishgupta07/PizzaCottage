const express = require('express');
const loginController = require('../controllers/auth/loginController');
const registerController = require('../controllers/auth/registerController');
const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);

module.exports = router;