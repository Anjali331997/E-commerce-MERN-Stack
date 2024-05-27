const express = require('express');
const jwt = require('jsonwebtoken')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const port = process.env.PORT;
const app = express();
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send({ message: "Testing the backend:E-commerce" })
})

//Image Storage Engine 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })
//Creating upload Endpoint for images
app.use('./images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port, () => {
    console.log("Listening to port:", port)
})