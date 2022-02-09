const Article = require('../models/article');
const User = require('../models/user');
const Comment = require('../models/comment')
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

//Suppression d'un post
exports.deleteArticle = (req, res, next) => {
    Article.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(article => {
            //On vérifie si le post contient une image
            if (article.imageUrl != '' || article.imageUrl != null) {
                const filename = article.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    destroyArticle(article)
                });
            }
            else {
                destroyArticle();
            }
        })
        .catch(error => res.status(500).json({ error }));

    function destroyArticle() {
        //Suppresion des commentaires liés à ce post
        Comment.destroy({
            where: {
                articleId: req.params.id
            }
        })
        Article.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
            .catch(error => res.status(400).json({ error }));
    }
};

//Mofification d'un post
exports.modifyArticle = (req, res, next) => {
    //On vérifie si l'utilisateur modifie l'image du post
    if (req.file) {
        Article.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(article => {
                const filename = article.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, (err) => {
                    if (err) throw err;
                })
            })
            .catch(error => res.status(400).json({ error }));
    }


    const articleObject = req.file ?
        {
            ...req.body,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };


    Article.update({ ...articleObject, id: req.params.id },
        {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

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