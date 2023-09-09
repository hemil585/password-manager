const express = require('express')
require('dotenv').config()

const server = express()
const PORT = process.env.PORT || 9696

server.get('/',(req,res)=>{
    res.send('Password Manager')
})


server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})