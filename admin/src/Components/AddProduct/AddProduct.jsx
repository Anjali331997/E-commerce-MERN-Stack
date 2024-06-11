import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
    const [image, setImage] = useState(false)
    const initialState = {
        name: "",
        image: "",
        category: "women",
        old_price: '',
        new_price: '',
        description:'',
    }
    const [newProduct, setnewProduct] = useState(initialState)

    const changeHandler = (e) => {
        setnewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }

    const imagehandler = (e) => {
        setImage(e.target.files[0]);
    }

    const Add_Product = async () => {
        console.log(newProduct);
        let responseData;
        let product = newProduct;
        let formData = new FormData();
        formData.append('product', image);
        console.log(formData)

        try {

            const response = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'appliaction/json'
                },
                body: formData,
            });

            const data = await response.json();
            responseData = data;
            if (responseData.success) {
                product.image = responseData.image_url;
                console.log(product);

                const response = await fetch('http://localhost:4000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })

                const data = await response.json();
                if (data.success) {
                    alert("Product Added")
                    // setnewProduct(initialState);
                    setImage(false)
                } else {
                    alert("Failed to add Product");
                }
            }

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Name</p>
                <input value={newProduct.name} onChange={changeHandler} type="text" name='name' placeholder='Enter product name' />
            </div>
            <div className="addproduct-itemfield">
                <p>Product category</p>
                <select value={newProduct.category} name="category" id="" className='add-product-selector' onChange={changeHandler} >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className='addproduct-price'>
                <div className="addproduct-itemfield">
                    <p>Product actual price</p>
                    <input value={newProduct.old_price} type="text" name='old_price' placeholder='Enter old price' onChange={changeHandler} />
                </div>
                <div className="addproduct-itemfield">
                    <p>Product offer price</p>
                    <input value={newProduct.new_price} type="text" name='new_price' placeholder='Enter new price' onChange={changeHandler} />
                </div>
            </div>
            <div className='addproduct-itemfield'>
            <p>Description</p>
            <textarea rows="4" cols="70" name="description" id="description" placeholder='Description' onChange={changeHandler} value={newProduct.description}></textarea>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-image' alt="" />
                </label>
                <input onChange={imagehandler} type="file" name='image' id='file-input' hidden />

            </div>
            <button className='addproduct-button' onClick={Add_Product}>Add product</button>

        </div>
    )
}

export default AddProduct