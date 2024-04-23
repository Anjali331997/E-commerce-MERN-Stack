import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assests/dropdown_icon.png'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
        <img src={props.banner} alt="banner" />
        <div className="shopcategory-indexsort">

          <p>
            <span>showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
    </div>
  )
}

export default ShopCategory