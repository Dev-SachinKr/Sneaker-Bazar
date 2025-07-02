import React from 'react'

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition rounded p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-purple-600 font-bold text-sm mb-3">₹ {price}</p>
      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-1 rounded transition">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard