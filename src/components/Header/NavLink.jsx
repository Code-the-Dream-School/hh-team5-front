// This component is responsible for the navigation links.
import React from 'react';
import { Link } from 'react-router-dom'; // To use NavLink
import './NavLinkStyle.css';

const NavLink = () => {
  return (
    <div className='nav-bar'>
      <Link to="/">  Home</Link>
      <Link to="/favorites">  Favorites</Link>
      {/* login/logout based on status */}
      <Link to="/logout">  Logout</Link>
    </div>
  );
};

export default NavLink;
