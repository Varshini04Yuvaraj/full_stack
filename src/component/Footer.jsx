import React from 'react'

const Footer = () => {
  return (
   <>

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

export default Footer