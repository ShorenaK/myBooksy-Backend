///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan")


// initialize .env variables
require("dotenv").config();
require('./config/db.connection');

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;
const booksController = require('./controllers/books-controller')
const reviewsController = require('./controllers/reviews-controllers')
const userController = require('./controllers/auth-controller')
app.use(express.json())


// import express


///////////////////////////////
// ROUTES
////////////////////////////////

app.use('/books', booksController)
app.use('/reviews', reviewsController)
app.use('/auth', userController)

app.get("/", (req, res) => {
    res.send("myBooksy API");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
