import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('pending'); // payment status: 'pending', 'success', 'failure'
  
  // Simulate a payment process
  useEffect(() => {
    // Simulate API call for payment
    const timer = setTimeout(() => {
      // You can toggle between 'success' or 'failure' for testing purposes
      const isSuccess = true; // set this to false to simulate a failure

      if (isSuccess) {
        setStatus('success');
      } else {
        setStatus('failure');
      }
    }, 3000); // Simulate a 3-second API call delay

    return () => clearTimeout(timer);
  }, []);

  const handlePaymentConfirmation = () => {
    if (status === 'success') {
      navigate('/confirmation'); // Redirect to confirmation page
    } else {
      alert('Payment failed. Please try again.');
      navigate('/booking'); // Redirect back to booking form
    }
  };

  return (
    <div className="payment-container">
      <h1>PhonePe Dummy Payment Gateway</h1>
      <p>Processing payment...</p>
      {status === 'pending' && <p>Please wait while we process your payment.</p>}
      {status === 'success' && (
        <div className="success">
          <p>Payment successful!</p>
          <button onClick={handlePaymentConfirmation}>Continue</button>
        </div>
      )}
      {status === 'failure' && (
        <div className="failure">
          <p>Payment failed.</p>
          <button onClick={handlePaymentConfirmation}>Retry</button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
