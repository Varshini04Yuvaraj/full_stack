import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Headeraf from './Headeraf';
import Footer from './Footer';

const itemsPerPage = 4;

const FoodList = ({ selectedEvent, selectedVenue, setSelectedFood }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/food');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  const handleImageClick = (food) => {
    setSelectedFood(food);
    localStorage.setItem('selectedFood', JSON.stringify(food));
    navigate('/book');
  };

  const totalPages = Math.ceil(foodItems.length / itemsPerPage);
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return foodItems.slice(startIndex, endIndex);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Headeraf/>
      <div style={{ flex: '1', padding: '20px' }}>
        <h1 style={{ fontWeight: '400', fontFamily: '"Playfair Display", serif' }}>Choose Your Food</h1><br />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {getCurrentPageItems().length > 0 ? (
            getCurrentPageItems().map((food) => (
              <div
                key={food.id}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onMouseOver={() => setHoveredImageId(food.id)}
                onMouseOut={() => setHoveredImageId(null)}
                onClick={() => handleImageClick(food)}
              >
               
                <img
                  src={food.snackimage}
                  style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    borderRadius: '20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: food.id === hoveredImageId ? '0px 8px 16px rgba(0, 0, 0, 0.3)' : '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    transform: food.id === hoveredImageId ? 'scale(1.05)' : 'scale(1)',
                  }}
                  alt={food.name}
                /><br></br>
                <div style={{ marginBottom: '8px',fontFamily: '"Playfair Display", serif', fontWeight: '200', textAlign: 'center', fontSize: '23px', color: '#333', textShadow: '1px 1px 3px rgba(0, 0, 0, 0)' }}>
                  {food.snackname}
                </div>
              </div>
            ))
          ) : (
            <p>No food items available</p>
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
      <Footer/>
    </div>
  );
};

export default FoodList;
