# Shopping Cart with Payment Integration

This is a simple shopping cart application built with React. The application allows users to add items to their cart, remove items from their cart, and proceed to a checkout page where they can choose a payment method. The project demonstrates a basic integration of Google Pay for payment processing.

## Features

- Add items to the cart
- Remove items from the cart
- View cart summary
- Proceed to checkout
- Google Pay integration for payment processing
- Generates and downloads a bill in a zip file upon successful payment

## Technologies Used

- React
- React Router
- JSZip
- file-saver
- Google Pay API

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/shopping-cart.git
    cd shopping-cart
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Payment Integration

This project includes a basic integration of Google Pay. The integration is done using the Google Pay API and the code is set up for a test environment.

### Implementation Details

1. **Google Pay Button**: The Google Pay button is added to the checkout page, and the Google Pay API is initialized.

2. **Payment Request**: When the user clicks the Google Pay button, a payment request is created and sent to Google Pay.

3. **Payment Processing**: Google Pay processes the payment and returns a payment token.

4. **Bill Generation**: Upon successful payment, a bill is generated, zipped using JSZip, and downloaded using file-saver.

### Code Snippets

Here are the relevant parts of the code for the payment integration:

```javascript
import React, { useEffect } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const CheckoutPage = () => {

  useEffect(() => {
    const paymentsClient = new window.google.payments.api.PaymentsClient({ environment: 'TEST' });

    const paymentDataRequest = {
      // Your payment data request object
    };

    const googlePayButton = paymentsClient.createButton({
      onClick: () => onGooglePayButtonClicked(paymentsClient, paymentDataRequest),
    });

    document.getElementById('container').appendChild(googlePayButton);
  }, []);

  const onGooglePayButtonClicked = (paymentsClient, paymentDataRequest) => {
    paymentsClient.loadPaymentData(paymentDataRequest).then(paymentData => {
      handlePaymentSuccess(paymentData);
    }).catch(err => {
      console.error(err);
    });
  };

  const handlePaymentSuccess = (paymentData) => {
    const zip = new JSZip();
    const billContent = generateBillContent(); // Function to generate bill content
    zip.file('bill.txt', billContent);

    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, 'bill.zip');
    });
  };

  const generateBillContent = () => {
    // Generate bill content
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div id="container"></div>
    </div>
  );
};

export default CheckoutPage;

