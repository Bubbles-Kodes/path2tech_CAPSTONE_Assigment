import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);

  console.log("Food list being rendered:", food_list); // Debugging: Log the entire food list

  return (
    <div className='food-display' id='food-display'>
      <h2>What You Cravin'?</h2>
    <div className="food-display-list">
      {food_list.map((food) => {
        console.log("Food item being passed to FoodItem:", food); // Debugging: Log each food item
        return (
          <FoodItem
            key={food._id} // Ensure a unique key is used
            _id={food._id} // Pass _id to FoodItem
            name={food.name}
            description={food.description}
            img={food.img}
            price={food.price}
          />
        );
      })}
    </div>
  </div>
  );
};

export default FoodDisplay;