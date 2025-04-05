import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems,food_list,removeFromCart, decreaseQuantity, addToCart } = useContext(StoreContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const deliveryFee = totalPrice > 0 ? 10.50 : 0;
  const grandTotal = totalPrice + deliveryFee;

  const navigate = useNavigate();

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
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div>
              <div className='cart-items-title cart-items-item' key={item.name}>
              <img src={item.img} alt="" />
              <p>${item.price.toFixed(2)}</p>
              <p className="cart-items-controls">
              <button className='cart-button' onClick={() => addToCart(item)}>+</button>
              <span className='quantity'>{item.quantity}</span>
              <button className='cart-button' onClick={() => decreaseQuantity(item.name)}>-</button>
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
            <p>${deliveryFee}</p>
          </div>
          <div className="cart-total-details">
            <b>Total:</b>
            <b>${grandTotal.toFixed(2)}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
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