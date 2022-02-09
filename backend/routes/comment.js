const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');
const isOwnerComment = require('../middleware/isOwnerComment');


router.post('/', auth, commentCtrl.createComment);
router.get('/:id', auth, commentCtrl.getCommentsByArticle);
router.get('/', auth, commentCtrl.getAllComments);
router.delete('/:id', auth, isOwnerComment, commentCtrl.deleteComment);

module.exports = router;