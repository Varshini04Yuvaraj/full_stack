import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Adjust import if needed
import Footer from './Footer'; // Adjust import if needed
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AdNavbar from './AdNavbar';

const AdBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/bookings');
        setBookings(response.data);

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

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/bookings/${id}`);
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      margin: '0 auto',
      maxWidth: '800px',
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
      <AdNavbar />
      <div style={styles.container}>
        <h2>All Bookings ({bookings.length})</h2>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} style={styles.bookingCard}>
              <div style={styles.title}>{booking.eventType}</div>
              <div style={styles.description}>{booking.description}</div>
              <div><strong>Date:</strong> {booking.eventDate}</div>
              <div><strong>Head Count:</strong> {booking.headCount}</div>
              <div><strong>Venue:</strong> {booking.venue}</div>
              <div><strong>Status:</strong> {paymentStatus[booking.venue] ? 'Paid' : 'Not Paid'}</div>
              <ButtonGroup variant="contained" style={styles.buttonGroup}>
                <Button color="secondary" onClick={() => handleDelete(booking.id)}>
                  Delete
                </Button>
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

export default AdBookings;
