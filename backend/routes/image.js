//crétion du router
const express = require('express');
const router = express.Router();

//import controllers
const imageCtrl = require('../controllers/image');
//import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


//Routes vers /articles/
router.post('/', auth, multer, imageCtrl.createImage);
router.get('/', auth, imageCtrl.getAllImage);

//export du router
module.exports = router;