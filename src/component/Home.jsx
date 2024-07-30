import React, { useEffect, useState } from 'react';
import './Home.css';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(Cookies.get('username') || '');

  const loginfun = () => {
    navigate('/loginpage');
  };

  const signfun = () => {
    navigate('/sign');
  };

  const about1 = () => {
    navigate('/about');
  };

  const home1 = () => {
    navigate('/');
  };

  const handleLogin = () => {
    Cookies.set('username', 'JohnDoe', { expires: 7 });
    setUsername('JohnDoe');
    navigate('/loginpage');
  };

  const handleLogout = () => {
    Cookies.remove('username');
    setUsername('');
    navigate('/');
  };

  const images = [
    'https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5005252/pexels-photo-5005252.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://media.istockphoto.com/id/535403859/photo/dancing-at-disco.jpg?s=612x612&w=0&k=20&c=mVZX9qAsgnOv8C0t9gR81ofJ0JG20Orc4Io9r4AKNQQ=',
  ];
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Navbar Styles
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    padding: '10px 20px',
    color: 'black'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const avatarStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontFamily: 'Georgia, serif',
  };

  const navMenuStyle = {
    display: 'flex',
    gap: '15px',
  };

  const buttonStyle = {
    fontSize: '16px',
    fontFamily: 'Georgia, serif',
    color: 'black',
    backgroundColor: 'transparent',
    // border: '2px solid #ffffff',
    borderRadius: '5px',
    padding: '8px 16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    textTransform: 'uppercase',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ffffff',
    color: '#1e1e1e',
  };

  return (
    <>
      <div style={navbarStyle}>
        <div style={logoStyle}>
          <Avatar style={avatarStyle} alt="Logo" src="https://i.etsystatic.com/21014836/r/il/e15efe/5285705916/il_300x300.5285705916_18ib.jpg" />
          <h1 style={titleStyle}>Party Event Management</h1>
        </div>
        <div style={navMenuStyle}>
          <Button 
            onClick={home1} 
            style={buttonStyle} 
            // onMouseEnter={(e) => e.target.style = {...buttonStyle, ...buttonHoverStyle}} 
            // onMouseLeave={(e) => e.target.style = buttonStyle}
            
          >
            Home
          </Button>
          <Button 
            onClick={about1} 
            style={buttonStyle} 
            // onMouseEnter={(e) => e.target.style = {...buttonStyle, ...buttonHoverStyle}} 
            // onMouseLeave={(e) => e.target.style = buttonStyle}
          >
            About
          </Button>
          <Button 
            onClick={loginfun} 
            style={buttonStyle} 
            // onMouseEnter={(e) => e.target.style = {...buttonStyle, ...buttonHoverStyle}} 
            // onMouseLeave={(e) => e.target.style = buttonStyle}
          >
            Login
          </Button>
          <Button 
            onClick={signfun} 
            style={buttonStyle} 
          //   onMouseEnter={(e) => e.target.style = {...buttonStyle, ...buttonHoverStyle}} 
          //   onMouseLeave={(e) => e.target.style = buttonStyle}
          >
            SignUp
          </Button>
        </div>
      </div>
      <div className="hcss4" style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
      <h1 style={{ paddingLeft: '450px' }}>Party Event Management</h1>
      <div className="ref">
        <div style={{ backgroundImage: 'url(https://www.logodesign.net/logo/decent-ornaments-with-stars-and-leaves-5944ld.png?nwm=1&nws=1&industry=event-planner&sf=&txt_keyword=All)', height: '250px', width: '200px', backgroundRepeat: 'no-repeat', paddingRight: '800px' }}>
        </div>
      </div>
      <div className='dev'>
        <div className='pic1'></div>
        <div className='pic2'></div>
        <div className='pic3'></div>
        <div className='pic4'></div>
      </div>
      <div className='dev'>
        <Button style={{ fontSize: '17px', fontFamily: 'Georgia, serif', color: "black", fontWeight: "bold" }}>Birthday party</Button>
        <Button style={{ fontSize: '17px', fontFamily: 'Georgia, serif', color: "black", fontWeight: "bold" }}>Anniversary</Button>
        <Button style={{ fontSize: '17px', fontFamily: 'Georgia, serif', color: "black", fontWeight: "bold" }}>Farewell</Button>
        <Button style={{ fontSize: '17px', fontFamily: 'Georgia, serif', color: "black", fontWeight: "bold" }}>Friends meet up</Button>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>We are a party event management company dedicated to making your special occasions memorable. Our team of experienced planners ensures that every detail is taken care of.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: contact@partyevents.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Party Street, Fun City, FC 12345</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Party Event Management | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
