import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import Headeraf from './Headeraf';
import Footer from './Footer';

const BookingForm = () => {
  const location = useLocation();
  const { selectedEvent, selectedVenue, selectedFood } = location.state || {};
  const { user } = useUser();
  const [eventDate, setEventDate] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method
  const [errors, setErrors] = useState({
    username: '',
    contactNumber: '',
    address: '',
    eventDate: '',
    cardNumber: '',
    cvv: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {
      username: '',
      contactNumber: '',
      address: '',
      eventDate: '',
      cardNumber: '',
      cvv: '',
    };

    if (username.length <= 2) {
      newErrors.username = 'Username must be more than 2 characters';
      valid = false;
    }

    if (contactNumber.length !== 10 || !/^\d+$/.test(contactNumber)) {
      newErrors.contactNumber = 'Contact number must be exactly 10 digits';
      valid = false;
    }

    if (!address) {
      newErrors.address = 'Address cannot be empty';
      valid = false;
    }

    if (!eventDate) {
      newErrors.eventDate = 'Event date is required';
      valid = false;
    }

    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be exactly 16 digits';
      valid = false;
    }

    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      newErrors.cvv = 'CVV must be exactly 3 digits';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      const bookingData = {
        username,
        address,
        contactnumber: contactNumber,
        date: eventDate,
        selectedevent: selectedEvent ? selectedEvent.name : '',
        selectedvenue: selectedVenue ? selectedVenue.placename : '',
        selectfood: selectedFood ? selectedFood.snackname : '',
        email,
        cardnumber: cardNumber,
        cvv,
        paymentmethod: paymentMethod,
      };

      try {
        const response = await fetch('http://localhost:8080/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });

        if (response.ok) {
          alert('Form submitted successfully');
          navigate('/mybooking');
        } else {
          alert('Failed to submit form');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form');
      }
    }
  };

  return (
    <>
      <Headeraf />
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Secure Checkout</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: 'auto',
            maxWidth: '1000px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          {/* Review Your Order Section */}
          <div style={{ width: '30%', padding: '10px' }}>
            <h3>Review Your Order (1 item)</h3>
            <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
              <p><strong>Event:</strong> {selectedEvent ? selectedEvent.name : 'No event selected'}</p>
              <p><strong>Venue:</strong> {selectedVenue ? selectedVenue.placename : 'No venue selected'}</p>
              <p><strong>Food:</strong> {selectedFood ? selectedFood.snackname : 'No food selected'}</p>
            </div>
          </div>

          {/* Delivery Address Section */}
          <div style={{ width: '35%', padding: '10px' }}>
            <h3>User Details</h3>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              First Name:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Address:
              <textarea
                rows="4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Contact Number:
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.contactNumber && <span style={{ color: 'red' }}>{errors.contactNumber}</span>}
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Event Date:
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                min={getMinDate()}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.eventDate && <span style={{ color: 'red' }}>{errors.eventDate}</span>}
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Email:
              <input
                type="email"
                value={email}
                readOnly
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </label>
          </div>

          {/* Payment Method Section */}
          <div style={{ width: '30%', padding: '10px', paddingLeft: '30px' }}>
            <h3>Select Payment Method</h3>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              /> Card
            </label>
            {errors.cardNumber && <span style={{ color: 'red' }}>{errors.cardNumber}</span>}
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength="16"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </label>
            {errors.cvv && <span style={{ color: 'red' }}>{errors.cvv}</span>}
            <label style={{ display: 'block', marginBottom: '10px' }}>
              CVV:
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength="3"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </label>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookingForm;

