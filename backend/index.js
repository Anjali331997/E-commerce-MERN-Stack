const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const port = process.env.PORT;
const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send({message:"Testing the backend:E-commerce"})
})

//Image Storage Engine

const storage = multer.diskStorage()

app.listen(port,()=>{
    console.log("Listening to port:",port)
})