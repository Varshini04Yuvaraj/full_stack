import React from 'react';

const Services = () => {
  return (
    <section style={styles.servicesSection} id="services">
      <div style={styles.service}>
        <h3 style={styles.serviceTitle}>Venue Space</h3>
        <p style={styles.servicePrice}>Start from $250</p>
      </div>
      <div style={styles.service}>
        <h3 style={styles.serviceTitle}>Bites & Sips</h3>
        <p style={styles.servicePrice}>Start from $500</p>
      </div>
      <div style={styles.service}>
        <h3 style={styles.serviceTitle}>Wedding Package</h3>
        <p style={styles.servicePrice}>Start from $1500</p>
      </div>
    </section>
  );
}

export default Services;

const styles = {
  servicesSection: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px',
    backgroundColor: '#fff',
  },
  service: {
    textAlign: 'center',
  },
  serviceTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  servicePrice: {
    fontSize: '16px',
    color: '#b08b60',
  },
};
