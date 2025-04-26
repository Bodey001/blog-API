const Article = require('../models/article.js');


//  GET all articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        if (articles.length === 0) {
            return res.status(200).json({ message: "No article found" });
        }
        return res.status(200).json({ message: "Articles Retrieved successfully", articles });
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}` });
        return console.log(error);
    };
};

//POST a new article
exports.createNewArticle = async (req, res) => {
    const { title, tags } = req.body;
  
    try {
        const article = await Article.findOne({ where: { title } });
  
        if (!title) {
            return res.status(400).json({ message: "Title field cannot be empty" });
        };  
        if (article) {
            return res.status(409).json({
                message: `${title} already exists`,
            });
        };
        const newArticle = {
            title,
            tags,
        };
        await Article.create(newArticle);
        return res
            .status(201)
            .json({ message: `${title} has been successfully created` });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: `Internal Server Error ${error.message}` });
    }
};


//GET an article by id
exports.getArticleById = async (req, res) => {
    const { id } = req.params;
  
    try {
        const article = await Article.findOne({ where: { id } });
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        return res
            .status(200)
            .json({
                message: `Article with id ${id} has been successfully retrieved`,
                article,
            });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: `Internal Server Error ${error.message}` });
    }
};


//DELETE an article by id
exports.deleteArticleById = async (req, res) => {
    const { id } = req.params;
  
    try {
        const article = await Article.findOne({ where: { id } });
  
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        await Article.destroy({ where: { id } });
        return res
            .status(200)
            .json({ messsage: `${article.title} has been successfully deleted` });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: `Internal Server Error ${error.message}` });
    }
};

//UPDATE article by id
exports.updateArticleById = async (req, res) => {
    const { id } = req.params;
    const { title, tag } = req.body;
  
    try {
        const article = await Article.findOne({ where: { id } });
  
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
  
        if (!title && !tag) {
            return res
                .status(400)
                .json({ message: "The Title and Tag fields cannot be empty" });
        }
        await Article.update({ title, tag }, { where: { id } });
        const updatedArticle = await Article.findOne({ where: { id } });
        return res
            .status(200)
            .json({
                messsage: `${updatedArticle.title} has been successfully updated`,
                updatedArticle,
            });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: `Internal Server Error ${error.message}` });
    }
};
