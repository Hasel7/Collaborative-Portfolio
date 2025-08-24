const mongoose = require('mongoose')

const {Schema} = mongoose

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    message: {type: String, required: true},
})

const Contact = ('Contact', contactSchema)

module.exports = contactSchema