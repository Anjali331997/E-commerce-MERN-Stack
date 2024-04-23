import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assests/dropdown_icon.png'
import Item from '../components/items/Items'

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)
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
        <div className="shopcategory-products">
          {
            all_products.map((item, i) => {
              if (props.category === item.category) {
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShopCategory