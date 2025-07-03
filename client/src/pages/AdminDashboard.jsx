import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchProducts();
    }
  }, [user]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/products');
      setProducts(res.data);
    } catch (err) {
      toast.error('Failed to load products');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
      toast.success('Product deleted');
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-red-500 text-xl font-semibold">
        Access denied. Admins only.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 p-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">Admin Dashboard</h1>
          <button
            onClick={() => navigate('/admin/add-product')}
            className="bg-blue-600 hover:bg-blue-700 transition rounded px-5 py-2 font-semibold shadow-md"
          >
            + Add Product
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700 bg-gray-800">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-gray-700 text-gray-300 uppercase">
              <tr>
                <th className="p-3 border-r border-gray-600">Image</th>
                <th className="p-3 border-r border-gray-600">Name</th>
                <th className="p-3 border-r border-gray-600">Price</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr
                  key={product._id}
                  className="border-t border-gray-700 hover:bg-gray-700 transition"
                >
                  <td className="p-3 border-r border-gray-600">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md mx-auto"
                    />
                  </td>
                  <td className="p-3 border-r border-gray-600 font-semibold">{product.name}</td>
                  <td className="p-3 border-r border-gray-600">₹{product.price.toFixed(2)}</td>
                  <td className="p-3 space-x-2 flex justify-center">
                    <Link
                      to={`/admin/edit/${product._id}`}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow-sm transition font-semibold"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded shadow-sm transition font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-6 text-gray-400">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
