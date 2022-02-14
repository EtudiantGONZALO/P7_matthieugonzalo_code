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

