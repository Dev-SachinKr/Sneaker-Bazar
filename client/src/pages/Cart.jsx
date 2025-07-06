import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty cart illustration"
          className="w-32 sm:w-40 h-32 sm:h-40 mb-6 opacity-80 animate-bounce"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Your cart is empty 😔</h2>
        <p className="text-gray-300 mb-6 max-w-md px-4 sm:px-0">
          Looks like you haven’t added anything yet. Explore our products and fill your cart with amazing items!
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition transform hover:scale-105"
        >
          🔙 Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center sm:text-left">🧾 Your Cart</h2>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center bg-white/5 border border-white/10 rounded-xl shadow-md backdrop-blur-sm p-4 gap-4
                         hover:shadow-xl hover:scale-[1.02] transform transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 sm:w-28 h-24 sm:h-28 object-cover rounded-lg shadow"
              />

              <div className="flex-1 w-full">
                <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>
                <p className="text-sm sm:text-base text-gray-300">Size: {item.size}</p>
                <p className="text-sm sm:text-base text-gray-300 mb-2">Price: ₹{item.price}</p>

                <div className="flex items-center space-x-3 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded text-white text-lg"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded text-white text-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="mt-4 md:mt-0 md:ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium transition shadow hover:shadow-lg hover:scale-105 transform cursor-pointer"
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:text-right text-xl sm:text-2xl font-bold text-yellow-400">
          Total: ₹{(totalPrice || 0).toFixed(2)}
        </div>

        <button
          onClick={() => alert('🛍️ Checkout feature coming soon!')}
          className="cursor-pointer mt-6 w-full md:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
