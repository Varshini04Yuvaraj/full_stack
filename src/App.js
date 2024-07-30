// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './component/BookingContext';
import MyBooking from './component/MyBooking';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Allevent from './component/Allevent';
import Routing from './component/Routing';
import MyPayment from './component/MyPayment';
import AdAllevent from './component/AdAllevent';
import AdBookings from './component/AdBookings';
import { AuthProvider } from './component/AuthContext';

const App = () => (
  <AuthProvider>
  <BookingProvider>
    <Routing/>
    {/* <AdAllevent/> */}
   
  </BookingProvider>
  </AuthProvider>
);

export default App;
