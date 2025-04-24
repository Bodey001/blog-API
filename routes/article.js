const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController.js");

//GET all articles
router.get("/articles", articleController.getAllArticles);

//POST a new article
router.post("/add-article", articleController.createNewArticle);

//GET article by ID
router.get("/article/:id", articleController.getArticleById);

//DELETE an Article by id
router.delete("/delete-article/:id", articleController.deleteArticleById);

//PATCH an Article by id
router.patch("/update-article/:id", articleController.updateArticleById);

module.exports = router;