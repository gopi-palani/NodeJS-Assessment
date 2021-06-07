const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BooksDB'

const app = express()


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected!')
})

app.use(express.json())

const booksRouter = require('./routes/books')
app.use('/books', booksRouter)

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)
// app.use(app.router);
// routes.initialize(app);

app.listen(9000, () => {
    console.log('Server Started!')
})