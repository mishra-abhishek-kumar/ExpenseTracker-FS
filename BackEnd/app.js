const express = require('express');

//import required to create environment variables
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const app = express();

app.use('/', (req, res, next) => {
    console.log("Getting Response");
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log("Listening on PORT:", PORT);
})