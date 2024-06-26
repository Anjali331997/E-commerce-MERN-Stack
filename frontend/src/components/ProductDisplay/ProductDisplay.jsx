import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import start_icon from '../Assests/star_icon.png'
import start_dull_icon from '../Assests/star_dull_icon.png'

const ProductDisplay = ({ product }) => {
  const [selectedSize, setSize] = useState(null);

  const handleSizeChange = (s) => {
    setSize(s);
  }
  const { addToCart } = useContext(ShopContext);
  return (
    <div className='product-display'>
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />
        </div>
        <div className="product-display-img">
          <img src={product.image}
            className='product-display-main-img'
            alt="" />
        </div>
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          These shirts come in a wide range of colors, patterns, and designs, offering endless options for personal style expression.
          From classic solid colors to bold prints and graphics, men can choose from various options to suit their preferences and occasions.
          The t-shirt is known for its versatility and can be effortlessly paired with jeans, shorts, or slacks, making it suitable for various occasions.
          It can be dressed up with a blazer and chinos for a semi-formal look, or casually worn with jeans for a laid-back style.
          Moreover, it can be layered under a sweater or hoodie during colder months or simply worn on its own during warmer seasons
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            {
              ['S', 'M', 'L', 'XL', 'XXL'].map((size) => {
                return <div key={size}
                  onClick={()=>handleSizeChange(size)}
                  className={selectedSize === size ? 'selected-size':''}
                  >
                  {size}
                </div>
              })
            }
          </div>
        </div>
        <button onClick={() => {
          selectedSize ? addToCart(product.id) : alert('Please select the size')

        }}>Add to cart</button>
        <p className='product-display-right-category'>
          <span> Category: </span>{product.category}, Cotten, Streachable
        </p>
        <p className='product-display-right-category'>
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay