const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../db.config');
const Article = require('../models/article');

const User = sequelize.define('User', {
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN
    }
}
);


module.exports = User;
