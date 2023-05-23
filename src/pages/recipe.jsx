import React from 'react'
import {MdFavorite} from 'react-icons/Md'
const Recipe = () => {
  return (
    <div className="card">
      <img src="./src/pages/food image.webp" alt="Food" className="card-image" />
      <div><button onClick={() => {alert('save to favourites')}}><a href="./Fevourite"><MdFavorite /></a></button></div>
      <div className="card-details">
        <h2 className="card-title">Delicious Food</h2>
        <p className="card-description">This is a description of the delicious food.</p>
        <ul className="card-steps">
          <li>Step 1: Prepare the ingredients</li>
          <li>Step 2: Cook the food</li>
          <li>Step 3: Serve and enjoy</li>
        </ul>
      </div>
    </div>
  );
}

export default Recipe