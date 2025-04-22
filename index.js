const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const sequelize = require('./config/sequelize.js');


const app = express();


app.listen(PORT, async (req, res) => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been establised successfully');
    } catch (error) {
        console.error(`Unable to connect to the database ${error}`)
    };
});
