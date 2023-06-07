import React from 'react';
import '../styles/tools.css';
import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Tool = () => {
  return (
    <>
      <div className="container">
      <h1 className="heading">Modules</h1>
      <div className="buttons-container">
        <Link to="/plant_disease" className="tool-link">
          <button className="rectangle-button dir-control">Plant disease Detection</button>
        </Link>
        <Link to="/recommender" className="tool-link">
          <button className="rectangle-button dir-control">Fertilizer recommender</button>
        </Link>
        <Link to="/weather" className="tool-link">
          <button className="rectangle-button dir-control">Weather</button>
        </Link>
        <Link to="/lookup" className="tool-link">
          <button className="rectangle-button dir-control">Plant Lookup</button>
        </Link>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Tool;
