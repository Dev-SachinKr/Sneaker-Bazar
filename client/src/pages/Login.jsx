import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showDemo, setShowDemo] = useState(false);

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
    const { email, password } = formData;

    if (!email || !password) {
      return toast.error('Please fill in all fields');
    }

    try {
      await login(email, password);
      toast.success('Login successful!');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-8">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 text-gray-100">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-yellow-400 text-center tracking-wide">
          Login
        </h2>

        {/* Demo Toggle Button */}
        <div className="mb-5 text-center">
          <button
            type="button"
            onClick={() => setShowDemo(!showDemo)}
            className="text-sm font-medium text-red-500 hover:text-red-800 transition duration-200"
          >
            {showDemo ? 'Hide Demo Admin Credentials' : 'CLICK ME for Demo Admin Credentials'}
          </button>
        </div>

        {/* Demo Credentials Box */}
        {showDemo && (
          <div className="mb-6 bg-gray-700 border-2 border-yellow-400 rounded-xl p-4 sm:p-5 shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-yellow-300 mb-2 text-center">
              🛠 Admin Test Account
            </h3>
            <div className="space-y-1 text-sm sm:text-base text-center">
              <p>
                <span className="font-medium text-yellow-200">Email:</span>{' '}
                <code className="text-yellow-100">admin@gmail.com</code>
              </p>
              <p>
                <span className="font-medium text-yellow-200">Password:</span>{' '}
                <code className="text-yellow-100">Admin@123</code>
              </p>
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
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
              autoComplete="current-password"
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
