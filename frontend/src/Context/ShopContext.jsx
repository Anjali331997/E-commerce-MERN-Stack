import React, { createContext, useState } from "react";
import all_product from "../components/Assests/all_product";

export const ShopContext = createContext();
const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItem)
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        console.log(cartItem)
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item]
            }   
        }
        return totalAmount;
    }

    const contextValue = { getTotalCartAmount,all_product, cartItem, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;