//création du router
const express = require('express');
const router = express.Router();

//import controllers
const articleCtrl = require('../controllers/article');
//import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const isOwner = require('../middleware/isOwner');

//Routes vers /articles/
router.post('/', auth, multer, articleCtrl.createArticle);
router.get('/', auth, articleCtrl.getAllArticles);
router.delete('/:id', auth, isOwner, articleCtrl.deleteArticle);

//export du router
module.exports = router;