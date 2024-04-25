import React from 'react'
import './Breadcrump.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

const Breadcrump = (props) => {
    const { product } = props;
    // console.log(product)
    return (
        <div className='breadcrump'>
            HOME
            <img src={arrow_icon} alt="" />
            SHOP
            <img src={arrow_icon} alt="" />
            {product.category}
            <img src={arrow_icon} alt="" />
            {product.name}
        </div>
    )
}

export default Breadcrump