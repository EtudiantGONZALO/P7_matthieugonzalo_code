const User = require('../models/user');
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../db.config')

const Article = sequelize.define('Article', {
    userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 150]
        }
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }
}
);


User.hasMany(Article, {
    foreignKey: 'userId',
});


Article.belongsTo(User, { as: 'user' });


module.exports = Article;
