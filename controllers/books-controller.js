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

router.get('/:bookId', async (req, res)=>{
    try {
        res.json(await allBooks.findById(req.params.bookId))
    } catch (error){
        console.log(error)
    }
})

router.post('/', async (req, res)=>{
    try{
        res.json(await allBooks.create(req.body))
    } catch (error) {
        console.log(error)
    }
})

router.put('/:bookId', (req, res)=>{
    try{
        res.json(await allBooks.findByIdAndUpdate(req.params.bookId, req.body))
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:bookId', (req, res)=>{
    try{
        res.json(await allBooks.findByIdAndRemove(req.params.bookId))
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;