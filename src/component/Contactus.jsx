import React from 'react'
import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import './Contactus.css';
const Contactus = () => {
  return (
    <>
    <div className="com1">
           
    <div className="com3">

    <div className="com6"  >
         <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>What_We_Do</Button>
     </div>
     <div className="com6">
         <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Contact_us</Button>
     </div>
     </div>
     <div className="com5">
     <div >
                       <Avatar style={{width:"100px",height:"100px"}} alt="Remy Sharp" src="https://i.etsystatic.com/21014836/r/il/e15efe/5285705916/il_300x300.5285705916_18ib.jpg" />

     </div>
     </div>
     <div className="com2">
         <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold"}}>Home</Button>
     </div>
     <div className="com2">
         <Button style={{ fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>About</Button>
     </div>
     <div className="com2" >
         <Button style={{  fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>Login</Button>
     </div>
     <div className="com2">
         <Button style={{ fontSize:'17px',fontFamily: 'Georgia, serif',color: "black", fontWeight: "bold" }}>SignUp</Button>
     </div>
  </div>
  <div className="com7">
       <h1>Roxie Paris Party Decor</h1>
   </div>
  </>
 
  )
}

export default Contactus