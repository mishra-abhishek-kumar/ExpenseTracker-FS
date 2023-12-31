const express = require('express');

//import required to create environment variables
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

//import required to parse JSON data as a POST request
const bodyParser = require('body-parser');

//imports required for DB connection and table creation
const sequelize = require('./util/dbConnect');
const Expense = require('./models/Expense'); //Without this table was not getting created

//imports requires for different routes
const createExpenserRoute = require('./routes/add-expense');
const getExpenserRoute = require('./routes/get-expense');
const deleteExpenserRoute = require('./routes/delete-expense');
const editExpenserRoute = require('./routes/edit-expense');

const app = express();

app.use(bodyParser.json());

//import required to allow CORS origin connection
const cors = require("cors");
app.use(cors());

app.use('/', createExpenserRoute);
app.use('/', getExpenserRoute);
app.use('/', deleteExpenserRoute);
app.use('/', editExpenserRoute);

const PORT = process.env.PORT || 4001;
sequelize.sync({force: true})
    .then(result => {
        app.listen(PORT, () => {
            console.log("Listening on PORT:", PORT);
        });
    })
    .catch(err => console.log(err));
