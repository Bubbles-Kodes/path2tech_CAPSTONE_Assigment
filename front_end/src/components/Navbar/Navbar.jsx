import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartQuantity, token, setToken } = useContext(StoreContext); // Access getTotalCartQuantity from StoreContext
  const [menu, setMenu] = useState("home");

  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/");
  };

  const totalQuantity = getTotalCartQuantity(); // Get the total quantity of items in the cart

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Teddy Bakes" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => navigate("/#menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => navigate("/#Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        
    {/* <img src={assets.search_icon} alt="Search" />*/}
      <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Cart" />
            {/* Conditionally render the red dot if there are items in the cart */}
            {totalQuantity > 0 && <div className="dot">{totalQuantity}</div>}
          </Link>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}><a>Orders</a></li>
              <hr />
              <li onClick={logout}><a>Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;