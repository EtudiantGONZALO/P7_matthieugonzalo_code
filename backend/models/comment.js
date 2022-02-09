const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../db.config')
const User = require('../models/user');
const Article = require('./article');


const Comment = sequelize.define('Comment', {
    userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articleId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    }
}
);
User.hasMany(Comment, {
    foreignKey: 'userId',
});
Article.hasMany(Comment, {
    foreignKey: 'articleId',
});

Comment.belongsTo(User, { as: 'user' });
Comment.belongsTo(Article, { as: 'article' });


module.exports = Comment;