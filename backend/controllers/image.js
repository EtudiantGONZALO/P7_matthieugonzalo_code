const Img = require('../models/article');
const User = require('../models/user');
const fs = require('fs');


//Création d'un post
exports.createImg = (req, res, next) => {
    if (req.body) {
        const imgObject = { ...req.body };
        if (req.file) {
            const img = new Img({
                ...imgObject,
                imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            });
            saveImg(img);
        }
        else {
            const img = new Img({
                ...imgObject,
            });
            saveImg(img);
        }
        function saveImg(img) {
            img.save()
                .then(() => res.status(201).json({ message: 'Image créée !' }))
                .catch(error => res.status(400).json({ error }))
        }
    }


}

//Récupération d'un post spécifique par id
exports.getOneImg = (req, res, next) => {
    Img.findOne({
        where: { id: req.params.id },
        include: [{ model: User, as: 'user' }],
    })
        .then(img => res.status(200).json(img))
        .catch(error => res.status(404).json({ error }));
}

//Récupération de tous les posts
exports.getAllImgs = (req, res, next) => {
    Img.findAll(
        { include: [{ model: User, as: 'user' }] })
        .then(imgs => res.status(201).json(imgs))
        .catch(error => res.status(400).json({ error }));
}