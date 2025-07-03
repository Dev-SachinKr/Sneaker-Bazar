import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Carousel */}
        <Carousel />

        {/* Heading */}
        <div className="flex items-center justify-between my-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            🔥 Latest Sneakers
          </h1>
          <Link
            to="/products"
            className="text-yellow-300 hover:text-yellow-500 transition font-semibold text-sm md:text-3xl"
          >
            View All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 8).map(product => (
            <div
              key={product._id}
              className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transition transform duration-200 group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:opacity-90 transition"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-blue-400 font-bold text-lg">₹{product.price.toFixed(2)}</p>
                <p className="text-gray-400 text-sm">{product.brand}</p>
                <p className="text-gray-500 text-xs italic">{product.category}</p>

                <button
                  onClick={() => {
                    addToCart(product);
                    toast.success(`${product.name} added to cart`);
                  }}
                  className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded transition cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
