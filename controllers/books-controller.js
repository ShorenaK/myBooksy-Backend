const express = require("express");
const router = express.Router();

const allBooks = require('../models/books')


router.get('/', async (req, res)=>{
    try {
        const books = await allBooks.find({})
        res.json(books)
    } catch (error){
        console.log(error)
    }
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