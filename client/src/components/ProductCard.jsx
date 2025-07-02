import React from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-md shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="font-bold mt-2">{product.name}</h2>
      <p>₹{product.price.toFixed(2)}</p>
      <button
        onClick={() => {
          addToCart(product);
          toast.success('Item added to cart!');
        }}
        
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
