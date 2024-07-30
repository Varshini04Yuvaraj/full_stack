import React, { useEffect, useState } from 'react'
import './Home.css'

import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';

import { useNavigate } from 'react-router-dom';
const BefNavbar = () => {

   const loginfunnav=useNavigate();
   const loginfun=()=>{
    loginfunnav('/loginpage')
   }
   const signfunnav=useNavigate();
   const signfun=()=>{
    signfunnav('/sign')
   }
   const home1=()=>{
    loginfunnav('/')
   }
   const about1=()=>{
    loginfunnav('/about')
   }
  return (
    <>
         <div className="hcss1">
           
           <div className="hcss3">
          <div >
                              <Avatar style={{width:"70px",height:"70px"}} alt="Remy Sharp" src="https://i.etsystatic.com/21014836/r/il/e15efe/5285705916/il_300x300.5285705916_18ib.jpg" />

            </div>
           <div className="hcss6" style={styles.icon}>
                <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}></Button>
            </div>
            <div className="hcss6" style={styles.icon}>
                <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}></Button>
            </div>
            </div>
            <div className="hcss5">
           
            </div>
            <div className="hcss2" style={styles.icon}>
                <Button onClick={home1}style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Home</Button>
            </div>
            <div className="hcss2" style={styles.icon}>
                <Button onClick={about1} style={{ fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>About</Button>
            </div>
            <div className="hcss2" style={styles.icon}>
                <Button onClick={loginfun}style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>Login</Button>
            </div>
            <div className="hcss2" style={styles.icon}>
                <Button onClick={signfun}style={{ fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>SignUp</Button>
            </div>
            
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
export default BefNavbar
