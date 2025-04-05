import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './FoodItem.css';

const FoodItem = ({ name, description, img, price }) => {
  const { addToCart } = useContext(StoreContext);
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = () => {
    setItemCount((prevCount) => prevCount + 1);
    addToCart({ name, description, img, price });
  };

  const handleRemoveFromCart = () => {
    if (itemCount > 0) {
      setItemCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddMore = () => {
    setItemCount((prevCount) => prevCount + 1);
    addToCart({ name, description, img, price });
  };

  return (
    <div className='food-display-list-item'>
      <img className='food-item-image' src={img} alt={name} />
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
              Remove from Cart
            </button>
          </>
        )}
        <Link to='/order' className='checkout-button'>
          <span className='checkout-icon'>🛒</span>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default FoodItem;