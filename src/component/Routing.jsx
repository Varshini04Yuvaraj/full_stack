import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import HeroSection from './HeroSection';
import LoginPage from './LoginPage';
import About from './About';
import Dashboard from './Dashboard';
import Userpage from './Userpage';
import Adminpage from './Adminpage';
import Headeraf from './Headeraf';
import HeroSectionaf from './HeroSectionaf';
import Aboutaf from './Aboutaf';
import EventList from './EventList';
import VenueList from './VenueList';
import FoodList from './FoodList';
import Book from './Book';
import BookingForm from './BookingForm';
import Payment from './Payment';
import HeroSectionad from './HeroSectionad';
import Aboutad from './Aboutad';
import Viewevent from './Viewevent';
import Mybooking from './Mybooking';
import AllBooking from './AllBooking';

const Routing = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HeroSection />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/userpage' element={<Userpage />} />
        <Route path='/adminpage' element={<Adminpage />} />
        <Route path='/headeraf' element={<Headeraf />} />
        <Route path='/herosectionaf' element={<HeroSectionaf />} />
        <Route path='/aboutaf' element={<Aboutaf />} />
        <Route path='bookingform' element={<BookingForm/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/herosectionad' element={<HeroSectionad/>}/>
        <Route path='/aboutad' element={<Aboutad/>}/>
        <Route path='/viewevent' element={<Viewevent/>}/>
        <Route path='/mybooking' element={<Mybooking/>}/>
        <Route path='/allbooking' element={<AllBooking/>}/>
        {/* Event, Venue, Food Selection Routes */}
        <Route 
          path='/eventlist' 
          element={<EventList setSelectedEvent={setSelectedEvent} />} 
        />
        <Route 
          path='/venuelist' 
          element={
            <VenueList 
              selectedEvent={selectedEvent} 
              setSelectedVenue={setSelectedVenue} 
            />
          } 
        />
        <Route 
          path='/foodlist' 
          element={
            <FoodList 
              selectedEvent={selectedEvent} 
              selectedVenue={selectedVenue} 
              setSelectedFood={setSelectedFood} 
            />
          } 
        />
        <Route 
          path='/book' 
          element={
            <Book 
              selectedEvent={selectedEvent} 
              selectedVenue={selectedVenue} 
              selectedFood={selectedFood} 
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default Routing;

// import React from 'react'
// import Header from './Header'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import SignupPage from './SignupPage'
// import HeroSection from './HeroSection'
// import LoginPage from './LoginPage'
// import About from './About'
// import Dashboard from './Dashboard'
// import Userpage from './Userpage'
// import Adminpage from './Adminpage'
// import Headeraf from './Headeraf'
// import HeroSectionaf from './HeroSectionaf'
// import Aboutaf from './Aboutaf'
// import EventList from './EventList'
// import VenueList from './VenueList'
// import FoodList from './FoodList'

// const Routing = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
    
//       <Route exact path='/' element={<HeroSection/>}/>
//       <Route path="/signup" element={<SignupPage />}/>
//       <Route path="/login" element={<LoginPage/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path='/dashboard' element={<Dashboard/>}/>
//       <Route path='/userpage' element={<Userpage/>}/>
//       <Route path='/adminpage' element={<Adminpage/>}/>
//       <Route path='/headeraf' element={<Headeraf/>}/>
//       <Route path='/herosectionaf' element={<HeroSectionaf/>}/>
//       <Route path='/aboutaf' element={<Aboutaf/>}/>
//       <Route path='/herosectionaf' element={<HeroSectionaf/>}/>
//       <Route path='/eventlist' element={<EventList/>}/>
//       <Route path='/venuelist' element={<VenueList/>}/>
//       <Route path='/foodlist' elemrnt={<FoodList/>}/>
//     </Routes>

//     </BrowserRouter>
//   )
// }

// export default Routing