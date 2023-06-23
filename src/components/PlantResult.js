import React from 'react';
import "../styles/plantlookup.css"

const PlantResult = ({ plant }) => {
  return (
    <div className='plant-lookup-container'>
      <h2>{plant.common_name}</h2>
      <p>
      <div class="des-name">Scientific Name:</div>{' '}
        {Array.isArray(plant.scientific_name)
          ? plant.scientific_name.join(', ')
          : plant.scientific_name}
      </p>
      <p>
      <div class="des-name">Other Name:</div>{' '}
        {Array.isArray(plant.other_name)
          ? plant.other_name.join(', ')
          : plant.other_name || 'N/A'}
      </p>
      <p><div class="des-name">Cycle:</div> {plant.cycle}</p>
      <p><div class="des-name">Watering:</div> {plant.watering}</p>
      <p>
      <div class="des-name">Sunlight:</div>{Array.isArray(plant.sunlight) ? plant.sunlight.join(', ') : plant.sunlight || 'N/A'}
      </p>
      <p><div class="des-name">Leaf:</div> {plant.leaf ? 'Yes' : 'No'}</p>
      <p>
      <div class="des-name">Leaf Color:</div>{' '}
        {Array.isArray(plant.leaf_color)
          ? plant.leaf_color.join(', ')
          : plant.leaf_color || 'N/A'}
      </p>
      <p><div class="des-name">Care Level:</div> {plant.care_level}</p>
      <p><div class="des-name">Description: </div>{plant.description}</p>
      <img src={plant.default_image.thumbnail} alt={plant.common_name} />
    </div>
  );
};



export default PlantResult;
