import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';

const PlaceOrder = () => {

  const { cartItems,food_list,removeFromCart, decreaseQuantity, addToCart } = useContext(StoreContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const deliveryFee = totalPrice > 0 ? 10.50 : 0;
  const grandTotal = totalPrice + deliveryFee;


  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
      </div>
      <input type="text" placeholder='Email address' />
      <input type="text" placeholder='Street' />
      <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip Code' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='Phone' name="" id="" />
    </div>
    <div className="place-order-right">
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
        <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
   </form>
  )
}

export default PlaceOrder
