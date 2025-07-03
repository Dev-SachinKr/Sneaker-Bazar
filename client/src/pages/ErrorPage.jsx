import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Error"
        className="w-40 h-40 mb-6 opacity-80 animate-pulse"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-red-500">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-300 mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition transform hover:scale-105"
      >
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
