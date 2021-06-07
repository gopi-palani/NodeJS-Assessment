const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')

// Get subscribers Details
router.get('/', async(req,res) => {
    try{
        const subscribersList = await Subscriber.find()
        res.json(subscribersList)
    }catch(err){
        res.send('Error'+ err)
    }
})

// Send Book Details
router.post('/', async(req, res) => {

    const AddSubscriber = new Subscriber({
        name: req.body.name,
        books: req.body.books
    }) 

    try{
        const subscriberData = await AddSubscriber.save()
        res.json(subscriberData)
    }catch(err){
        res.send('Error'+ err)
    }

})

// Get particular Subcriber Details
router.get('/:id', async(req,res) => {
    try{
        const SpecificSubscriberData = await Subscriber.findById(req.params.id)
        res.json(SpecificSubscriberData)
    }catch(err){
        res.send('Error'+ err)
    }
})

//update specific Subscriber Deatils
router.patch('/:id', async(req,res) => {
    
    try{
        const editSubscriber = await Subscriber.findById(req.params.id)
        editSubscriber.name = req.body.name
        const editedSubscriberData = await editSubscriber.save()
        res.json(editedSubscriberData)
    }catch(err){
        res.send('Error'+err)
    }

})

//delete subscriber
router.delete('/:id', async(req,res) => {
    
    try{
        const deletesubscriber = await Subscriber.findById(req.params.id)
        deletesubscriber.name = req.body.name
        const deletedsubscriberData = await deletesubscriber.remove()
        res.json(deletedsubscriberData)
    }catch(err){
        res.send('Error')
    }

})

//update books to subscriber
router.put('/:id', async(req,res) => {
    
    var addbook = { "name":String,"quantity":Number,"author":String };
    Subscriber.findOneAndUpdate(
        { _id: req.body.id }, 
        { $push: { books: addbook  } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
    });
});

module.exports = router