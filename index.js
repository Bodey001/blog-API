const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const sequelize = require("./config/sequelize.js");


const app = express();
app.use(express.json());


const articleRoutes = require('./routes/article.js');

app.use(articleRoutes);



app.listen(PORT, async (req, res) => {
  try {
    await sequelize.sync();
    console.log("Connection has been establised successfully");
  } catch (error) {
    console.error(`Unable to connect to the database ${error}`);
  }
});
