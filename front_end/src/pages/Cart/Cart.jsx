import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, decreaseQuantity, getTotalCartAmount, addToCart, url } = useContext(StoreContext);

  const totalPrice = getTotalCartAmount(); // Use getTotalCartAmount to calculate total price
  const deliveryFee = totalPrice > 0 ? 10.50 : 0;
  const grandTotal = totalPrice + deliveryFee;

  const navigate = useNavigate();

  
  

  // Merge cartItems with food_list to get full details
  const mergedCartItems = Object.keys(cartItems).map((itemId) => {
    const foodItem = food_list.find((food) => food._id === itemId); // Find the matching food item
    return {
      ...foodItem, // Spread the food item details
      quantity: cartItems[itemId], // Add the quantity from cartItems
    };
  });

  return (
    <div className='cart'>
      <h2>Cart Summary</h2>
      <hr />
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        
        {mergedCartItems.length > 0 ? (
          mergedCartItems.map((item) => (
            <div key={item._id}>
              <div className='cart-items-title cart-items-item'>
                <img src={`${url}/images/${item.img}`} alt={item.name} />
                <p>${item.price.toFixed(2)}</p>
                <p className="cart-items-controls">
                  <button className='cart-button' onClick={() => addToCart(item)}>+</button>
                  <span className='quantity'>{item.quantity}</span>
                  <button className='cart-button' onClick={() => decreaseQuantity(item)}>-</button>
                </p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className='cart-items-title'>
                <p>{item.name}</p>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee:</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <b>Total:</b>
              <b>${grandTotal.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter your promocode here:</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;