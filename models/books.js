const mongoose = require('mongoose')
require('dotenv').config()

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    pages: {type: Number, required: true},
    description: {type: String, required: true},
    publishDate: {type: Date, required: true},
    likes: {type: Number}
})

const book = mongoose.model('book', bookSchema)

module.exports = book