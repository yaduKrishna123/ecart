require('dotenv').config()

const express= require('express')
require('./db/connection')
const router = require('./routes/router')

const cors = require('cors')

const server = express()

server.use(cors())

server.use(express.json())
server.use(router)

const PORT = process.env.PORT || 3000

server.get('/',(req,res)=>{
    res.status(200).json("Ekart started")
})

server.listen(PORT,()=>{
    console.log(`Ekart server app is listning to port number ${PORT}`);
})