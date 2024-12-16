// This component is responsible for the navigation links.
import React from 'react';
import { Link } from 'react-router-dom'; // To use NavLink

const NavLink = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      {/* login/logout based on status */}
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default NavLink;
