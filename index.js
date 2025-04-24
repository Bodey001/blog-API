const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const sequelize = require("./config/sequelize.js");
const Article = require("./models/article.js");

const app = express();
app.use(express.json());

//          Get all articles
app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.findAll();
    if (!articles) {
      return res.status(204).json({ message: "No article found" });
    }
    return res
      .status(200)
      .json({ message: "Articles Retrieved successfully", articles });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error ${error.message}` });
    return console.log(error);
  }
});

//          Create a new article
app.post("/add-article", async (req, res) => {
  const { title, tags } = req.body;

  try {
    const article = await Article.findOne({ where: { title } });

    if (!title) {
      return res.status(400).json({ message: "Title field cannot be empty" });
    }

    if (article) {
      return res.status(409).json({
        message: "Article with the same title and publish date already exists",
      });
    }
    const newArticle = {
      title,
      tags,
    };
    await Article.create(newArticle);
    return res
      .status(201)
      .json({ message: "Article successfully created", newArticle });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `Internal Server Error ${error.message}` });
  }
});

app.listen(PORT, async (req, res) => {
  try {
    await sequelize.sync();
    console.log("Connection has been establised successfully");
  } catch (error) {
    console.error(`Unable to connect to the database ${error}`);
  }
});
