import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if user is already logged in
  //   const checkAuth = async () => {
  //     try {
  //       const response = await axios.get('/api/check-auth'); // Example endpoint to check auth status
  //       if (response.data.isLoggedIn) {
  //         setIsLoggedIn(true);
  //         navigate('/login'); // Redirect to login page if already logged in
  //       }
  //     } catch (error) {
  //       console.log('Error checking auth status', error);
  //     }
  //   };

  //   checkAuth();
  // }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    // Username length validation
    if (!formData.username || formData.username.length <= 2) {
      formErrors.username = 'Username must be more than 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Invalid email format';
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      formErrors.phone = 'Phone number must be exactly 10 digits';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      formErrors.password = 'Password must be at least 8 characters long and include a mix of uppercase, lowercase, digits, and special characters';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };
const navi =useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      console.log("hi")
      const response = await axios.post('http://localhost:8080/api/users/register', formData);
      setFormData({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'Custom',
      });
     navi("/login")
     
    } catch (error) {
      console.log('Error signing up', error);
      
    }
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.username && <span style={styles.error}>{errors.username}</span>}
            </div>

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
              <label style={styles.label}>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.phone && <span style={styles.error}>{errors.phone}</span>}
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

            <div style={styles.formGroup}>
              <label style={styles.label}>Confirm Password</label>
              <div style={styles.passwordContainer}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={styles.input}
                />
                <i
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.passwordIcon}`}
                  aria-hidden="true"
                ></i>
              </div>
              {errors.confirmPassword && (
                <span style={styles.error}>{errors.confirmPassword}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                
              </select>
            </div>

            <button type="submit" style={styles.submitButton}>
              Sign Up
            </button><br></br><br></br>
          <div>Already have an account? <Link to='/login'>Loginhere</Link></div>
          </form>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="https://images.pexels.com/photos/3171742/pexels-photo-3171742.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Signup"
            style={styles.image}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;

const styles = {
  container: {
    display: 'flex',
    width: '80%',
    height: '70%',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: '50%',
    maxWidth: '500px', // Reduced width
    padding: '30px', // Reduced padding
    boxShadow: '0px 0px 15px rgba(1, 3, 5, 8)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  imageContainer: {
    display: 'none', 
    // Hide image container for now
    // display: 'block', 
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px', // Reduced font size
    color: '#333',
  },
  formGroup: {
    marginBottom: '20px',
    position: 'relative',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: 'calc(100% - 30px)', // Reduced width to fit the icon
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    paddingRight: '20px', 
    // Space for the icon
  },
  select: {
    width: 'calc(100% - 0px)', // Reduced width
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
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
  image: {
    width: '70%',
    height: '60%',
    objectFit: 'cover',
  },
};
