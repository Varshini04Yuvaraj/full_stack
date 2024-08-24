import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:8080/api/users/login', {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem('userEmail', formData.email);
        // Logging the response to check its format
        console.log('Login response:', response.data.user.role);
  
        // Assuming the role is returned in the response data object
        const role = response.data.user.role;
  
        if (role === "customer") {
          navigate('/userpage');
        } else if (role === "admin") {
          navigate('/herosectionad');
        } else {
          setErrors({ general: 'Unexpected role received from server' });
        }
      } catch (error) {
        console.error('There was an error making the request:', error);
        setErrors({ general: 'Username or Password is incorrect' });
      }
    }
  };
  return (
    <div style={styles.pageContainer}>
      <Header />
      <div style={styles.contentWrap}>
        <div style={styles.container}>
          <div style={styles.card}>
            <h2 style={styles.heading}>Login</h2>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                />
                {errors.email && <span style={styles.error}>{errors.email}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Password</label>
                <div style={styles.passwordContainer}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                  />
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.passwordIcon}`}
                    aria-hidden="true"
                  ></i>
                </div>
                {errors.password && <span style={styles.error}>{errors.password}</span>}
              </div>

              <button type="submit" style={styles.submitButton}>
                Login
              </button>
              <br></br>
              <br></br>
              <div>
                Create a new account? <Link to='/signup'>Sign up here</Link>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  contentWrap: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    width: 'calc(100% - 30px)',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    paddingRight: '30px',
  },
  submitButton: {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#b08b60',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    marginTop: '5px',
    color: 'red',
    fontSize: '14px',
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  passwordIcon: {
    position: 'absolute',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
  },
};

export default LoginPage;
