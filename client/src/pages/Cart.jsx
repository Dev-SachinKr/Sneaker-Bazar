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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty cart illustration"
        className="w-40 h-40 mb-6 opacity-80 animate-bounce"
      />
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Your cart is empty 😔</h2>
      <p className="text-gray-300 mb-6 max-w-md">
        Looks like you haven’t added anything yet. Explore our products and fill your cart with amazing items!
      </p>
      <Link
        to="/products"
        className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition transform hover:scale-105">
        🔙 Continue Shopping
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">🧾 Your Cart</h2>

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
                className="w-28 h-28 object-cover rounded-lg shadow"
              />

              <div className="flex-1 w-full">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-gray-300">Size: {item.size}</p>
                <p className="text-sm text-gray-300 mb-2">Price: ₹{item.price}</p>

                <div className="flex items-center space-x-3 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded text-white text-lg"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded text-white text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="mt-4 md:mt-0 md:ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium transition shadow hover:shadow-lg hover:scale-105 transform cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-right text-2xl font-bold text-yellow-400">
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
