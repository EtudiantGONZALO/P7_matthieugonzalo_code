const Comment = require('../models/comment');
const User = require('../models/user')

//Création d'un commentaire
exports.createComment = (req, res, next) => {

    const commmentObject = { ...req.body };
    const comment = new Comment({
        ...commmentObject,
    });
    comment.save()
        .then(() => res.status(201).json({ message: 'Commentaire créé !' }))
        .catch(error => res.status(400).json({ error }))
}

//Récupération de tous les commentaires
exports.getAllComments = (req, res, next) => {
    Comment.findAll()
        .then(comments => res.status(201).json(comments))
        .catch(error => res.status(400).json({ error }));
}

//Récupération des commentaires d'un article spécifique
exports.getCommentsByArticle = (req, res, next) => {
    Comment.findAll({
        where: {
            articleId: req.params.id
        },
        include: [{ model: User, as: 'user' }]
    })
        .then(comments => res.status(201).json(comments))
        .catch(error => res.status(400).json({ error }));
}

//Suppression d'un commentaire
exports.deleteComment = (req, res, next) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé !' }))
        .catch(error => res.status(400).json({ error }));
}