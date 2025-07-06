import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { toast } from 'react-hot-toast';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    brand: '',
    size: '',
  });
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/products`);
      const product = res.data.find(p => p._id === id);
      if (!product) {
        toast.error('Product not found');
        navigate('/admin');
        return;
      }

      setFormData({
        name: product.name,
        price: product.price,
        image: product.image,
        brand: product.brand,
        size: product.size.join(','),
      });
    } catch (err) {
      toast.error('Failed to load product');
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      size: formData.size.split(',').map(s => Number(s.trim())),
    };

    try {
      await axios.put(`/products/${id}`, payload);
      toast.success("Product updated");
      navigate('/admin');
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-yellow-400 text-xl">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-lg p-8 text-gray-100">
        <h1 className="text-3xl font-extrabold mb-8 text-yellow-400 text-center tracking-wide">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Product Name"
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            placeholder="Price"
            onChange={handleChange}
            required
            min={0}
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            placeholder="Image URL"
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="brand"
            value={formData.brand}
            placeholder="Brand"
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="size"
            value={formData.size}
            placeholder="Sizes (comma separated)"
            onChange={handleChange}
            required
            className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
