import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { food_list } = useContext(StoreContext);

  // Function to add an item to the cart
  const addToCart = (item) => {
    console.log(`Adding item to cart: ${item.id}`); // Log the item ID

    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });

    setTotalPrice((prevTotal) => prevTotal + item.price);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    console.log('Items in cart during checkout:', cartItems.map((item) => item.id)); // Log all item IDs
    alert(`Thank you for your order! Total: $${totalPrice.toFixed(2)}`);
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <div className='food-display' id='food-display'>
      <h2>What You Cravin'?</h2>
      <div className='food-display-list'>
        {food_list
          .filter((item) => category === 'All' || item.category === category)
          .map((item) => (
            <FoodItem
              key={item.id}
              name={item.name}
              description={item.description}
              img={item.img}
              price={item.price}
              onAddToCart={() => addToCart(item)}
            />
          ))}
      </div>

    </div>
  );
};

export default FoodDisplay;