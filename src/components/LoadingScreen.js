import React from 'react';
import LoaderImg from "../assets/loading.gif";


const LoadingScreen = () => {
  return (
    <div>
      <h2>Loading...</h2>
      <img src= {LoaderImg} alt="Loader" className="loader" />
    </div>
  );
};

export default LoadingScreen;
