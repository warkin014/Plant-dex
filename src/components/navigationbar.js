import React from 'react';
import '../styles/navbar.css'; 
import logo from '../assets/logo.png';
import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-content">
      <div className="logo">
        <Link to={"/home"} className="nav-logo-link">
      <img src= {logo} alt="Logo" className="logo-image" /></Link>
      </div>
      <Link to={"/home"} className="nav-logo-link"><div className="website-name">PLANTDEX</div></Link>
      <div className="nav-links">
        <Link to={"/tools"} className="nav-link" >Tools</Link>
        <Link to={"/updates"} className="nav-link">Updates</Link>
      </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
