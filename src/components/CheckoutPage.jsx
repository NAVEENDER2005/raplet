import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentMethod === 'GooglePay') {
      navigate('/google-pay');
    } else {
      alert('Order placed with Cash on Delivery!');
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Checkout</h2>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            value="COD"
            checked={paymentMethod === 'COD'}
            onChange={() => setPaymentMethod('COD')}
          />
          Cash on Delivery (COD)
        </label>
        <label>
          <input
            type="radio"
            value="GooglePay"
            checked={paymentMethod === 'GooglePay'}
            onChange={() => setPaymentMethod('GooglePay')}
          />
          Google Pay
        </label>
      </div>
      <button onClick={handlePayment} className="checkout-button">
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;
