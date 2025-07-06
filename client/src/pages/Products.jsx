import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { toast } from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import ShimmerProductCard from '../components/ShimmerProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products');
        setProducts(res.data);
        setDisplayed(res.data);
      } catch (err) {
        toast.error('Failed to load products');
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setDisplayed(filtered);
  }, [search, category, products]);

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center tracking-wide">🛍️ All Products</h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center items-center max-w-xl mx-auto">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg w-full sm:w-72 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg w-full sm:w-48
                     focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
        >
          <option value="">All Categories</option>
          {[...new Set(products.map(p => p.category))].map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 sm:px-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <ShimmerProductCard key={index} />
          ))}
        </div>
      ) : displayed.length === 0 ? (
        <p className="text-center text-gray-400 text-lg mt-12">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 sm:px-0">
          {displayed.map(product => (
            <div
              key={product._id}
              className="bg-gray-850 border border-gray-700 rounded-2xl overflow-hidden shadow-lg
                         hover:scale-105 hover:shadow-yellow-500/50 transition-transform duration-300 group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-52 object-cover group-hover:brightness-90 transition"
              />
              <div className="p-4 sm:p-5">
                <h2 className="text-lg sm:text-xl font-semibold tracking-wide truncate">{product.name}</h2>
                <p className="text-yellow-400 font-extrabold text-lg mt-1">₹{product.price.toFixed(2)}</p>
                <p className="text-gray-400 text-sm mt-1 truncate">{product.brand}</p>
                <p className="text-gray-500 text-xs italic mt-1">{product.category}</p>
                <button
                  onClick={() => {
                    addToCart(product);
                    toast.success(`🛒 ${product.name} added to cart!`);
                  }}
                  className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg
                             shadow-lg transition cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
