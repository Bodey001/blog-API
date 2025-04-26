const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize.js');


/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The article ID
 *           readOnly: true
 *         title:
 *           type: string
 *           description: The article title
 *         content:
 *           type: string
 *           description: The article content
 *         date_published:
 *           type: string
 *           format: date-time
 *           description: The publication date
 *           example: "2023-10-27T11:30:00.000Z"
 *         tag:
 *           type: array
 *           description: The article tags
 *           items:
 *             type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the article was created
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the article was last updated
 *           readOnly: true
 *     ArticleInput:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The article title
 *         content:
 *           type: string
 *           description: The article content
 *         tag:
 *           type: array
 *           description: The article tags
 *           items:
 *             type: string
 */

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
            type: DataTypes.JSON,
            defaultValue: []
        }
    }
);

module.exports = Article;