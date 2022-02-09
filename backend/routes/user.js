//crétion du router
const express = require('express');
const router = express.Router();

//import du controllers et middleware
const userCtrl = require('../controllers/user');
const isAdmin = require('../middleware/isAdmin');

//routes vers /groupomaniafriend/auth/
router.post('/signup', userCtrl.signup);
router.delete('/users/:id', isAdmin, userCtrl.deleteUser);
router.post('/login', userCtrl.login);

//export du router
module.exports = router;