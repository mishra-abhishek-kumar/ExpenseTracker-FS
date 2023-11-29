const express = require('express');

//import required to create environment variables
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

//import required to parse JSON data as a POST request
const bodyParser = require('body-parser');

//imports required for DB connection and table creation
const sequelize = require('./util/dbConnect');
const Expense = require('./models/Expense'); //Without this table was not getting created

const app = express();

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
    console.log("Getting Response");
});

const PORT = process.env.PORT || 4001;
sequelize.sync()
    .then(result => {
        console.log(result);
        app.listen(PORT, () => {
            console.log("Listening on PORT:", PORT);
        });
    })
    .catch(err => console.log(err));
