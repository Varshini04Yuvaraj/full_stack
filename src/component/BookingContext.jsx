import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookedVenues, setBookedVenues] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState({});

  const bookVenue = (venue) => {
    setBookedVenues([...bookedVenues, venue]);
  };

  const unbookVenue = (venue) => {
    setBookedVenues(bookedVenues.filter(v => v !== venue));
  };

  const markAsPaid = (venue) => {
    setPaymentStatus((prevStatus) => ({ ...prevStatus, [venue]: true }));
  };

  return (
    <BookingContext.Provider value={{ bookedVenues, bookVenue, unbookVenue, paymentStatus, markAsPaid }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
