import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({}); // Treat cartItems as an object
    const url = "https://musical-dollop-q7pxpqp4rj5ph9x5p-4000.app.github.dev";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    // Function to load cart data from the backend
    const loadCartData = async (token) => {
        if (token) {
            
            try {
                const response = await axios.post(
                    url + "/api/cart/get",
                    {}, // Empty object for the request body
                    { headers: { token } } // Include the token in the headers
                );

                

                if (response.data.success) {
                    
                    setCartItems(response.data.cartData); // Update the cartItems state with cartData
                } else {
                    console.error("Failed to load cart data:", response.data.message);
                }
            } catch (error) {
                if (error.response?.status === 401) {
                    console.error("Token is invalid or expired. Please log in again.");
                } else {
                    console.error("Error loading cart data:", error.response?.data || error.message);
                }
            }
        } else {
            console.error("No token found. User is not logged in.");
        }
    };

    // Function to fetch food list from the backend
    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            
            setFoodList(response.data.data); // Update the frontend state with the food list
        } catch (error) {
            console.error("Error fetching food list:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList(); // Load the food list
            const storedToken = localStorage.getItem("token"); // Retrieve token from localStorage
            if (storedToken) {
                setToken(storedToken); // Set the token in state
                await loadCartData(storedToken); // Pass the token directly to loadCartData
            } else {
                console.error("No token found in localStorage.");
            }
        }
        loadData();
    }, []);

    // Function to add items to the cart
    const addToCart = async (item) => {
        

        // Update the cart items in the frontend
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems }; // Create a copy of the current cartItems object
            if (updatedItems[item._id]) {
                // If the item already exists in the cart, increase its quantity
                updatedItems[item._id] += 1;
            } else {
                // If the item does not exist in the cart, add it with a quantity of 1
                updatedItems[item._id] = 1;
            }
            return updatedItems; // Return the updated cartItems object
        });

        // Make an API call to add the item to the backend cart
        if (token) {
            try {
                const response = await axios.post(
                    url + "/api/cart/add",
                    { itemId: item._id }, // Send the item's _id to the backend
                    { headers: { token } } // Include the token in the headers
                );
                if (!response.data.success) {
                    console.error("Failed to update cart in backend:", response.data.message);
                }
            } catch (error) {
                console.error("Error adding item to cart in backend:", error.response?.data || error.message);
            }
        }
    };

    // Function to remove items from the cart
    const removeFromCart = async (item) => {
        

        // Update the cart items in the frontend
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems }; // Create a copy of the current cartItems object
            delete updatedItems[item._id]; // Remove the item from the cart
            return updatedItems; // Return the updated cartItems object
        });

        // Make an API call to remove the item from the backend cart
        if (token) {
            try {
                const response = await axios.post(
                    url + "/api/cart/remove",
                    { itemId: item._id }, // Send the item's _id to the backend
                    { headers: { token } } // Include the token in the headers
                );
                if (!response.data.success) {
                    console.error("Failed to remove item from backend:", response.data.message);
                }
            } catch (error) {
                console.error("Error removing item from backend:", error.response?.data || error.message);
            }
        }
    };

    // Function to decrease the quantity of an item in the cart
    const decreaseQuantity = async (item) => {
        

        // Update the cart items in the frontend
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems }; // Create a copy of the current cartItems object
            if (updatedItems[item._id]) {
                updatedItems[item._id] -= 1; // Decrease the quantity
                if (updatedItems[item._id] <= 0) {
                    delete updatedItems[item._id]; // Remove the item if quantity is 0
                }
            }
            return updatedItems; // Return the updated cartItems object
        });

        // Make an API call to decrease the quantity in the backend
        if (token) {
            try {
                const response = await axios.post(
                    url + "/api/cart/decrease",
                    { itemId: item._id }, // Send the item's _id to the backend
                    { headers: { token } } // Include the token in the headers
                );
                if (!response.data.success) {
                    console.error("Failed to decrease item quantity in backend:", response.data.message);
                }
            } catch (error) {
                console.error("Error decreasing item quantity in backend:", error.response?.data || error.message);
            }
        }
    };

    // Function to calculate the total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = food_list.find((product) => product._id === itemId);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    };

    // Function to calculate the total quantity of items in the cart
    const getTotalCartQuantity = () => {
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };

    const contextValue = {
        food_list,
        cartItems,
        decreaseQuantity,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartQuantity, // Add this function to the context
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;