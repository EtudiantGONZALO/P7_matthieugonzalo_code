//crétion du router
const express = require('express');
const router = express.Router();

//import du controllers et middleware
const userCtrl = require('../controllers/user');
const isAdmin = require('../middleware/isAdmin');

//routes vers /groupomaniafriend/auth/
router.post('/signup', userCtrl.signup);
router.get('/users', isAdmin, userCtrl.GetAllUsers);
router.delete('/users/:id', isAdmin, userCtrl.deleteUser);
router.get('/user/:username', userCtrl.getOneUserByUsername);
router.get('/users/:id', userCtrl.getOneUser);
router.post('/login', userCtrl.login);

//export du router
module.exports = router;