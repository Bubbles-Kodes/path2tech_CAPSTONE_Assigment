import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);

  

  return (
    <div className='food-display' id='food-display'>
      <h2>What You Cravin'?</h2>
    <div className="food-display-list">
      {category==="All"? food_list.map(filterfood => 
  <FoodItem
    key={filterfood._id} // Ensure a unique key is used
    _id={filterfood._id} // Pass _id to FoodItem
    name={filterfood.name}
    description={filterfood.description}
    img={filterfood.img}
    price={filterfood.price}
  />) : food_list.filter(food => food.category===category).map (filterfood => {

        return (
          <FoodItem
            key={filterfood._id} // Ensure a unique key is used
            _id={filterfood._id} // Pass _id to FoodItem
            name={filterfood.name}
            description={filterfood.description}
            img={filterfood.img}
            price={filterfood.price}
          />
        );
      })}
    </div>
  </div>
  );
};

export default FoodDisplay;