import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
      <p className="text-xl font-bold text-indigo-600">₹{product.price}</p>
      <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
