const express = require('express');
const jwt = require('jsonwebtoken')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
const Product = require('./modals/Product')
require('dotenv').config();
require('./config/db');
const bodyParser = require('body-parser');


const port = process.env.PORT;
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
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
        image_url: `http://localhost:${port}/images/${req.file.filename}`,
        statusCheck:"checking"
    })
})


//adding products
app.post('/addproduct', async (req, res) => {
     //logic to create the id by itself.
    let products = await Product.find({});
    let new_id;

    if (products.length > 0) {
        //getting last element from products array
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        //adding one to the id of last product and assign it into new_id
        new_id = last_product.id + 1;
    }
    else{
        new_id=1;
    }

    const new_product = new Product({
        id: new_id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        description:req.body.description
    });
    await new_product.save();
    console.log("Product Saved")
    res.status(200).json({
        success: true,
        name: req.body.name
    })
})

//deleting products
app.post('/deleteproduct',async (req,res)=>{
    await Product.findOneAndDelete({
        id:req.body.id
    })
    console.log("Item Removed");
    res.status(200).json({
        success:true,
        name:req.body.name
    })
})

//creating api to all product from our database
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("all products fetched")
    res.status(200).json(products)
})



app.listen(port, () => {
    console.log("Listening to port:", port)
})