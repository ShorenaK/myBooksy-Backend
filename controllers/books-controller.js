const express = require("express");
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

module.exports = router;