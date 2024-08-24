import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Headeraf from './Headeraf';

const itemsPerPage = 4;

const EventList = ({ setSelectedEvent }) => {
  const [events, setEvents] = useState([]);
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleImageClick = (event) => {
    setSelectedEvent(event);
    localStorage.setItem('selectedEvent', JSON.stringify(event)); // Save to localStorage
    navigate('/venuelist');
  };

  const totalPages = Math.ceil(events.length / itemsPerPage);
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return events.slice(startIndex, endIndex);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Headeraf /><br></br><br></br>
      <h1 style={{fontWeight: '400',fontFamily: '"Playfair Display", serif'
 }}>Choose Your Event</h1><br></br>
      <div style={{ flex: '1' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {getCurrentPageItems().map((event) => (
            <div
              key={event.id}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onMouseOver={() => setHoveredImageId(event.id)}
              onMouseOut={() => setHoveredImageId(null)}
              onClick={() => handleImageClick(event)}
            >
              {/* <div style={{ marginBottom: '8px', fontWeight: 'bold', textAlign: 'center' }}>
                {event.name}
              </div> */}
              <img
              
                src={event.image}
                style={{
                  width: '250px',
                  height: '250px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  borderRadius: '20px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: event.id === hoveredImageId ? '0px 8px 16px rgba(0, 0, 0, 0.3)' : '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  transform: event.id === hoveredImageId ? 'scale(1.05)' : 'scale(1)',
                }}
                alt={event.name}
              /><br></br>
               {/* <div style={{ marginBottom: '8px', fontWeight: 'bold', textAlign: 'center' }}>
                {event.name}
              </div> */}
              <div style={{ marginBottom: '8px',fontFamily: '"Playfair Display", serif', fontWeight: '200', textAlign: 'center', fontSize: '23px', color: '#333', textShadow: '1px 1px 3px rgba(0, 0, 0, 0)' }}>
                  {event.name}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ fontSize: '20px', margin: '0 10px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          >
            &lt;
          </button>
          <span style={{ margin: '0 10px' }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ fontSize: '20px', margin: '0 10px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
          >
            &gt;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventList;
