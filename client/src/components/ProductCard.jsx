import React from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-md shadow w-full max-w-sm mx-auto sm:mx-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 sm:h-48 object-cover rounded"
      />
      <h2 className="font-bold mt-3 text-base sm:text-lg">{product.name}</h2>
      <p className="text-sm sm:text-base">₹{product.price.toFixed(2)}</p>
      <button
        onClick={() => {
          addToCart(product);
          toast.success('Item added to cart!');
        }}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
