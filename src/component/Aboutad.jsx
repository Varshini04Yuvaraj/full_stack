import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Headeraf from './Headeraf';
import Headerad from './Headerad';

const Aboutad = () => {
  return (
    <>
    <Headerad/>
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          // src="https://images.pexels.com/photos/4947594/pexels-photo-4947594.jpeg?auto=compress&cs=tinysrgb&w=800"
          src="https://images.pexels.com/photos/4262413/pexels-photo-4262413.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Team members"
          style={styles.image}
        />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>About</h2>
        <p style={styles.paragraph}>
        Welcome to Dreamy Occasions, where exceptional events are our specialty. Since 2024, we’ve been dedicated to crafting unforgettable experiences for every occasion. Our passionate team of event professionals excels in turning your vision into reality, whether it’s a grand wedding, a milestone birthday, a corporate function, or a cozy gathering.

We offer a full suite of services, including meticulous event planning, innovative design, and top-tier entertainment. From selecting the perfect venue to coordinating every detail, we handle it all with creativity and precision. Our goal is to ensure your event is seamless and memorable, allowing you to enjoy every moment.

At Dreamy Occasions, we believe in making every celebration extraordinary. Let us bring your ideas to life and create a truly special event that you and your guests will cherish.
        </p>
        
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Aboutad;

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  imageContainer: {
    position: 'absolute',
    left: '0',
    top: '0',
    // bottom: '0',
    zIndex: 2,
    width: '50%', // Adjust to control how much of the image is visible behind the card
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0 50px 50px 0', // Rounded corner on the right
  },
  textContainer: {
    position: 'relative',
    zIndex: 2,
    // backgroundColor: '#083247',
    backgroundColor: '#b08b60',
    padding: '40px',
    color: '#fff',
    borderRadius: '50px 0 0 50px', // Rounded corner on the left
    maxWidth: '50%',
    height: 'auto',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 2)',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    fontFamily: "'Great Vibes', cursive",
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '30px',
    // backgroundColor: '#b08b60',
  },
  
};
