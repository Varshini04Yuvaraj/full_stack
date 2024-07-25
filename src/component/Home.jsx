import React, { useEffect, useState } from 'react'
import './Home.css'
import Draggable from 'react-draggable'
import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
const Home = () => {

  const images = [
   
    'https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
    
    'https://images.pexels.com/photos/5005252/pexels-photo-5005252.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://media.istockphoto.com/id/535403859/photo/dancing-at-disco.jpg?s=612x612&w=0&k=20&c=mVZX9qAsgnOv8C0t9gR81ofJ0JG20Orc4Io9r4AKNQQ=',
    


    // Add more image URLs as needed
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
         <div className="hcss1">
           
           <div className="hcss3">

           <div className="hcss6" style={styles.icon}>
                <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>What_We_Do</Button>
            </div>
            <div className="hcss6" style={styles.icon}>
                <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Contact_us</Button>
            </div>
            </div>
            <div className="hcss5">
            <div >
                              <Avatar style={{width:"100px",height:"100px"}} alt="Remy Sharp" src="https://i.etsystatic.com/21014836/r/il/e15efe/5285705916/il_300x300.5285705916_18ib.jpg" />

            </div>
            </div>
            <div className="hcss2" style={styles.icon}>
                <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Home</Button>
            </div>
            <div className="hcss2" style={styles.icon}>
                <Button style={{ fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>About</Button>
            </div>
            <div className="hcss2" style={styles.icon}>
                <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>Login</Button>
            </div>
            <div className="hcss2" style={styles.icon}>
                <Button style={{ fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>SignUp</Button>
            </div>
            
         </div>
         <div>

         </div>
         {/* <div className="hcss4" style={{ backgroundImage: `url(${images[currentImage]})` }}></div> */}
         <br></br>
         <h1>Party Event Management</h1>
         <div className="ref">
               <div style={{backgroundImage:'url(https://www.logodesign.net/logo/decent-ornaments-with-stars-and-leaves-5944ld.png?nwm=1&nws=1&industry=event-planner&sf=&txt_keyword=All)',height:'250px',width:'200px' ,backgroundRepeat:'no-repeat',paddingRight:'800px'}}>
         </div>
         </div>
         <br></br>
         <div className='dev'>
          <div className='pic1'></div>
          <div style={{backgroundColor:"whitesmoke"}}>hi</div>
          <div style={{backgroundColor:"whitesmoke"}}>hi</div>
         </div>
        
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
export default Home
{/* <a style={{color:"black"}}href="https://www.facebook.com">Facebook</a> */}