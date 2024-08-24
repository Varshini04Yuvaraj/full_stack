import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Headeraf from './Headeraf';
import Footer from './Footer';

const Dashboard = () => {
  const [user, setUser] = useState(null); // Initially null since we fetch data
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Replace 'user@example.com' with the email you want to fetch data for
    const email = 'user@example.com'; 

    fetch(`/api/users/profile`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store JWT in localStorage
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.User) {
          setUser(data.User);
          setFormData(data.User);
        } else {
          console.error('Failed to fetch user details');
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

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

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleEdit = () => {
    if (editMode) {
      if (validateForm()) {
        // Update the user details
        fetch(`/api/users/${user.id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.json())
          .then(data => {
            setUser(data);
            setEditMode(false);
          })
          .catch(error => console.error('Error:', error));
      }
    } else {
      setEditMode(true);
    }
  };

  return (
    <>
      <Headeraf />
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Dashboard</h2>
          <div style={styles.profileSection}>
            <h3 style={styles.subHeading}>Profile</h3>
            {user ? (
              <>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    style={styles.input}
                  />
                  {errors.username && <span style={styles.error}>{errors.username}</span>}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    style={styles.input}
                  />
                  {errors.email && <span style={styles.error}>{errors.email}</span>}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    style={styles.input}
                  />
                  {errors.phone && <span style={styles.error}>{errors.phone}</span>}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role || ''}
                    disabled
                    style={styles.input}
                  />
                </div>

                <button onClick={handleEdit} style={styles.submitButton}>
                  {editMode ? 'Save Changes' : 'Edit Profile'}
                </button>
              </>
            ) : (
              <p>Loading user details...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

const styles = {
  container: {
    display: 'flex',
    width: '80%',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: '50%',
    maxWidth: '600px',
    padding: '30px',
    boxShadow: '0px 0px 15px rgba(1, 3, 5, 8)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  profileSection: {
    marginTop: '20px',
  },
  subHeading: {
    marginBottom: '20px',
    fontSize: '20px',
    color: '#666',
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
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    marginTop: '5px',
    color: 'red',
    fontSize: '14px',
  },
};
