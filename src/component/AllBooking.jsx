import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Headerad from './Headerad';

const AllBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch all bookings from the API
    axios.get('http://localhost:8080/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  // Inline styles
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  };

  const tableStyle = {
    width: '100%',
    marginBottom: '10px',
    borderCollapse: 'collapse',
  };

  const thTdStyle = {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const headerStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  return (
    <div style={appContainerStyle}>
      <Headerad />
      <h1 style={headerStyle}>All Bookings</h1>
      <div style={contentStyle}>
        {bookings.length > 0 ? (
          bookings.map(booking => (
            <div key={booking.id} style={cardStyle}>
              <table style={tableStyle}>
                <tbody>
                  <tr>
                    <th style={thTdStyle}>ID:</th>
                    <td style={thTdStyle}>{booking.id}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Email:</th>
                    <td style={thTdStyle}>{booking.email}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Username:</th>
                    <td style={thTdStyle}>{booking.username}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Address:</th>
                    <td style={thTdStyle}>{booking.address}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Contact Number:</th>
                    <td style={thTdStyle}>{booking.contactnumber}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Date:</th>
                    <td style={thTdStyle}>{booking.date}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Selected Event:</th>
                    <td style={thTdStyle}>{booking.selectedevent}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Selected Venue:</th>
                    <td style={thTdStyle}>{booking.selectedvenue}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Selected Food:</th>
                    <td style={thTdStyle}>{booking.selectfood}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Card Number:</th>
                    <td style={thTdStyle}>{booking.cardnumber}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>CVV:</th>
                    <td style={thTdStyle}>{booking.cvv}</td>
                  </tr>
                  <tr>
                    <th style={thTdStyle}>Payment Method:</th>
                    <td style={thTdStyle}>{booking.paymentmethod}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>No bookings available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default AllBooking;
