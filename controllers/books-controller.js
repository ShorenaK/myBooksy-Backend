const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();

const allBooks = [
    {
        title: "Once Upon a time",
        author: "Famous Person",
        Genre: "Fiction",
        Pages: 256,
        Description: "This book is about stories",
        Publised: "Today",
        Likes: 567
    },
]

router.get('/', (req, res)=>{
    res.json(allBooks)
})

router.get('/:bookId', (req, res)=>{
    res.json(allBooks[req.params.bookId])
})

router.post('/', (req, res)=>{
    res.json(allBooks.push(req.body))
})

router.put('/:bookId', (req, res)=>{
    res.json(allBooks[req.params.bookId] = req.body)
})

router.delete('/:bookId', (req, res)=>{
    res.json(allBooks.splice(req.params.bookId, 1))
})

module.exports = router;