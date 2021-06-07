const mongoose = require('mongoose')

const subscribersSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    books: [{
        type: String
    }]

})

module.exports = mongoose.model('Subscriber', subscribersSchema)