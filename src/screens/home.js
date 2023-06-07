import React from 'react';
import '../styles/mainhome.css';
import plant from '../assets/plant.png';


const Home = () => {
  return (
    <div className='home-page'>
      <div className='body-content'>
        <div className='intro-title'>
        <h1>Welcome to Plantdex - The ultimate solution for managing your plants and ensuring their optimal health and growth!</h1>
        </div>
        <div className='info'>
        <div className="text-container">
          <h2>What It Does?</h2>
          <p>Plantdex is a valuable web-based tool that offers comprehensive plant management solutions. Its innovative features include a plant disease detection system that supports multiple plant species, a comprehensive plant database, and a fertilizer prediction module that utilizes n,p,k values. Additionally, the platform is continuously evolving to include more advanced features in its future updates. With Plantdex, users can better manage their plants and ensure their optimal growth and health.</p>
          
          </div>
          <img src= {plant} alt="plant" className="plant-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
