const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const port = process.env.PORT;
app.use(express.json())
app.use(cors())

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send({message:"Testing the backend"})
})

app.listen(port,()=>{
    console.log("Listening to port:",port)
})