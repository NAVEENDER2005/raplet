import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../data/CartContext';
import { products } from '../data/products';
import './productdetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));
  const [message, setMessage] = useState('');

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
    setMessage('Product added to cart!');
    setTimeout(() => setMessage(''), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="product-details-container">
      <h2 className="product-name">{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <button onClick={addToCart} className="add-to-cart-button">
        Add to Cart
      </button>
      {message && <p className="cart-message">{message}</p>}
    </div>
  );
};

export default ProductDetails;
