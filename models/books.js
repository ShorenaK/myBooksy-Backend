const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    pages: {type: Number, required: true},
    description: {type: String},
    publishDate: {type: Date, required: true},
    link: {type: String},
    likes: [{type: mongoose.Types.ObjectId, ref: "User"}]
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book

