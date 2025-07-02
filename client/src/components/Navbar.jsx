import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        Sneaker-Bazar
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/products" className="hover:text-yellow-300">Products</Link>
        <Link to="/cart" className="hover:text-yellow-300 relative">
          Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full px-2">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </Link>

        {user?.role === 'admin' && (
          <Link to="/admin" className="hover:text-yellow-300 font-semibold">
            Admin
          </Link>
        )}

        {!user ? (
          <>
            <Link to="/login" className="hover:text-yellow-300">Login</Link>
            <Link to="/register" className="hover:text-yellow-300">Register</Link>
          </>
        ) : (
          <>
            <span className="text-sm text-gray-300">Hi, {user.name.split(" ")[0]}</span>
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
