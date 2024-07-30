import React, { useEffect, useState } from 'react';
import './Home.css';

import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { useNavigate } from 'react-router-dom';
import AdNavbar from './AdNavbar';
import Navbar from './Navbar';

const Afhome = () => {

   const loginfunnav=useNavigate();
   const loginfun=()=>{
    loginfunnav('/loginpage')
   }
   const signfunnav=useNavigate();
   const signfun=()=>{
    signfunnav('/sign')
   }
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

  return (
    <>
  
        <Navbar/>
         <div>

         </div>
         <div className="hcss4" style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
         <br></br>
         <h1 style={{paddingLeft:'450px'}}>Party Event Management</h1>
         <div className="ref">
               <div style={{backgroundImage:'url(https://www.logodesign.net/logo/decent-ornaments-with-stars-and-leaves-5944ld.png?nwm=1&nws=1&industry=event-planner&sf=&txt_keyword=All)',height:'250px',width:'200px' ,backgroundRepeat:'no-repeat',paddingRight:'800px'}}>
         </div>
         </div>
         <br></br>
         <div className='dev'>
          <div className='pic1'></div>
          <div className='pic2'></div>
          <div className='pic3'></div>
          <div className='pic4'></div>
         </div>
         <div className='dev'>
          
          <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Birthday party</Button>
          <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Anniversery</Button>
          <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Farewell</Button>
          <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Friends meet up</Button>
          
         </div>
        <br></br>
       
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a party event management company dedicated to making your special occasions memorable. Our team of experienced planners ensures that every detail is taken care of.
          </p>
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
  )
}
const styles = {
  icon: {
    width: '50px',
    height: '50px',
    cursor: 'move',
  },
  iconImage: {
    width: '70%',
    height: '70%',
    transition: 'opacity 0.5s',
  },
  iconImageHover: {
    animation: 'blink 1s infinite',
  },
};
export default Afhome
