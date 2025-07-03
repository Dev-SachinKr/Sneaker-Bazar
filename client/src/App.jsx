import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddProduct from './pages/AddProduct';
import AdminDashboard from './pages/AdminDashboard';
import EditProduct from './pages/EditProduct';
import ErrorPage from './pages/ErrorPage'; 
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />
        <Route
          path="/admin"
          element={
            user?.role === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        
        {/* Catch-all 404 route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
