
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const[errors,setErrors]=useState({});
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[phonenumber,setPhonenumber]=useState('');
    const[password,setPassword]=useState(''); 
    

    const validate=()=>{
       let errors={};
       let isvalid=true;
       if(!username)
       {
        isvalid=false;
        errors["username"]="Please enter your Username.";
       }
       if (!email) {
        isvalid = false;
        errors["email"] = "Please enter your email address.";
      } 
      else if (typeof email !== "undefined") {
        const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (!pattern.test(email)) {
          isvalid = false;
          errors["email"] = "Please enter a valid email address.";
        }
      }
      const phonePattern = /^[0-9]{10}$/;
        if(!phonenumber)
          {
           isvalid=false;
           errors["phonenumber"]="Please enter your Phone Number.";
          }
          else if (!phonePattern.test(phonenumber)) {
            isvalid = false;
            errors["phonenumber"] = "Please enter a valid Phone Number (10 digits).";
          }
          if(!password)
            {
             isvalid=false;
             errors["password"]="Please enter your Password.";
            }
            setErrors(errors);
            return isvalid;
    }
    const n=useNavigate();
    const handle=async()=>{
      // event.preventDefault();
      if(validate())
      {
        console.log('Username',username);
        console.log('Email',email);
        console.log('Phone Number',phonenumber);
        console.log('Password',password);
        n('/loginpage');
        // const response =await axios.post('http://localhost:5000/api/data',{
        //   Email :email,
        //   Password :password,
        //  });
      }
    }


    
   


  return (
    <div className="container">
        <div className='css112'>

          <h1>Signin</h1>

          <div className='css2'>
              <TextField id="outlined-basic" label="Username" variant="outlined" style={{width:'300px'}} onChange={(e)=>{setUsername(e.target.value)}} />
              <div style={{color:'red'}}>{errors.username}</div>
              <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:'300px'}} onChange={(e)=>{setEmail(e.target.value)}}/>
              <div style={{color:'red'}}>{errors.email}</div>
              <TextField  id="outlined-basic" label="Phone number" variant="outlined" style={{width:'300px'}}onChange={(e)=>{setPhonenumber(e.target.value)}} />
              <div style={{color:'red'}}>{errors.phonenumber}</div>
              <TextField type="password" id="outlined-basic" label="Password" variant="outlined" style={{width:'300px'}} onChange={(e)=>{setPassword(e.target.value)}}/>
              <div style={{color:'red'}}>{errors.password}</div>
              <Button variant="contained" onClick={handle}>signin</Button>
          </div>
  
    </div>
    </div>
    
     
    
  )
}

export default Signin