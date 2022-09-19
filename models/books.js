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
    likes: {type: Number}
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book

Book.create({
    title: 'Conversations with Friends',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780451499066_p0_v9_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
    author: 'Sally Rooney',
    genre: 'Non-fiction',
    pages: 336,
    publishDate: new Date(2018, 7, 07),
    likes: 0
})

