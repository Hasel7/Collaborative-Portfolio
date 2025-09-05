const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { basePath, falsePath, createProject, fetchProject, deleteProject } = require('./controller/project.controller')
const User = require('./model/user.model')
const validateLoginMiddleware = require('./middeware/auth.validator')
const { loginUser } = require('./controller/user.controller')
const { sendMessage, fetchMesaage } = require('./controller/contact.controller')
const api = express()

const PORT = 8484

api.use(express.json())
api.use(express.urlencoded({extended:true}))

api.post('/project', createProject)
api.get('/projects', fetchProject)
api.post('/project/:id', deleteProject)
api.post('/login', loginUser)
api.post('/message', sendMessage)
api.get('/messages', fetchMesaage)

api.all('/', basePath)
api.use((req, res) => {
    falsePath(req, res)
})

api.listen(PORT, async ()=>{
    console.log(`Server live on: ${PORT}`)
    await mongoose.connect('mongodb://127.0.0.1:27017/portfolio-app');
    console.log('database connected')
});