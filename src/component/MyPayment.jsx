import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';

const MyPayment = () => {
  const { state } = useLocation();
  const venueName = state?.venue || '';
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expiration, setExpiration] = useState('');
  const [subscription, setSubscription] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {};
    if (!paymentMethod) errors.paymentMethod = 'Please select a payment method';
    if (!firstName) errors.firstName = 'First name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!cardNumber) errors.cardNumber = 'Card number is required';
    if (!securityCode) errors.securityCode = 'Security code is required';
    if (!expiration) errors.expiration = 'Expiration date is required';
    if (!subscription) errors.subscription = 'Please select a subscription type';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        // Check if the payment status for the venue already exists
        const paymentResponse = await axios.get('http://localhost:3001/payments');
        const existingPayment = paymentResponse.data.find(payment => payment.venue === venueName);

        if (existingPayment) {
          // Update the existing payment status
          await axios.put(`http://localhost:3001/payments/${existingPayment.id}`, { ...existingPayment, status: true });
        } else {
          // Create a new payment status
          await axios.post('http://localhost:3001/payments', { venue: venueName, status: true });
        }

        setPaymentSuccess(true);
        setTimeout(() => navigate('/booking'), 2000); // Redirect after a short delay
      } catch (error) {
        console.error('Error marking payment as paid:', error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2>Payment Form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Venue: {venueName}</label>
          </div>

          <div style={styles.inputGroup}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="debit"
                checked={paymentMethod === 'debit'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Debit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="credit"
                checked={paymentMethod === 'credit'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
          </div>
          {formErrors.paymentMethod && <p style={styles.error}>{formErrors.paymentMethod}</p>}

          <div style={styles.inputGroup}>
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
            />
          </div>
          {formErrors.firstName && <p style={styles.error}>{formErrors.firstName}</p>}

          <div style={styles.inputGroup}>
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
            />
          </div>
          {formErrors.lastName && <p style={styles.error}>{formErrors.lastName}</p>}

          <div style={styles.inputGroup}>
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              style={styles.input}
            />
          </div>
          {formErrors.cardNumber && <p style={styles.error}>{formErrors.cardNumber}</p>}

          <div style={styles.inputGroup}>
            <label>Security Code</label>
            <input
              type="text"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              style={styles.input}
            />
          </div>
          {formErrors.securityCode && <p style={styles.error}>{formErrors.securityCode}</p>}

          <div style={styles.inputGroup}>
            <label>Card Expiration</label>
            <input
              type="text"
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              placeholder="MM/YY"
              style={styles.input}
            />
          </div>
          {formErrors.expiration && <p style={styles.error}>{formErrors.expiration}</p>}

          <div style={styles.inputGroup}>
            <label>Subscription Type</label>
            <select value={subscription} onChange={(e) => setSubscription(e.target.value)} style={styles.input}>
              <option value="">Select</option>
              <option value="silver">Silver - 10000</option>
              <option value="gold">Gold - 20000</option>
              <option value="platinum">Platinum - 30000</option>
            </select>
          </div>
          {formErrors.subscription && <p style={styles.error}>{formErrors.subscription}</p>}

          <button type="submit" style={styles.button}>Submit Payment</button>
        </form>

        {paymentSuccess && <p style={styles.success}>Payment was successful!</p>}
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  success: {
    color: 'green',
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default MyPayment;
