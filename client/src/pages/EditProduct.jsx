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

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/products`);
      const product = res.data.find(p => p._id === id);
      if (!product) return toast.error('Product not found');

      setFormData({
        name: product.name,
        price: product.price,
        image: product.image,
        brand: product.brand,
        size: product.size.join(','),
      });
    } catch (err) {
      toast.error('Failed to load product');
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Token:", localStorage.getItem('token'));

  const payload = {
    ...formData,
    size: formData.size.split(',').map(s => Number(s.trim()))
  };

  try {
    await axios.put(`/products/${id}`, payload);
    toast.success("Product updated");
    navigate('/admin');
  } catch (err) {
    console.error("Update failed response:", err.response);
    console.error("Update failed message:", err.message);
    toast.error(err.response?.data?.message || err.message || "Update failed");
  }
};


  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Product Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          placeholder="Price"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="brand"
          value={formData.brand}
          placeholder="Brand"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="size"
          value={formData.size}
          placeholder="Sizes (comma separated)"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
