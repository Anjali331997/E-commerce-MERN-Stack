const express = require('express');
const jwt = require('jsonwebtoken')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
const User = require('./modals/User')
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
        image_url: `${process.env.BACKEND_URL}/images/${req.file.filename}`,
        statusCheck: "checking"
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
    else {
        new_id = 1;
    }

    const new_product = new Product({
        id: new_id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        description: req.body.description
    });
    await new_product.save();
    console.log("Product Saved")
    res.status(200).json({
        success: true,
        name: req.body.name
    })
})

//deleting products
app.post('/deleteproduct', async (req, res) => {
    await Product.findOneAndDelete({
        id: req.body.id
    })
    console.log("Item Removed");
    res.status(200).json({
        success: true,
        name: req.body.name
    })
})

//creating api to all product from our database
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("all products fetched")
    res.status(200).json(products)
})

//registration
app.post('/signup', async (req, res) => {
    const { email, name, password } = req.body;
    let user = await User.findOne({ email })

    if (user) {
        return res.status(400).json({
            success: false,
            error: "existing user found"
        })
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const new_user = new User({
        name, email, password, cart
    })

    await new_user.save();

    const data = {
        user: {
            id: new_user.id
        }
    }

    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
    res.json({
        success: true, token
    })

})

//userlogin

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        const passCompare = req.body.password === password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, process.env.JWT_SECRET_KEY)
            res.json({
                success: true, token
            })
        }
        else {
            res.json({
                success: false,
                error: "Wrong password"
            })
        }
    }
    else{
        res.json({
            success:false,
            errors:"Wrong email"
        })
    }
})

app.listen(port, () => {
    console.log("Listening to port:", port)
})