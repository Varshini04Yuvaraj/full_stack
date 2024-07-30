// src/About.js
import React from 'react';
import Footer from './Footer';
import BefNavbar from './BefNavbar';
// import aboutBackground from './images/about-background.jpg'; // Ensure you have an appropriate image in the images folder

const About = () => {
  const aboutContainerStyle = {
    backgroundImage: `url("https://www.tagvenue.com/blog/wp-content/uploads/2023/04/party-planning-checklist-13-1024x684.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'white',
    textAlign: 'center',
  };
  const textStyle = {
             fontSize: '18px',
             lineHeight: '1.8',
             marginBottom: '15px',
        };
  const aboutContentStyle = {
    background: 'rgba(0, 0, 0, 0.7)',
    padding: '30px',
    borderRadius: '10px',
  };

  const headingStyle = {
    fontSize: '3em',
    marginBottom: '20px',
  };

  const sectionHeadingStyle = {
    fontSize: '2em',
    margin: '20px 0',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    width: '300px',
    textAlign: 'left',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    lineHeight: '1.5',
  };
  const sectionStyle = {
            marginBottom: '50px',
        };
    const subHeaderStyle = {
              fontSize: '28px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white',
          };
      
          
  return (
    <>
    <BefNavbar/>
    <div style={aboutContainerStyle}>
      <div style={aboutContentStyle}>
        <h1 style={headingStyle}>About Roxie Paris Decor</h1>
        <p style={textStyle}>
                     Welcome to Roxie Paris Event Decor. We specialize in transforming your event dreams into reality. With extensive experience in event planning and decoration, our team is committed to delivering exceptional service and creating unforgettable experiences for all types of events—from intimate gatherings to grand celebrations.
                 </p>
        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <h2 style={sectionHeadingStyle}>Who We Are</h2>
            <p style={paragraphStyle}>
              Welcome to Roxie Paris Decor! We are a premier event management and decoration company based in Paris, specializing in transforming ordinary spaces into extraordinary experiences.
            </p>
          </div>
          <div style={cardStyle}>
            <h2 style={sectionHeadingStyle}>Our Mission</h2>
            <p style={paragraphStyle}>
              Our mission is to deliver exceptional and personalized event experiences that exceed our clients' expectations, infusing every event with a touch of Parisian elegance and sophistication.
            </p>
          </div>
          <div style={cardStyle}>
            <h2 style={sectionHeadingStyle}>Our Vision</h2>
            <p style={paragraphStyle}>
              Our vision is to be the leading event management company in Paris, known for our creativity, attention to detail, and commitment to excellence.
            </p>
          </div>
          <div style={cardStyle}>
            <h2 style={sectionHeadingStyle}>Promises a Feast of Event</h2>
            <p style={paragraphStyle}>
              We promise a feast of events that are meticulously planned and beautifully executed, leaving a lasting impression on you and your guests.
            </p>
          </div>
          <div style={cardStyle}>
            <h2 style={sectionHeadingStyle}>How to Plan Your Wedding with Bamboo Events?</h2>
            <p style={paragraphStyle}>
              Planning your wedding with Roxie Paris Decor is easy. Our dedicated team will guide you through every step, from venue selection to the final decorations, ensuring a stress-free and enjoyable experience.
            </p>
          </div>
          <div style={cardStyle}>
            <h2 style={sectionHeadingStyle}>Services of Bamboo Events</h2>
            <p style={paragraphStyle}>
              Our services include event planning, venue selection, floral arrangements, lighting, and custom decorations. We cater to weddings, corporate events, private parties, and more.
            </p>
          </div>
          {/* <div style={cardStyle}>
            <h2 style={sectionHeadingStyle}>What People Say About Bamboo Events</h2>
            <p style={paragraphStyle}>
              "Roxie Paris Decor made our wedding day unforgettable. The attention to detail and personalized service were exceptional!" - Emily and John
            </p>
            <p style={paragraphStyle}>
              "Our corporate event was a huge success thanks to Roxie Paris Decor. They handled everything flawlessly." - Corporate Client
            </p>
          </div> */}
        </div>
        <section style={sectionStyle}>
                 <h3 style={subHeaderStyle}>Contact Us</h3>
                 <p style={textStyle}>
                     We would love to hear from you! Contact us to discuss your upcoming event and how we can help make it extraordinary.
                 </p>
                 <p style={textStyle}><strong>Email:</strong> <a  style={{ color: '#2980B9' }}>contact@roxiepariseventdecor.com</a></p>
                 <p style={textStyle}><strong>Phone:</strong> +123 456 7890</p>
                 <p style={textStyle}><strong>Address:</strong> 123 Party Street, Fun City, FC 12345</p>
             </section>
      </div>
      
    </div>
     <Footer/>
    </>
  );
}

export default About;

// import React from 'react';
// import './About.css';

// const About = () => {
//     const containerStyle = {
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '30px',
//         fontFamily: 'Arial, sans-serif',
//         color: '#333',
//     };

//     const sectionStyle = {
//         marginBottom: '50px',
//     };

//     const headerStyle = {
//         fontSize: '36px',
//         fontWeight: '700',
//         marginBottom: '25px',
//         textAlign: 'center',
//         color: '#2C3E50',
//     };

//     const subHeaderStyle = {
//         fontSize: '28px',
//         fontWeight: '600',
//         marginBottom: '20px',
//         color: '#34495E',
//     };

//     const textStyle = {
//         fontSize: '18px',
//         lineHeight: '1.8',
//         marginBottom: '15px',
//     };

//     const listStyle = {
//         // listStyleType: 'square',
//         // marginLeft: '20px',
//     };

//     const teamStyle = {
//         display: 'flex',
//         justifyContent: 'space-around',
//         flexWrap: 'wrap',
//         gap: '20px',
//     };

//     const teamMemberStyle = {
//         textAlign: 'center',
//         maxWidth: '200px',
//     };

//     const avatarStyle = {
//         borderRadius: '50%',
//         width: '150px',
//         height: '150px',
//         marginBottom: '15px',
//         border: '3px solid #BDC3C7',
//     };

//     return (
//         <div style={containerStyle}>
//             <section style={sectionStyle}>
//                 <h2 style={headerStyle}>About Us</h2>
//                 <p style={textStyle}>
//                     Welcome to Roxie Paris Event Decor. We specialize in transforming your event dreams into reality. With extensive experience in event planning and decoration, our team is committed to delivering exceptional service and creating unforgettable experiences for all types of events—from intimate gatherings to grand celebrations.
//                 </p>
//             </section>

//             <section style={sectionStyle}>
//                 <h3 style={subHeaderStyle}>Our Services</h3>
//                 <p style={textStyle}>
//                     We offer a comprehensive range of services to ensure your event's success, including:
//                 </p>
//                 {/* <ul style={listStyle}> */}
//                     <div style={textStyle}>Event Planning and Coordination</div>
//                     <div style={textStyle}>Custom Event Decor</div>
//                     <div style={textStyle}>Floral Arrangements</div>
//                     <div style={textStyle}>Lighting and Sound</div>
//                     <div style={textStyle}>Catering Services</div>
//                     <div style={textStyle}>Venue Selection and Management</div>
//                 {/* </ul> */}
//             </section>

//             <section style={sectionStyle}>
//                 <h3 style={subHeaderStyle}>Meet Our Team</h3>
//                 <div style={teamStyle}>
//                     <div style={teamMemberStyle}>
//                         <img style={avatarStyle} src="https://via.placeholder.com/150" alt="Jane Doe" />
//                         <h4 style={{ margin: '10px 0' }}>Jane Doe</h4>
//                         <p>Founder & CEO</p>
//                     </div>
//                     <div style={teamMemberStyle}>
//                         <img style={avatarStyle} src="https://via.placeholder.com/150" alt="John Smith" />
//                         <h4 style={{ margin: '10px 0' }}>John Smith</h4>
//                         <p>Head of Event Planning</p>
//                     </div>
//                     <div style={teamMemberStyle}>
//                         <img style={avatarStyle} src="https://via.placeholder.com/150" alt="Emily Johnson" />
//                         <h4 style={{ margin: '10px 0' }}>Emily Johnson</h4>
//                         <p>Lead Decorator</p>
//                     </div>
//                 </div>
//             </section>

//             <section style={sectionStyle}>
//                 <h3 style={subHeaderStyle}>Contact Us</h3>
//                 <p style={textStyle}>
//                     We would love to hear from you! Contact us to discuss your upcoming event and how we can help make it extraordinary.
//                 </p>
//                 <p style={textStyle}><strong>Email:</strong> <a  style={{ color: '#2980B9' }}>contact@roxiepariseventdecor.com</a></p>
//                 <p style={textStyle}><strong>Phone:</strong> +123 456 7890</p>
//                 <p style={textStyle}><strong>Address:</strong> 123 Party Street, Fun City, FC 12345</p>
//             </section>
//         </div>
//     );
// };

// export default About;
