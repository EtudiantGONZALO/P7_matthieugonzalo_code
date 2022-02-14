//crétion du router
const express = require('express');
const router = express.Router();

//import controllers
const articleCtrl = require('../controllers/article');
//import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


//Routes vers /articles/
router.post('/', auth, multer, articleCtrl.createArticle);
router.get('/', auth, articleCtrl.getAllArticles);
router.get('/:id', articleCtrl.getOneArticle);

//export du router
module.exports = router;