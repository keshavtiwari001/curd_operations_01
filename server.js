const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv').config()
const rootroutes = require('./routes/rootroutes')
const PORT = process.env.PORT
const app = express()
app.use(express.json())

app.use('/',rootroutes)

app.listen(PORT,()=>{
    console.log('ONN')
})