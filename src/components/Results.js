import React from 'react';
import "../styles/results.css";

const Results = ({ fertilizerName, cropType }) => {
  console.log('fertilizerName:', fertilizerName);
  console.log('cropType:', cropType);

  return (
    <div className="results-container">
      <h2 className="results-title">Results:</h2>
      <p className="results-text">Fertilizer Name: {fertilizerName}</p>
      <p className="results-text">Crop Type: {cropType}</p>
    </div>
  );
};

export default Results;
