const mongoose = require('mongoose')


const booksSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Book', booksSchema)