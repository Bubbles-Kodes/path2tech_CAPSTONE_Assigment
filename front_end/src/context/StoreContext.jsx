import React, { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);
import axios from "axios";

    const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const url = "https://musical-dollop-q7pxpqp4rj5ph9x5p-4000.app.github.dev"
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

// Function to fetch food list from the backend
 
const fetchFoodList = async () => {
    try {
        const response = await axios.get(url + "/api/food/list");
        console.log(response.data.data); // Logs the array of food items, including both _id and id
        setFoodList(response.data.data); // Update the frontend state with the food list
    } catch (error) {
        console.error("Error fetching food list:", error.response?.data || error.message);
    }
};


    useEffect(() =>{
     async function loadData() {
        await fetchFoodList();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));//Empty dependency array to run only once on mount
 
         }    
     }
    loadData();
},[]);




const addToCart = async (item) => {
    // Debugging: Log the item being added to the cart
    console.log("Item being added to cart:", item);
    console.log("Item ID being sent:", item.id || item._id); // Check if id or _id is present

    // Update the cart items in the frontend
    setCartItems((prevItems) => {
        const existingItem = prevItems.find((cartItem) => cartItem.name === item.name);
        if (existingItem) {
            return prevItems.map((cartItem) =>
                cartItem.name === item.name
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        } else {
            return [...prevItems, { ...item, quantity: 1 }];
        }
    });

    // Make an API call to add items to the backend cart
    if (token) {
        try {
            const response = await axios.post(
                url + "/api/cart/add",
                { itemId: item.id || item._id }, // Use id or _id
                { headers: {token}}
            );
            if (!response.data.success) {
                console.error("Failed to update cart in backend:", response.data.message);
            }
        } catch (error) {
            console.error("Error adding item to cart in backend:", error.response?.data || error.message);
        }
    }
};

const removeFromCart = async (item) => {
    console.log("Item being removed from cart:", item); // Debugging
    if (token) {
      try {
        const response = await axios.post(
          url + "/api/cart/remove",
          { itemId: item._id || item.id }, // Use _id or id
          { headers: {token}} // Include the token in the headers
        );
        if (!response.data.success) {
          console.error("Failed to remove item from backend:", response.data.message);
        }
      } catch (error) {
        console.error("Error removing item from backend:", error.response?.data || error.message);
      }
    } else {
      console.error("No token found. User is not logged in.");
    }
  };

    // Function to decrease the quantity of an item in the cart
    const decreaseQuantity = async (item) => {
        console.log("Decreasing quantity for item:", item); // Debugging
    
        // Update the cart items in the frontend
        setCartItems((prevItems) =>
            prevItems
                .map((cartItem) =>
                    cartItem._id === item._id && cartItem.quantity > 0
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter((cartItem) => cartItem.quantity > 0) // Remove items with 0 quantity
        );
    
        // Make an API call to decrease the quantity in the backend
        if (token) {
            try {
                const response = await axios.post(
                    url + "/api/cart/decrease",
                    { itemId: item._id || item.id }, // Send the item's _id to the backend
                    { headers: {token}} // Include the token in the headers
                );
                if (!response.data.success) {
                    console.error("Failed to decrease item quantity in backend:", response.data.message);
                }
            } catch (error) {
                console.error("Error decreasing item quantity in backend:", error.response?.data || error.message);
            }
        } else {
            console.error("No token found. User is not logged in.");
        }
    };
    console.log("Token being sent in Authorization header:", token);

//get total cart amount function 

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
       if(cartItems[item]>0) {
       let itemInfo = food_list.find((product)=>product._id === item);
          if(itemInfo){
             totalAmount += itemInfo.price * cartItems[item];
          }      
       }
    }
    return totalAmount;
 }

const contextValue = {
    food_list,
    cartItems,
    decreaseQuantity,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
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