import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Footer from './Footer';
import { useBooking } from './BookingContext';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [paymentStatus, setPaymentStatus] = useState({});
  const { unbookVenue } = useBooking();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem('userEmail');
    setUserEmail(loggedInUserEmail);

    const fetchBookings = async () => {
      try {
        const bookingResponse = await axios.get('http://localhost:3001/bookings');
        const userBookings = bookingResponse.data.filter(booking => booking.email === loggedInUserEmail);
        setBookings(userBookings);

        const paymentResponse = await axios.get('http://localhost:3001/payments');
        const paymentStatusMap = {};
        paymentResponse.data.forEach(payment => {
          paymentStatusMap[payment.venue] = payment.status;
        });
        setPaymentStatus(paymentStatusMap);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    if (loggedInUserEmail) {
      fetchBookings();
    }
  }, []); // Add dependency array to control when this effect runs

  const handleDelete = async (id, venue) => {
    try {
      await axios.delete(`http://localhost:3001/bookings/${id}`);
      setBookings(bookings.filter(booking => booking.id !== id));
      unbookVenue(venue); // Update the venue status
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handlePayment = (venue) => {
    navigate('/payment', { state: { venue } });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      margin: '0 auto',
      maxWidth: '600px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    bookingCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '20px',
      padding: '20px',
      width: '100%',
      textAlign: 'center',
      position: 'relative',
    },
    buttonGroup: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      marginBottom: '10px',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2>My Bookings ({bookings.length})</h2>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} style={styles.bookingCard}>
              <div style={styles.title}>{booking.eventType}</div>
              <div style={styles.description}>{booking.description}</div>
              <div><strong>Date:</strong> {booking.eventDate}</div>
              <div><strong>Head Count:</strong> {booking.headCount}</div>
              <div><strong>Venue:</strong> {booking.venue}</div>
              <ButtonGroup variant="contained" style={styles.buttonGroup}>
                {paymentStatus[booking.venue] ? (
                  <Button color="secondary" disabled>
                    Paid
                  </Button>
                ) : (
                  <>
                    <Button color="secondary" onClick={() => handlePayment(booking.venue)}>
                      Pay
                    </Button>
                    <Button color="secondary" onClick={() => handleDelete(booking.id, booking.venue)}>
                      Delete
                    </Button>
                  </>
                )}
              </ButtonGroup>
            </div>
          ))
        ) : (
          <div>No bookings found</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Booking;
