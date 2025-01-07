import React from 'react';
import { Link } from 'react-router-dom'; 

const NavLink = () => {
  return (
    <nav class="flex justify-end bg-[#415616] font-heading text-white text-xl pr-8">
      <Link class="m-3 mx-8" to="/">Home</Link>
      <Link class="m-3 mx-8" to="/favorites">Favorites</Link>
      <Link class="m-3 mx-8" to="/logout">Logout</Link>
    </nav>
  )
}

export default NavLink