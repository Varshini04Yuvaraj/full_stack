import React from 'react';
import Services from './Services';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Header from './Header';

const HeroSection = () => {
  return (
    <>
    <Header/>
    <section style={styles.heroSection}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Special Planning for Your Special Day.</h1>
        <p style={styles.heroText}>No more bridezilla or wedding blues when you have a proper wedding planner partner like us.</p>
        {/* <button style={styles.btnBook}>Book Now</button> */}
        {/* <button style={styles.btnLearn}>Learn More</button> */}
      </div>
      <div style={styles.heroImage}>
        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Wedding" style={styles.image} />
      </div>
    </section>
    
     <Services />
     <Testimonial />
     <Footer /></>
  );
}

export default HeroSection;

const styles = {
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px',
    backgroundColor: '#f8f5f1',
  },
  heroContent: {
    maxWidth: '50%',
  },
  heroTitle: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#b08b60',
  },
  heroText: {
    fontSize: '18px',
    marginBottom: '40px',
  },
  btnBook: {
    padding: '15px 30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
    backgroundColor: '#b08b60',
    color: '#fff',
  },
  btnLearn: {
    padding: '15px 30px',
    border: '2px solid #b08b60',
    cursor: 'pointer',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: '#333',
  },
  heroImage: {
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    maxWidth: '500px', 
    height: 'auto', 
    objectFit: 'cover',
  },
};
