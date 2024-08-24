import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Headeraf from './Headeraf';
import Footer from './Footer';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const email = localStorage.getItem('userEmail') || '';

  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:8080/api/bookings/${email}`)
        .then(response => {
          setBookings(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the bookings!', error);
        });
    }
  }, [email]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/bookings/${id}`)
      .then(() => {
        setBookings(bookings.filter(booking => booking.id !== id));
        alert('Booking deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the booking!', error);
      });
  };

  // Inline styles
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  };

  const contentStyle = {
    flex: '1',
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
    width: '300px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const tableStyle = {
    width: '100%',
    marginBottom: '10px',
  };

  const thTdStyle = {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={appContainerStyle}>
      <Headeraf />
        <h2>My Bookings</h2>
      <div style={contentStyle}>
        {bookings.length > 0 ? (
          bookings.map(booking => (
            <div key={booking.id} style={cardStyle}>
              <table style={tableStyle}>
                <tbody>
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
                    <th style={thTdStyle}>Select Food:</th>
                    <td style={thTdStyle}>{booking.selectfood}</td>
                  </tr>
                </tbody>
              </table>
              <button style={buttonStyle} onClick={() => handleDelete(booking.id)}>Delete Booking</button>
            </div>
          ))
        ) : (
          <p>No bookings found for this email.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBooking;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Headeraf from './Headeraf';
// import Footer from './Footer';

// const MyBooking = () => {
//   const [bookings, setBookings] = useState([]);
//   const email = localStorage.getItem('userEmail') || '';

//   useEffect(() => {
//     if (email) {
//       axios.get(`http://localhost:8080/api/bookings/${email}`)
//         .then(response => {
//           setBookings(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the bookings!', error);
//         });
//     }
//   }, [email]);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/bookings/${id}`)
//       .then(() => {
//         setBookings(bookings.filter(booking => booking.id !== id));
//         alert('Booking deleted successfully');
//       })
//       .catch(error => {
//         console.error('There was an error deleting the booking!', error);
//       });
//   };

//   // Inline styles
//   const appContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     backgroundColor: '#f8f9fa',
//   };

//   const contentStyle = {
//     flex: '1',
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     padding: '20px',
//   };

//   const cardStyle = {
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     margin: '10px',
//     padding: '20px',
//     width: '300px',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   };

//   const buttonStyle = {
//     marginTop: '20px',
//     padding: '10px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };

//   return (
//     <div style={appContainerStyle}>
//       <Headeraf />
//         <h2>My Bookings</h2>
//       <div style={contentStyle}>
//         {bookings.length > 0 ? (
//           bookings.map(booking => (
//             <div key={booking.id} style={cardStyle}>
//               <p><strong>Username:</strong> {booking.username}</p>
//               <p><strong>Address:</strong> {booking.address}</p>
//               <p><strong>Contact Number:</strong> {booking.contactnumber}</p>
//               <p><strong>Date:</strong> {booking.date}</p>
//               <p><strong>Selected Event:</strong> {booking.selectedevent}</p>
//               <p><strong>Selected Venue:</strong> {booking.selectedvenue}</p>
//               <p><strong>Select Food:</strong> {booking.selectfood}</p>
//               <button style={buttonStyle} onClick={() => handleDelete(booking.id)}>Delete Booking</button>
//             </div>
//           ))
//         ) : (
//           <p>No bookings found for this email.</p>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyBooking;
