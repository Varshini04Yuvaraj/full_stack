import React from 'react';

import { Link } from 'react-router-dom';
const Headeraf = () => {
  return (
    <>
    <header style={styles.header}>
      <div style={styles.logo}>Dreamy Occasions</div>
      <nav>
        <ul style={styles.navList}>

          <li><Link to='/herosectionaf' style={styles.navLink}>Home</Link></li>
          <li><Link to="/aboutaf" style={styles.navLink}>About</Link></li>
          <li><Link to="/eventlist" style={styles.navLink}>Book Now</Link></li>
          <li><Link to="/mybooking" style={styles.navLink}>My Bookings</Link></li>
          {/* <li><Link to="/dashboard" style={styles.navLink}>Dashboard</Link></li> */}
          <li><Link to="/" style={styles.navLink}>Logout</Link></li>
        </ul>
      </nav>
    </header>
    
    </>
  );
}

export default Headeraf;

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
