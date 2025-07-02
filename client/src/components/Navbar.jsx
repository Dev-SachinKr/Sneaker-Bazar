import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=> {
  return (
     <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-purple-600">
        SneakBazar
      </Link>
      <div className="space-x-6 text-sm sm:text-base">
        <Link to="/" className="hover:text-purple-600">
          Home
        </Link>
        <Link to="/products" className="hover:text-purple-600">
          Products
        </Link>
        <Link to="/cart" className="hover:text-purple-600">
          Cart
        </Link>
        <Link to="/login" className="hover:text-purple-600">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
