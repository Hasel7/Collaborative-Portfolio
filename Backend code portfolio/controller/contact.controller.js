const Contact = require('././../model/contact.model')

async function sendMessage(req, res) {
    try {
        const message = new Contact(req.body)
        await message.save()
        res.status(200).json({message: 'Message sent successfully', data: message})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'}) 
    }
}

async function fetchMesaage(req, res) {
    try {
        const message = await Contact.find({})
        res.status(201).json({message: 'Message fetched successfully', data: message})
    } catch (error) {
       console.log(error)
       res.status(500).json({message: 'server error'})  
    }
}

module.exports = { sendMessage, fetchMesaage}