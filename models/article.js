const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize.js');

const Article = sequelize.define(
    'Article',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_published: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        tag: {
            type: DataTypes.STRING
        }
    }
);

module.exports = Article;