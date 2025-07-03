import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {user?.role !== 'admin' ? (
        <p className="text-red-500">Access denied. Admins only.</p>
      ) : (
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="p-2 border">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mx-auto" />
                </td>
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border">₹{product.price.toFixed(2)}</td>
                <td className="p-2 border space-x-2">
                 <Link to={`/admin/edit/${product._id}`} className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Edit</Link>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
