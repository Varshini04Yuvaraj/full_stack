import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Headeraf from './Headeraf';
import Footer from './Footer';

const itemsPerPage = 4;

const VenueList = ({ selectedEvent, setSelectedVenue }) => {
  const [venues, setVenues] = useState([]);
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/venues');
        setVenues(response.data);
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };

    fetchVenues();
  }, []);

  const handleImageClick = (venue) => {
    setSelectedVenue(venue);
    localStorage.setItem('selectedVenue', JSON.stringify(venue));
    navigate('/foodlist');
  };

  const totalPages = Math.ceil(venues.length / itemsPerPage);
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return venues.slice(startIndex, endIndex);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Headeraf />
      <div style={{ flex: '1' }}> {/* Ensures this section expands to fill available space */}
        <br /><br />
        <h1 style={{fontWeight: '400',fontFamily: '"Playfair Display", serif'
 }}>Choose Your Venue</h1><br />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {getCurrentPageItems().length > 0 ? (
            getCurrentPageItems().map((venue) => (
              <div
                key={venue.id}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onMouseOver={() => setHoveredImageId(venue.id)}
                onMouseOut={() => setHoveredImageId(null)}
                onClick={() => handleImageClick(venue)}
              >
                <div style={{ marginBottom: '8px', fontWeight: 'bold', textAlign: 'center' }}>
                  {venue.name}
                </div>
                <img
                  src={venue.placeimage}
                  style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    borderRadius: '20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: venue.id === hoveredImageId ? '0px 8px 16px rgba(0, 0, 0, 0.3)' : '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    transform: venue.id === hoveredImageId ? 'scale(1.05)' : 'scale(1)',
                  }}
                  alt={venue.name}
                /><br />
 <div style={{ marginBottom: '8px',fontFamily: '"Playfair Display", serif', fontWeight: '200', textAlign: 'center', fontSize: '23px', color: '#333', textShadow: '1px 1px 3px rgba(0, 0, 0, 0)' }}>
                  {venue.placename}
                </div>
              </div>
            ))
          ) : (
            <p>No venues available</p>
          )}
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

export default VenueList;

