import React, { useState } from 'react';

const events = [
  { id: 1, name: 'Engagement', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Wedding Planner', imageUrl: 'https://images.pexels.com/photos/18881689/pexels-photo-18881689/free-photo-of-bride-and-groom-during-traditional-weeding-ceremony.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Corporate events', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'House Warming', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, name: 'Birthday party', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, name: 'Bangle ceremony', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, name: 'Anniversary', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, name: 'College Alumni meet', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 9, name: 'Puberty function', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, name: 'Baby naming ceremony', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, name: 'Product Launch event', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, name: 'Award ceremonies Planner', imageUrl: 'https://images.pexels.com/photos/1146345/pexels-photo-1146345.jpeg?auto=compress&cs=tinysrgb&w=800' },

];

const itemsPerPage = 4;

const EventDetail = () => {
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return events.slice(startIndex, endIndex);
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const imageStyle = (id) => ({
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: id === hoveredImageId ? '0px 8px 16px rgba(0, 0, 0, 0.3)' : '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transform: id === hoveredImageId ? 'scale(1.05)' : 'scale(1)',
  });

  const nameStyle = {
    marginBottom: '8px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div style={containerStyle}>
        {getCurrentPageItems().map((event) => (
          <div
            style={itemStyle}
            key={event.id}
            onMouseOver={() => setHoveredImageId(event.id)}
            onMouseOut={() => setHoveredImageId(null)}
          >
            <div style={nameStyle}>{event.name}</div>
            <img
              src={event.imageUrl}
              alt={event.name}
              style={imageStyle(event.id)}
            />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ fontSize: '20px', margin: '0 10px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        >
          &lt;
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ fontSize: '20px', margin: '0 10px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
