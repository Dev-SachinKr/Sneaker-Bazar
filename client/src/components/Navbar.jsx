import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <Link to="/" className="text-2xl font-extrabold text-yellow-400 hover:text-yellow-500 transition">
        Sneaker-Bazar
      </Link>

      <div className="flex gap-8 items-center text-sm font-medium">
        <Link to="/" className="hover:text-yellow-400 transition">
          Home
        </Link>
        <Link to="/products" className="hover:text-yellow-400 transition">
          Products
        </Link>
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
            <Link to="/login" className="hover:text-yellow-400 transition">
              Login
            </Link>
            <Link to="/register" className="hover:text-yellow-400 transition">
              Register
            </Link>
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
    </nav>
  );
};

export default Navbar;
