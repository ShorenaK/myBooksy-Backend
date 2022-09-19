const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();

const allReviews = [
    {
        comment: "This book was amazing!!!",
        recommend: true,
        ref: 3
    },
    {
        comment: "Meh",
        recommend: false,
        ref: 2
    },
    {
        comment: "Wow, You should definitely read it",
        recommend: true,
        ref: 3
    },
    {
        comment: "Very funny",
        recommend: true,
        ref: 1
    },
    {
        comment: "Comical book",
        recommend: true,
        ref: 1
    },
    {
        comment: "Outstanding",
        recommend: true,
        ref: 3
    },
]

router.get('/', (req, res)=>{
    res.json(allReviews)
})

router.get('/:bookId', (req, res)=>{
    const bookReviews = []
    for (let i=0; i<allReviews.length; i++){
        if(allReviews[i].ref == req.params.bookId){
            bookReviews.push(allReviews[i])
        }
    }
    res.json(bookReviews)
})

router.post('/', (req, res)=>{
    res.json(allReviews.push(req.body))
})

router.put('/:reviewId', (req, res)=>{
    res.json(allReviews[req.params.reviewId] = req.body)
})

router.delete('/:reviewId', (req, res)=>{
    res.json(allReviews.splice(req.params.reviewId, 1))
})

module.exports = router;