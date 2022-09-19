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
    description: {type: String, required: true},
    publishDate: {type: Date, required: true},
    likes: {type: Number}
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book

Book.create({
    title: 'The Self-Taught Progammer: The Definitive Guide to Programming Professionally',
    image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/31YJmObNTnL._SX404_BO1,204,203,200_.jpg',
    author: 'Cory Althoff',
    genre: 'Non-fiction',
    pages: 299,
    description: "I am a self-taught programmer. After a year of self-study, I learned to program well enough to land a job as a software engineer II at eBay. Once I got there, I realized I was severely under-prepared. I was overwhelmed by the amount of things I needed to know but hadn't learned yet. My journey learning to program, and my experience at my first job as a software engineer were the inspiration for this book.",
    publishDate: Date(2017, 0, 24),
    likes: 0
})