require('dotenv').config();
const PORT = process.env.PORT;
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog-API",
      version: "1.0.0",
      description: "A RESTful API for managing blog articles"
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, //Base URL
        description: "Development server"
      },
    ],
  },
  //Path to the API docs
  apis: ["./routes/*.js", "./models/*.js"] //Location of JSDoc comments
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerSpec, swaggerUi };