import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const { user, register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      return toast.error('All fields are required');
    }

    if (password.length < 6) {
      return toast.error('Password must be at least 6 characters');
    }

    try {
      await register(name, email, password);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-8">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 text-gray-100">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-yellow-400 text-center tracking-wide">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 placeholder-gray-400 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg shadow-md hover:bg-yellow-500 transition text-sm sm:text-base"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
