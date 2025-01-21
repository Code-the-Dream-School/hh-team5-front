import React from 'react';
import { Link } from 'react-router-dom'; 

const NavLink = () => {
  
  return (
    <nav 
      style={{ backgroundColor: location.pathname === '/' ? '#415616' : '#6b8f24' }}
      className="flex justify-center font-heading text-white text-l min-[420px]:text-xl md:justify-end md:text-2xl md:pr-8"
    >
      <Link className="my-4 mx-4 hover:underline sm:mx-6 md:mx-8" to="/">Home</Link>
      <Link className="my-4 mx-4 hover:underline sm:mx-6 md:mx-8" to="/findarecipe">Find a Recipe</Link>
      <Link className="my-4 mx-4 hover:underline sm:mx-6 md:mx-8" to="/favorites">Favorites</Link>
      <Link className="my-4 mx-4 hover:underline sm:mx-6 md:mx-8" to="/">Logout</Link>
    </nav>
  )
}

export default NavLink