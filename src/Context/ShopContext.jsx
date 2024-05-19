import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import All_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i <= All_product.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1 
        }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = All_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, All_product, cartItems, addToCart, removeFromCart };
    return (
        <>
            <ShopContext.Provider value={contextValue} >
                {props.children}
            </ShopContext.Provider>
        </>
    )
}

export default ShopContextProvider;

ShopContextProvider.propTypes = {
    children: PropTypes.string.isRequired,
};
