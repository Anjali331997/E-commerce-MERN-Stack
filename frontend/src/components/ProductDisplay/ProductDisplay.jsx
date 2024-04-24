import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = ({product}) => {
  return (
    <div className='productdisplay'>
        <div className="product-display-left">
          <div className="product-display-img-list">
            <img src={product.image} alt="product-img" />
            <img src={product.image} alt="product-img" />
            <img src={product.image} alt="product-img" />
            <img src={product.image} alt="product-img" />
          </div>
        </div>
        <div className="product-display-img">
          <img src={product.image} className='product-display-main-img' alt="" />
        </div>
        <div className="product-display-right">
          
        </div>
    </div>
  )
}

export default ProductDisplay