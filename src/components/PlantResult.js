import React from 'react';
import "../styles/plantlookup.css"

const PlantResult = ({ plant }) => {
  return (
    <div className='plant-lookup-container'>
      <h2>{plant.common_name}</h2>
      <p>
        Scientific Name:{' '}
        {Array.isArray(plant.scientific_name)
          ? plant.scientific_name.join(', ')
          : plant.scientific_name}
      </p>
      <p>
        Other Name:{' '}
        {Array.isArray(plant.other_name)
          ? plant.other_name.join(', ')
          : plant.other_name || 'N/A'}
      </p>
      <p>Cycle: {plant.cycle}</p>
      <p>Watering: {plant.watering}</p>
      <p>
        Sunlight: {Array.isArray(plant.sunlight) ? plant.sunlight.join(', ') : plant.sunlight || 'N/A'}
      </p>
      <p>Leaf: {plant.leaf ? 'Yes' : 'No'}</p>
      <p>
        Leaf Color:{' '}
        {Array.isArray(plant.leaf_color)
          ? plant.leaf_color.join(', ')
          : plant.leaf_color || 'N/A'}
      </p>
      <p>Care Level: {plant.care_level}</p>
      <p>Description: {plant.description}</p>
      <img src={plant.default_image.thumbnail} alt={plant.common_name} />
    </div>
  );
};

export default PlantResult;
