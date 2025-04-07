import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { cartItems } = useContext(StoreContext); // Access cartItems from StoreContext
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems,token,setToken} = useContext(StoreContext);
  
  const navigate = useNavigate();
  
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/");
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Teddy Bakes" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Cart" />
            {/* Conditionally render the dot if there are items in the cart */}
            {cartItems.length > 0 && <div className="dot"></div>}
          </Link>
        </div>
        {!token?<button onClick={() => setShowLogin(true)}>Sign In</button>:
        <div className='navbar-profile'>
           <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li><a href="/profile">Orders</a></li>
              <hr />
              <li onClick={logout}><a>Logout</a></li>
            </ul>
        </div>}
        
      </div>
    </div>
  );
};

export default Navbar;