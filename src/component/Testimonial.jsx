import React from 'react';

const Testimonial = () => {
  return (
    <section style={styles.testimonialSection}>
        <p style={styles.testimonialText}>"We were extremely excited, but everything was even more than we hoped for!"</p>
      <span style={styles.testimonialAuthor}>- Claudia & Sebastian</span>
    </section>
  );
}

export default Testimonial;

const styles = {
  testimonialSection: {
    padding: '50px',
    backgroundColor: '#f8f5f1',
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: '24px',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    display: 'block',
    marginTop: '10px',
    fontSize: '18px',
    color: '#b08b60',
  },
};
