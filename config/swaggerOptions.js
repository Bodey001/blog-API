require('dotenv').config();
const PORT = process.env.PORT;
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Blog-API",
    version: "1.0.0",
    description: "A RESTful API for managing blog articles",
  },
  servers: [
    {
      url: `http://localhost:${PORT}`, //Base URL
      description: "Development server",
    },
  ],
};

const options = {
    swaggerDefinition,
    //Path to the API docs
    apis: ['../routes/*.js', '../models/*.js'],  //Location of JSDoc comments
};

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;