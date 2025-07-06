import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide">
            Sneaker-Bazar
          </h2>
          <p className="text-gray-400 text-sm mt-2 italic">
            Your ultimate sneaker destination
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 gap-2 sm:gap-0 text-base font-medium items-center">
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Shop</a>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">About</a>
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center text-yellow-400">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition-colors duration-300">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.8v-6.9H8v-2.9h2.5v-2.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6v1.8h2.8l-.4 2.9h-2.4v6.9A10 10 0 0 0 22 12"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-300 transition-colors duration-300">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.34-1.6.57-2.46.68a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9 12.17 12.17 0 0 1-8.83-4.48 4.28 4.28 0 0 0 1.32 5.71 4.26 4.26 0 0 1-1.94-.53v.05a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.82A8.8 8.8 0 0 1 2 18.57 12.12 12.12 0 0 0 8.29 20c7.54 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.36 8.36 0 0 0 22.46 6z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition-colors duration-300">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-800 pt-5 text-gray-500 select-none">
        © {new Date().getFullYear()} Sneaker-Bazar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
