const express = require('express')
const router = express.Router()
const Book = require('../models/books')

// Get Books Details
router.get('/', async(req,res) => {
    try{
        const books = await Book.find()
        res.json(books)
    }catch(err){
        res.send('Error'+ err)
    }
})

// Send Book Details
router.post('/', async(req, res) => {

    const book = new Book({
        name: req.body.name,
        quantity: req.body.quantity,
        author: req.body.author
    }) 

    try{
        const booksData = await book.save()
        res.json(booksData)
    }catch(err){
        res.send('Error'+ err)
    }

})

// Get particular Book Details
router.get('/:id', async(req,res) => {
    try{
        const bookData = await Book.findById(req.params.id)
        res.json(bookData)
    }catch(err){
        res.send('Error'+ err)
    }
})

//update specific Book Deatils
router.patch('/:id', async(req,res) => {
    
    try{
        const book = await Book.findById(req.params.id)
        book.name = req.body.name
        const booksData = await book.save()
        res.json(booksData)
    }catch(err){
        res.send('Error'+err)
    }

})

//delete book
router.delete('/:id', async(req,res) => {
    
    try{
        const book = await Book.findById(req.params.id)
        book.name = req.body.name
        const booksData = await book.remove()
        res.json(booksData)
    }catch(err){
        res.send('Error')
    }

})

module.exports = router