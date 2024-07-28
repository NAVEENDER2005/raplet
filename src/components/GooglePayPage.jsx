import React, { useEffect } from 'react';
import './GooglePayPage.css';

const GooglePayPage = () => {
  useEffect(() => {
    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST',
    });

    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Example Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '10.00',
        currencyCode: 'USD',
        countryCode: 'US',
      },
    };

    const googlePayButton = paymentsClient.createButton({
      onClick: () => {
        paymentsClient.loadPaymentData(paymentDataRequest).then((paymentData) => {
          console.log(paymentData);
          alert('Payment Successful!');
        }).catch((err) => {
          console.error(err);
        });
      },
    });

    document.getElementById('google-pay-button').appendChild(googlePayButton);
  }, []);

  return (
    <div className="google-pay-container">
      
      <div id="google-pay-button"></div>
    </div>
  );
};

export default GooglePayPage;
