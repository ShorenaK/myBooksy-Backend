const mongoose = require('mongoose')
require('dotenv').config()

const reviewSchema = new mongoose.Schema({
    recommend: {type: Boolean, required: true },
    comment: {type: String},
    book: {type: mongoose.Types.ObjectId, ref: "book", required: true}
})