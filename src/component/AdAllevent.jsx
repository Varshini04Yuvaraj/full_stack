import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AdNavbar from './AdNavbar';

const AdAllevent = () => {
  
  const [events, setEvents] = useState([
    {
        name: 'Birthday Party',
        imgUrl: 'https://img.freepik.com/premium-photo/elements-birthday-party-cake-gold-colors-celebration-generative-ai_699690-5972.jpg?w=360',
      },
      {
        name: 'Anniversary',
        imgUrl: 'https://images.unsplash.com/photo-1603214924133-5c2c78471b73?ixid=MnwxMzcxOTN8MHwxfHNlYXJjaHw0NXx8d2VkZGluZ3xlbnwwfHx8fDE2NjQ4NzgyMjQ&ixlib=rb-1.2.1&fm=jpg&w=3616&h=4520&fit=max',
      },
      {
        name: 'Farewell',
        imgUrl: 'https://png.pngtree.com/background/20210711/original/pngtree-simple-watercolor-style-graduation-season-poster-picture-image_1081200.jpg',
      },
      {
        name: 'Marriage',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bengali_Hindu_wedding_DSCN1106_14.jpg',
      },
      {
        name: 'Friends Get Together',
        imgUrl: 'https://media.istockphoto.com/id/1824549402/photo/vertical-photo-of-young-group-of-happy-people-taking-selfie-portrait-outdoors.jpg?s=612x612&w=0&k=20&c=Sr8htq0OqTUQAmbVMTUebaUWKXz4KYZL9RhiFQkoxO0=',
      },
      {
        name: 'House Warming',
        imgUrl: 'https://images.squarespace-cdn.com/content/v1/5b953d9f70e80221c4a23ed0/1685635906642-2R6SR9MYYZE4HIZ8QRID/_C1_7107.JPG',
      },
      {
        name: 'Puberty Function',
        imgUrl: 'https://wevaphotography.com/wp-content/uploads/2022/04/puberty-ceremony-portraits.jpg',
      },
      {
        name: 'Engagement',
        imgUrl: 'https://image.wedmegood.com/resized/450X/uploads/images/f0fa6cb8f89b406cb9761e6feb842eafrealwedding/K_A_Eng-461.jpeg',
      },
      {
        name: 'Bangle Ceremony',
        imgUrl: 'https://images.pexels.com/photos/16364577/pexels-photo-16364577.jpeg?cs=srgb&dl=pexels-spora-weddings-278507062-16364577.jpg&fm=jpg',
      },
  ]);

  const [venues, setVenues] = useState([
    {
        name: 'Royal Palace',
        imgUrl: 'https://images.pexels.com/photos/301084/pexels-photo-301084.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        name: 'Sunset Garden',
        imgUrl: 'https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        name: 'Oceanview Pavilion',
        imgUrl: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        name: 'Mountain Retreat',
        imgUrl: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
  ]);


  const [eventForm, setEventForm] = useState({ name: '', imgUrl: '' });
  const [venueForm, setVenueForm] = useState({ name: '', imgUrl: '' });


  const [editEvent, setEditEvent] = useState(null);
  const [editVenue, setEditVenue] = useState(null);

  const navigate = useNavigate();

  
  const handleAddEvent = () => {
    setEvents([...events, eventForm]);
    setEventForm({ name: '', imgUrl: '' });
  };

  const handleDeleteEvent = (name) => {
    setEvents(events.filter(event => event.name !== name));
  };

  const handleEditEvent = () => {
    setEvents(events.map(event => event.name === editEvent.name ? editEvent : event));
    setEditEvent(null);
  };

  const handleAddVenue = () => {
    setVenues([...venues, venueForm]);
    setVenueForm({ name: '', imgUrl: '' });
  };

  const handleDeleteVenue = (name) => {
    setVenues(venues.filter(venue => venue.name !== name));
  };

  const handleEditVenue = () => {
    setVenues(venues.map(venue => venue.name === editVenue.name ? editVenue : venue));
    setEditVenue(null);
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const sectionStyles = {
    marginBottom: '40px',
    width: '100%',
    maxWidth: '1200px',
  };

  const cardStyles = {
    margin: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '200px',
  };

  const buttonStyles = {
    marginTop: '10px',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  return (
    <>
      <AdNavbar />
      <div style={containerStyles}>
        <div style={sectionStyles}>
          <h2>Manage Events</h2>
          <div style={formStyles}>
            <input
              type="text"
              placeholder="Event Name"
              value={eventForm.name}
              onChange={(e) => setEventForm({ ...eventForm, name: e.target.value })}
              style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={eventForm.imgUrl}
              onChange={(e) => setEventForm({ ...eventForm, imgUrl: e.target.value })}
              style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <Button variant="contained" color="primary" onClick={handleAddEvent} style={buttonStyles}>
              Add Event
            </Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {events.map((event, index) => (
              <div key={index} style={cardStyles}>
                <img src={event.imgUrl} alt={event.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <h3>{event.name}</h3>
                <Button variant="contained" color="secondary" onClick={() => handleDeleteEvent(event.name)} style={buttonStyles}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEditEvent(event)}
                  style={buttonStyles}
                >
                  Edit
                </Button>
              </div>
            ))}
          </div>
          {editEvent && (
            <div style={formStyles}>
              <h3>Edit Event</h3>
              <input
                type="text"
                placeholder="Event Name"
                value={editEvent.name}
                onChange={(e) => setEditEvent({ ...editEvent, name: e.target.value })}
                style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={editEvent.imgUrl}
                onChange={(e) => setEditEvent({ ...editEvent, imgUrl: e.target.value })}
                style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <Button variant="contained" color="primary" onClick={handleEditEvent} style={buttonStyles}>
                Save Changes
              </Button>
            </div>
          )}
        </div>

        <div style={sectionStyles}>
          <h2>Manage Venues</h2>
          <div style={formStyles}>
            <input
              type="text"
              placeholder="Venue Name"
              value={venueForm.name}
              onChange={(e) => setVenueForm({ ...venueForm, name: e.target.value })}
              style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={venueForm.imgUrl}
              onChange={(e) => setVenueForm({ ...venueForm, imgUrl: e.target.value })}
              style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <Button variant="contained" color="primary" onClick={handleAddVenue} style={buttonStyles}>
              Add Venue
            </Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {venues.map((venue, index) => (
              <div key={index} style={cardStyles}>
                <img src={venue.imgUrl} alt={venue.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <h3>{venue.name}</h3>
                <Button variant="contained" color="secondary" onClick={() => handleDeleteVenue(venue.name)} style={buttonStyles}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEditVenue(venue)}
                  style={buttonStyles}
                >
                  Edit
                </Button>
              </div>
            ))}
          </div>
          {editVenue && (
            <div style={formStyles}>
              <h3>Edit Venue</h3>
              <input
                type="text"
                placeholder="Venue Name"
                value={editVenue.name}
                onChange={(e) => setEditVenue({ ...editVenue, name: e.target.value })}
                style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={editVenue.imgUrl}
                onChange={(e) => setEditVenue({ ...editVenue, imgUrl: e.target.value })}
                style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <Button variant="contained" color="primary" onClick={handleEditVenue} style={buttonStyles}>
                Save Changes
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdAllevent;
