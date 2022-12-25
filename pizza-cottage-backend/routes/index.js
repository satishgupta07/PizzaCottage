const express = require('express');
const loginController = require('../controllers/auth/loginController');
const refreshController = require('../controllers/auth/refreshController');
const registerController = require('../controllers/auth/registerController');
const userController = require('../controllers/auth/userContoller');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/currentloginuser', auth, userController.getCurrentLoginUser);
router.post('/refresh', refreshController.refresh);

module.exports = router;