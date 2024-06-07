const express = require('express');
const jwt = require('jsonwebtoken')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
const Product = require('./modals/Product')
require('dotenv').config();
require('./config/db');


const port = process.env.PORT||8000;
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
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

app.post('/addproduct', async (req, res) => {
    const new_product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(new_product);
    await new_product.save();
    console.log("Product Saved")
    res.status(200).json({
        success:true,
        name:req.body.name
    })
})

app.listen(port, () => {
    console.log("Listening to port:", port)
})