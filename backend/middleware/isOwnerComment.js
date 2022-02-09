const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const Comment = require('../models/comment');
const User = require('../models/user')



module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        const userId = decodedToken.userId;

        Comment.findAll({
            where: {
                id: req.params.id
            }
        })
            .then(comment => {
                if (comment[0].userId == userId) {
                    next()

                } else {
                    throw 'Invalid user ID';


                }
            })
            .catch(error => res.status(400).json({ error }));

    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }

};
