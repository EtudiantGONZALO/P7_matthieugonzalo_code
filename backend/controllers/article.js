const Article = require('../models/article');
const User = require('../models/user');
const fs = require('fs');


//Création d'un post
exports.createArticle = (req, res, next) => {
    if (req.body) {
        const articleObject = { ...req.body };
        if (req.file) {
            const article = new Article({
                ...articleObject,
                imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            });
            saveArticle(article);
        }
        else {
            const article = new Article({
                ...articleObject,
            });
            saveArticle(article);
        }
        function saveArticle(article) {
            article.save()
                .then(() => res.status(201).json({ message: 'Article créé !' }))
                .catch(error => res.status(400).json({ error }))
        }
    }


}

//Récupération d'un post spécifique par id
exports.getOneArticle = (req, res, next) => {
    Article.findOne({
        where: { id: req.params.id },
        include: [{ model: User, as: 'user' }],
    })
        .then(article => res.status(200).json(article))
        .catch(error => res.status(404).json({ error }));
}

//Récupération de tous les posts
exports.getAllArticles = (req, res, next) => {
    Article.findAll(
        { include: [{ model: User, as: 'user' }] })
        .then(articles => res.status(201).json(articles))
        .catch(error => res.status(400).json({ error }));
}