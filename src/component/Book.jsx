import React, { useEffect, useState } from 'react';
import Headeraf from './Headeraf';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    const event = JSON.parse(localStorage.getItem('selectedEvent'));
    const venue = JSON.parse(localStorage.getItem('selectedVenue'));
    const food = JSON.parse(localStorage.getItem('selectedFood'));

    console.log('Retrieved Event:', event);
    console.log('Retrieved Venue:', venue);
    console.log('Retrieved Food:', food);

    setSelectedEvent(event);
    setSelectedVenue(venue);
    setSelectedFood(food);
  }, []);
  const  navigate=useNavigate();
  const handleConfirmBooking = () => {
    navigate('/bookingform', {
      state: { selectedEvent, selectedVenue, selectedFood }
    });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Headeraf />
      <main style={{ flex: '1', padding: '20px' }}>
        <h1>Confirm Your Booking</h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <h2>Selected Event</h2>
            <p>{selectedEvent ? selectedEvent.name : 'No event selected'}</p>
            {selectedEvent?.image && (
              <img
                src={selectedEvent.image}
                style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '20px' }}
                alt={selectedEvent?.name}
              />
            )}
          </div>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <h2>Selected Venue</h2>
            <p>{selectedVenue ? selectedVenue.placename : 'No venue selected'}</p>
            {selectedVenue?.placeimage && (
              <img
                src={selectedVenue.placeimage}
                style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '20px' }}
                alt={selectedVenue?.placename}
              />
            )}
          </div>
          <div style={{ flex: '1' }}>
            <h2>Selected Food</h2>
            <p>{selectedFood ? selectedFood.snackname : 'No food selected'}</p>
            {selectedFood?.snackimage && (
              <img
                src={selectedFood.snackimage}
                style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '20px' }}
                alt={selectedFood?.snackname}
              />
            )}
          </div>
        </div>

        <button onClick={handleConfirmBooking} style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>
          Confirm Booking
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
