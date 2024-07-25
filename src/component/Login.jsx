import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios';
import Button from '@mui/material/Button';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

  const[errors,setErrors]=useState({});
  // const[username ,setUsername]=useState('');
  const[email ,setEmail]=useState('');
  const[password ,setPassword]=useState('');

  const handleDonate = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    // await axios.get('http://localhost:5000/api/data')
    // .then(result=>{
    //   result.data.map(posts=>{
    //     if(posts.Name===email){
    //       if(posts.Password===password){
    //         n('/home')
    //       }
    //       else{
    //         n('/')
    //       }
    //     }
    //     else{
    //       n('/')
    //     }
    //   })
    // })
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
    const handle = (event)=>{
      event.preventDefault();
      if(validate())
      {
      console.log('Email',email);
      console.log('Password',password);
      n1('/home');
      }
    }
  const n=useNavigate();
  const handle12=()=>{
    n('/');
  }

  return (
    <div>
    <div className='css1'>

      <h1>Login</h1>

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

export default Login
 