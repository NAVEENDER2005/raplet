import React, { useContext } from 'react';
import CartContext from '../data/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cartpage.css';

const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    
    navigate('/checkout');
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <div className="cart-page-container">
      <h2 className="cart-heading">Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button onClick={handleBuyNow} className="buy-now-button">
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;


