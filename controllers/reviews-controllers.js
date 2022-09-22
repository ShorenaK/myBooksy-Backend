const express = require("express");
const router = express.Router();

const allReviews = require('../models/reviews')

router.get('/', async (req, res)=>{
    try {
        const reviews = await allReviews.find({})
        res.json(reviews)
    } catch (error){
        console.log(error)
    }
})

router.get('/:bookId', async (req, res)=>{
    try{
        const reviews = await allReviews.find({book: req.params.bookId})
        res.json(reviews)
    } catch (error) {
        console.log(error)
    }
})
router.get('/:reviewId', async (req, res)=>{
    try {
        res.json(await allReviews.findById(req.params.reviewId))
    } catch (error){
        console.log(error)
    }
})
router.post('/', async (req, res)=>{
    try{
        res.json(await allReviews.create(req.body))
    } catch (error) {
        console.log(error)
    }
})

router.put('/:reviewId', async (req, res)=>{
    try{
        res.json(await allReviews.findByIdAndUpdate(req.params.reviewId, req.body))
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:reviewId', async (req, res)=>{
    try{
        res.json(await allReviews.findByIdAndRemove(req.params.reviewId))
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;