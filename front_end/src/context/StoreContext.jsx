import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const url = "https://musical-dollop-q7pxpqp4rj5ph9x5p-4000.app.github.dev"
    const [token, setToken] = useState("");

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.name === item.name);
            if (existingItem) {
                // If the item already exists, update its quantity
                return prevItems.map((cartItem) =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // If the item doesn't exist, add it to the cart
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemName) => {
        setCartItems((prevItems) =>
            prevItems.filter((cartItem) => cartItem.name !== itemName)
        );
    };

    // Function to decrease the quantity of an item in the cart
    const decreaseQuantity = (itemName) => {
        setCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.name === itemName && cartItem.quantity > 0
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            ).filter((cartItem) => cartItem.quantity > 0) // Remove items with 0 quantity
        );
    };

    

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;