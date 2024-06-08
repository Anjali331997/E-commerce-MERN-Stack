import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Name</p>
                <input type="text" name='name' placeholder='Enter product name' />
            </div>
            <div className='addproduct-price'>
                <div className="addproduct-itemfield">
                    <p>Product price</p>
                    <input type="text" name='old_price' placeholder='Enter old price' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Product offer price</p>
                    <input type="text" name='new_price' placeholder='Enter new price' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product category</p>
                <select name="categopry" id="" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={upload_area} className='addproduct-thumbnail-image' alt="" />
                </label>
                <input type="file" name='image' id='file-input' hidden />
                <button className='addproduct-button'>Add product</button>

            </div>

        </div>
    )
}

export default AddProduct