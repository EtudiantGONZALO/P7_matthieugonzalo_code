const User = require('../models/user');
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../db.config');

const Image = sequelize.define('Image', {
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }
}
)

User.hasMany(Image, {
    foreignKey: 'userId',
});


Image.belongsTo(User, { as: 'user' });


module.exports = Image;