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
      const res = await axios.post('/products', payload);
      toast.success('Product added successfully!');
      navigate('/products');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Failed to add product');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="size" placeholder="Size (e.g. 8, 9, 10)" value={form.size} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text"name="category"placeholder="Category"value={form.category}onChange={handleChange}className="w-full border p-2 rounded" />
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
