import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      // backgroundColor: 'grey',
      background: 'rgb(202, 201, 201)',
      padding: '10px 20px',
    },
    logo: {
      height: '40px',
      width: '40px',
      marginRight: '20px',
      borderRadius: '50%', // Make the logo circular
    },
    navItem: {
      color: 'black',
      // textTransform: 'lowercase',
      marginLeft: '10px',
    },
    spacer: {
      flexGrow: 1,
    },
  };
  const s=useNavigate();
  const same=()=>{
    s('/afhome');
  }
  const alleve=()=>{
    s('/allevent');
  }
  const book=()=>{
    s('/booking');
  }
  const logout=()=>{
    s('/')
  }
  const logoUrl = 'https://i.etsystatic.com/21014836/r/il/e15efe/5285705916/il_300x300.5285705916_18ib.jpg'; // Replace this URL with your actual logo URL

  return (
    <div style={styles.navbar}>
      <img src={logoUrl} alt="Logo" style={styles.logo} />
      <h3 style={styles.navItem}>Roxie Paris Decor</h3>
      <div style={styles.spacer}></div>
      <Button onClick={same}href="#home" style={styles.navItem}>Home</Button>
     
      {/* <Button href="#dashboard" style={styles.navItem}>Dashboard</Button> */}
      
      <Button onClick={alleve}href="#allevents" style={styles.navItem}>Allevents</Button>
      
      <Button onClick={book}href="#mybookings" style={styles.navItem}>MyBookings</Button>
     
      {/* <Button href="#mypayments" style={styles.navItem}>MyPayments</Button> */}
      
      <Button onClick={logout}style={styles.navItem}>LogOut</Button>
    </div>
  );
};

export default Navbar;
