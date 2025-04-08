import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu'); // Reference the ExploreMenu section by its id
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling effect
    }
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite Cheesecakes!</h2>
        <p>Rich, creamy, and tangy!</p>
        <button onClick={scrollToMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;