const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const sequelize = require("./config/sequelize.js");
const { swaggerSpec, swaggerUi } = require("./config/swaggerOptions.js");

const app = express();
app.use(express.json());

const articleRoutes = require("./routes/article.js");
app.use(articleRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, async (req, res) => {
  try {
    await sequelize.sync();
    console.log("Connection has been establised successfully");
    console.log(`Server is listening on port ${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
  } catch (error) {
    console.error(`Unable to connect to the database ${error}`);
  };
});