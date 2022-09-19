const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)

const reviewSchema = new mongoose.Schema({
    recommend: {type: Boolean, required: true },
    comment: {type: String},
    book: {type: mongoose.Types.ObjectId, ref: "Book", required: true}
},{timestamps: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review

Review.create({
    recommend: true,
    comment: "Stephen King, that is all I need to say. Bravo!",
    book: "6328883b68aeded80e03e9f5"
})