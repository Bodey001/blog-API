const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController.js");

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Get all articles
 *     responses:
 *       200:
 *         description: A list of articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *   post:
 *     summary: Create a new article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the article
 *               tags:
 *                 type: array
 *                 description: An array of tags associated with the article
 *                 items:
 *                   type: string
 *     responses:
 *       400:
 *         description: Title field cannot be empty
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Title field cannot be empty"
 *       409:
 *         description: Article with the given title already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Article with the given title already exists"
 *       201:
 *         description: Article successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "My New Article has been successfully created"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error Something went wrong"
 */

//GET all articles
router.get("/articles", articleController.getAllArticles);

//POST a new article
router.post("/articles/", articleController.createNewArticle);




/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Get an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the article to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       404:
 *         description: Article does not exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Article not found"
 *       200:
 *         description: Requested article successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Article with the given id has been successfully retrieved"
 *                 article:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       format: int64
 *                       example: 123
 *                     title:
 *                       type: string
 *                       example: "The Best Article"
 *                     date_published:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-10-27T11:30:00.000Z"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error Something went wrong"
 *   delete:
 *     summary: Delete an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the article to be deleted
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       404:
 *         description: Article does not exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Article not found"
 *       200:
 *         description: Article successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "The article with the given id has been deleted successfully"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error Something went wrong"
 *   patch:
 *     summary: Update an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the article to be updated
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the existing article
 *               tags:
 *                 type: array
 *                 description: An array of tags associated with the article
 *                 items:
 *                   type: string
 *     responses:
 *       404:
 *         description: Article does not exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Article not found"
 *       400:
 *         description: No content
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Title and Tag fields cannot be empty"
 *       200:
 *         description: Article successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Article successfully updated"
 *                 updatedArticle:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       format: int64
 *                       example: 123
 *                     title:
 *                       type: string
 *                       example: "My Updated Article"
 *                     date_published:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-10-27T11:30:00.000Z"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error Something went wrong"
 */


//GET article by ID
router.get("/articles/:id", articleController.getArticleById);


//DELETE an Article by id
router.delete("/articles/:id", articleController.deleteArticleById);


//PATCH an Article by id
router.patch("/articles/:id", articleController.updateArticleById);

module.exports = router;