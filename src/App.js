import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './data/CartContext';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Cart from './components/CartPage';
import Header from './components/Header'
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import About from './components/About';
import CheckoutPage from './components/CheckoutPage';
import GooglePayPage from './components/GooglePayPage';
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header></Header>
        <div className="container mx-auto p-4">
          
          <Routes>
          
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/google-pay" element={<GooglePayPage />} />
  </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;



