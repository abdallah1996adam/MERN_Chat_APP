require('dotenv').config();
const express = require('express');
const cors = require('cors')
const router = require('./router/index')

const server = express();

server.use(cors())
server.use(express.urlencoded({extended:true}))
server.use(express.json())




server.use(router)


server.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server is up and running on port ${process.env.SERVER_PORT}`);
})