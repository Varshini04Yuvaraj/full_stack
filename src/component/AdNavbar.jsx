import React from 'react';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Assuming you still want to use this CSS file

const AdNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  const home4=()=>{
    navigate('/adafhome')
  }
  const adall=()=>{
    navigate('/adallevent')
  }
  const adbook=()=>{
    navigate('/adbookings')
  }
  const logoUrl = 'https://i.etsystatic.com/21014836/r/il/e15efe/5285705916/il_300x300.5285705916_18ib.jpg'; // Replace this URL with your actual logo URL

  return (
    <>
      <div style={styles.navbarContainer}>
        <div style={styles.navbarContent}>
          <div style={styles.logoContainer}>
          <img src={logoUrl} alt="Logo" style={styles.logo} />

          </div>
          
          <div style={styles.buttonsContainer}>
            <Button onClick={home4}style={styles.button}>Home</Button>
            <Button onClick={adall}style={styles.button}>Allevent</Button>
            <Button onClick={adbook}style={styles.button}>Bookings</Button>
            {/* <Button style={styles.button}>Payment</Button> */}
            <Button onClick={handleLogout} style={styles.button}>Logout</Button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  navbarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    // padding: '5px px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navbarContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
  },
  logoContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  },
  buttonsContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    fontSize: '17px',
    fontFamily: 'Georgia, serif',
    color: 'black',
    fontWeight: 'bold',
  },
};

export default AdNavbar;
