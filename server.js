///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;
const booksController = require('./controllers/books-controller')

// import express



// create application object
const app = express();

///////////////////////////////
// ROUTES
////////////////////////////////

app.use('/books', booksController)

app.get("/", (req, res) => {
    res.send("myBooksy API");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
