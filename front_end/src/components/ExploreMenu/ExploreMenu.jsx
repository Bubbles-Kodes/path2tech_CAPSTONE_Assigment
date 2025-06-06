import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const handleCategoryClick = (item) => {
    setCategory((prev) =>
      prev === item.menu_name ? 'All' : item.menu_name.charAt(0).toUpperCase() + item.menu_name.slice(1)
    );

    // Scroll to the food display section
    const foodDisplaySection = document.getElementById('food-display');
    if (foodDisplaySection) {
      foodDisplaySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a variety of delicious cheesecakes, cakes, cookies, & shakes</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => handleCategoryClick(item)}
              key={index}
              className='explore-menu-list-item'
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_img}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;