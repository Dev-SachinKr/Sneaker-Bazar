import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link
      to="/"
      className="text-2xl font-extrabold text-yellow-400 hover:text-yellow-500 transition flex items-center gap-2"
    >
      Sneaker-Bazar
      <img
        src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f45f.svg"
        alt="Sneaker Emoji"
        className="w-6 h-6 inline"
      />
    </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-yellow-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
          <Link to="/cart" className="relative hover:text-yellow-400 transition flex items-center">
            Cart
            <span className="ml-1 bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-xs font-semibold shadow-md">
              {cartItems?.length || 0}
            </span>
          </Link>

          {user?.role === 'admin' && (
            <Link
              to="/admin"
              className="border border-yellow-400 rounded px-3 py-1 hover:bg-yellow-400 hover:text-gray-900 transition font-semibold"
            >
              Admin
            </Link>
          )}

          {!user ? (
            <>
              <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
              <Link to="/register" className="hover:text-yellow-400 transition">Register</Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-yellow-300 font-semibold">Hi, {user?.name?.split(' ')[0]}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
          <Link to="/cart" className="relative hover:text-yellow-400 transition flex items-center">
            Cart
            <span className="ml-1 bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-xs font-semibold shadow-md">
              {cartItems?.length || 0}
            </span>
          </Link>

          {user?.role === 'admin' && (
            <Link
              to="/admin"
              className="border border-yellow-400 rounded px-3 py-1 hover:bg-yellow-400 hover:text-gray-900 transition font-semibold"
            >
              Admin
            </Link>
          )}

          {!user ? (
            <>
              <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
              <Link to="/register" className="hover:text-yellow-400 transition">Register</Link>
            </>
          ) : (
            <div className="flex flex-col space-y-2">
              <span className="text-yellow-300 font-semibold">Hi, {user?.name?.split(' ')[0]}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
