const express = require('express');
const loginController = require('../controllers/auth/loginController');
const refreshController = require('../controllers/auth/refreshController');
const registerController = require('../controllers/auth/registerController');
const userController = require('../controllers/auth/userContoller');
const productContoller = require('../controllers/productController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/currentloginuser', auth, userController.getCurrentLoginUser);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout)

router.post('/products', [auth, admin], productContoller.store);

module.exports = router;