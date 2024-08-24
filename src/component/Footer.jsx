import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.contactDetails}>
          <p>Contact Us:</p>
          <p>Email: <a href="mailto:contact@sparkly.com" style={styles.link}>contact@sparkly.com</a></p>
          {/* <p>Phone: <a href="tel:+1234567890" style={styles.link}>+1 234 567 890</a></p> */}
          {/* <p>Location: 123 Sparkly St, Glitter City</p> */}
        </div>
        {/* <p>&copy; 2024 Sparkly. All rights reserved.</p> */}
      </div>
    </footer>
  );
}

export default Footer;

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#999999',
    color: '#fff',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '500px', // Added padding to the left
    paddingRight: '60px', // Added padding to the right
  },
  contactDetails: {
    marginBottom: '0',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
};

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <p>&copy; 2024 Sparkly. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;

// const styles = {
//   footer: {
//     padding: '20px',
//     backgroundColor: '#999999',
//     color: '#fff',
    
//     textAlign: 'center',
//   },
// };
