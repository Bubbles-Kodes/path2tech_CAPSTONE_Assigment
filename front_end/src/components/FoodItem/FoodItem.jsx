import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './FoodItem.css';

const FoodItem = ({ name, description, img, price, _id }) => {
  const { addToCart, url, removeFromCart } = useContext(StoreContext);
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = () => {
    setItemCount((prevCount) => prevCount + 1);
    addToCart({ name, description, img, price, _id });
  };

  const handleRemoveFromCart = async () => {
    if (itemCount > 0) {
      try {
        console.log("Removing item from cart:", { _id, name, description, img, price }); // Debugging
        await removeFromCart({ _id, name, description, img, price }); // Await the backend call
        setItemCount((prevCount) => prevCount - 1); // Update the local state
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    }
  };

  const handleAddMore = () => {
    setItemCount((prevCount) => prevCount + 1);
    addToCart({ name, description, img, price, _id });
  };

  return (
    <div className='food-display-list-item'>
      <img className='food-item-image' src={url+"/images/"+img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>${price.toFixed(2)}</h4>
      <div className='item-actions'>
        {!itemCount ? (
          <button onClick={handleAddToCart} className='add-to-cart'>
            Add to Cart
          </button>
        ) : (
          <>
            <h3>Item Count: {itemCount}</h3>
            <h4>Total: ${(itemCount * price).toFixed(2)}</h4>
            <button onClick={handleAddMore} className='add-more'>
              Add More
            </button>
            <button onClick={handleRemoveFromCart} className='remove-from-cart'>
              Remove
            </button>
          </>
        )}
        <Link to='/cart' className='checkout-button'>
          <span className='checkout-icon'>View Cart 🛒</span>
        </Link>
      </div>
    </div>
  );
};

export default FoodItem;