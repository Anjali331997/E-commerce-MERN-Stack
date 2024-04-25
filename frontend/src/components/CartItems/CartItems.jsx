import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItem, removeFromCart } = useContext(ShopContext)

    return (
        <div className='carItems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                
                all_product.map((e) => {
                    if (cartItem[e.id] > 0) {
                        return  (<div>
                            <div className="cartitems-format">
                                <img className='carticon-product-icon' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                <p>{e.new_price * cartItem[e.id]}</p>
                                <img src={remove_icon} onClick={() => {
                                    removeFromCart(e.id)
                                }} alt="remove" />
                            </div>
                        </div>)
                    }
                })
            }
        </div>
    )
}

export default CartItems