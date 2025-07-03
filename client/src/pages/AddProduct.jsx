import React, { useState } from 'react';
import axios from '../utils/axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    price: '',
    size: '',
    category: '',
    image: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sizeArray = form.size.split(',').map(num => Number(num.trim()));

    const payload = {
      ...form,
      size: sizeArray,
    };

    try {
      await axios.post('/products', payload);
      toast.success('Product added successfully!');
      navigate('/products');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Failed to add product');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-lg p-8 text-gray-100">
        <h2 className="text-3xl font-extrabold mb-8 text-yellow-400 text-center tracking-wide">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            min={0}
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="size"
            placeholder="Size (e.g. 8, 9, 10)"
            value={form.size}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
