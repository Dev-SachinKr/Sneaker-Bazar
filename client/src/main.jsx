import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster position="top-center"  />
          <App />
        </AuthProvider>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
);
