import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Testimonial from './Testimonial';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header style={styles.header}>
      <div style={styles.logo}>Dreamy Occasions</div>
      <nav>
        <ul style={styles.navList}>
          <li><Link to='/' style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About</Link></li>
          <li><Link to="/signup" style={styles.navLink}>Signup</Link></li>
          <li><Link to="/login" style={styles.navLink}>Login</Link></li>
          
        </ul>
      </nav>
    </header>
    
    </>
  );
}

export default Header;

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    padding: '10px 20px',
  },
};
