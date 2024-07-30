import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios';
import Button from '@mui/material/Button';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BefNavbar from './BefNavbar';
const AdLogin = () => {
  

  const[errors,setErrors]=useState({});
  // const[username ,setUsername]=useState('');
  const[email ,setEmail]=useState('');
  const[password ,setPassword]=useState('');
  const nav=useNavigate();
  const handleDonate = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    
    await axios.get('http://localhost:3001/events')
    .then(result=>{
      result.data.map(posts=>{
        if(posts.Email===email){
          if(posts.Password===password){
            nav('/brow')
          }
          else{
            nav('/')
          }
        }
        else{
          nav('/')
        }
      })
    })
};
  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!email) {
      isValid = false;
      errors["email"] = "Please enter your email address.";
    } 
    else if (typeof email !== "undefined") {
      const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (!pattern.test(email)) {
        isValid = false;
        errors["email"] = "Please enter a valid email address.";
      }
    }

    if (!password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    setErrors(errors);
    return isValid;
  }
  
   const n1=useNavigate();
    const handle = async(e)=>{
      e.preventDefault();
      if(validate())
      {
      console.log('Email',email);
      console.log('Password',password);
      n1('/brow');
      // console.log(email);
      // console.log(password);
      
      await axios.get('http://localhost:3001/events')
      .then(result=>{
        result.data.map(posts=>{
          if(posts.Email===email){
            if(posts.Password===password){
              
              nav('/adafhome')
            }
            else{
              // nav('/')
            }
          }
          else{
            // nav('/')
          }
        })
      })
      }
    }

    
  const n=useNavigate();
  const handle12=()=>{
    n('/sign');
  }

  return (
    <div>
      <BefNavbar/>
    <div className='css1'>

      <h1 style={{paddingLeft:'120px'}}>Login</h1>
      <br></br>
      <form onSubmit={handleDonate}className='css2'>
          {/* <TextField  type='name' id="outlined-basic" label="Username" variant="outlined" style={{width:'300px'}} onChange={(e)=>{setUsername(e.target.value)}}/> */}
          
          <TextField  id="outlined-basic" label="Email" variant="outlined" style={{width:'300px'}} onChange={(e)=>{setEmail(e.target.value)}}/>
          <div  style={{color:'red'}}>{errors.email}</div>
          <TextField  type="password"  id="outlined-basic" label="Password" variant="outlined" style={{width:'300px'}} onChange={(e)=>{setPassword(e.target.value)}}/>
          <div  style={{color:'red'}}>{errors.password}</div>
          <Button variant="contained" onClick={handle}>Login</Button>
          {/* <br></br> */}
          <Button onClick={handle12}>Create a new account</Button>
      </form>
        
      </div>
    </div>
   
    // </div>
         
  )
}

export default AdLogin
 