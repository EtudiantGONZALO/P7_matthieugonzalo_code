const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Article = require('../models/article');
const complexity = require('complexity');

const options = {
    uppercase: 1,
    lowercase: 1,
    special: 1,
    digit: 1,
    min: 8
}

const RegEx = complexity.create(options)

//Création d'un compte
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {

            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                isAdmin: false,
            });
            if (true) {
                console.log(user);
                user.save()
                    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                    .catch(error => res.status(400).json({ error }));
            }
            else {
                throw 'Mot de passe trop simple'
            }

        })
        .catch(error => res.status(500).json({ error }));

};

//Connexion
exports.login = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            process.env.TOKEN,
                            { expiresIn: '24h' },
                        ),
                        isAdmin: user.isAdmin,
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));



}


//Récupération d'un utilisateur par id
exports.getOneUser = (req, res, next) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));

}

//Suppression d'un utilisateur
exports.deleteUser = (req, res, next) => {
    console.log('text valide');
    //Suppression des articles créés par cet utilisateur
    Article.destroy({
        where: {
            userId: req.params.id
        }
    })
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé !' }))
        .catch(error => res.status(400).json({ error }));

}

//Récupération de tous les utilisateurs
exports.GetAllUsers = (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
}
