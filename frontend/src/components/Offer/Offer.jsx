import React from 'react'
import './Offer.css'
import exclusive_image from '../Assests/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>

      <div className="offers-left">
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>

    </div>
  )
}

export default Offer