//crétion du router
const express = require('express');
const router = express.Router();

//import controllers
const articleCtrl = require('../controllers/article');
//import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Routes vers /groupomaniafriend/articles/
router.get('/', auth, articleCtrl.getAllArticles);

router.post('/', auth, multer, articleCtrl.createArticle);

router.post('/:id/like', auth, articleCtrl.likeStatus);

//export du router
module.exports = router;