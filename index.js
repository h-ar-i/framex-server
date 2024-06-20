require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')


const cloneServer = express()
cloneServer.use(cors())
cloneServer.use(express.json())
cloneServer.use(router)


const PORT = 3000 || process.env.PORT
cloneServer.listen(PORT,()=>{
    console.log(`cloneServer started at port ${PORT}`);
})

cloneServer.get('/',(req,res)=>{
    res.send(`<h1>cloneServer server started and waiting for client response!! </h1>`)
    
})