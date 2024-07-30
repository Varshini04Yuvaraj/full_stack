// // EventContext.js
// import React, { createContext, useState, useContext } from 'react';

// const EventContext = createContext();

// export const EventProvider = ({ children }) => {
//   const [events, setEvents] = useState([
//     // Your initial events
//   ]);

//   const [venues, setVenues] = useState([
//     // Your initial venues
//   ]);

//   const addEvent = (event) => {
//     setEvents([...events, event]);
//   };

//   const deleteEvent = (name) => {
//     setEvents(events.filter(event => event.name !== name));
//   };

//   const editEvent = (updatedEvent) => {
//     setEvents(events.map(event => event.name === updatedEvent.name ? updatedEvent : event));
//   };

//   const addVenue = (venue) => {
//     setVenues([...venues, venue]);
//   };

//   const deleteVenue = (name) => {
//     setVenues(venues.filter(venue => venue.name !== name));
//   };

//   const editVenue = (updatedVenue) => {
//     setVenues(venues.map(venue => venue.name === updatedVenue.name ? updatedVenue : venue));
//   };

//   return (
//     <EventContext.Provider value={{ events, venues, addEvent, deleteEvent, editEvent, addVenue, deleteVenue, editVenue }}>
//       {children}
//     </EventContext.Provider>
//   );
// };

// export const useEvent = () => useContext(EventContext);
