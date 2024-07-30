import React, { useState } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import BefNavbar from './BefNavbar';
import { useAuth } from './AuthContext';

const Login = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const setAuth=useAuth();

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!email) {
      isValid = false;
      errors["email"] = "Please enter your email address.";
    } else {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const result = await axios.get('http://localhost:3001/events');
        const user = result.data.find(posts => posts.Email === email && posts.Password === password);

        if (user) {
          localStorage.setItem('userEmail', email);
          setAuth(true);
          nav('/afhome');
        } else {
          setErrors({ login: 'Invalid email or password' });
        }
      } catch (error) {
        console.error("There was an error fetching data:", error);
        setErrors({ fetch: 'Error fetching data from server' });
      }
    }
  };

  const handleCreateAccount = () => {
    nav('/sign');
  };

  return (
    <div>
      <BefNavbar />
      <div className='css1'>
        <h1 style={{paddingLeft:'120px'}}>Login</h1>
        <br />
        <Button onClick={handleCreateAccount}>Create a new account</Button>
        <form onSubmit={handleLogin} className='css2'>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ width: '300px' }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ color: 'red' }}>{errors.email}</div>
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{ width: '300px' }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ color: 'red' }}>{errors.password}</div>
          <Button variant="contained" type="submit">Login</Button>
          <div style={{ color: 'red' }}>{errors.login}</div>
          <div style={{ color: 'red' }}>{errors.fetch}</div>
          <h3>Are you an Admin? <Link to='/adlogin'>login here</Link></h3>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;
