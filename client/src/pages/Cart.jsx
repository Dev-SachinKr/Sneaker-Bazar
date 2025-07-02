import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0)
    return <div className="p-4 text-center text-xl">Your cart is empty</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center border p-4 rounded-md shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">Price: ₹{item.price}</p>
              <p className="text-gray-600">Size: {item.size}</p>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-2xl font-bold">
        Total: ₹{(totalPrice || 0).toFixed(2)}
      </div>

      <button
        onClick={() => alert('Checkout feature coming soon!')}
        className="mt-4 px-6 py-3 bg-yellow-500 rounded text-black font-semibold hover:bg-yellow-600"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
