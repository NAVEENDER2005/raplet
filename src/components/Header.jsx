import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/medicine.png" alt="Raplets Logo" className="h-10 w-auto mr-4" /> {/* Adjust the height and margin as needed */}
          <div className="text-2xl font-bold">Raplets</div>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About us</Link></li>
          <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

