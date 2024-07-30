// src/MyBooking.js
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useBooking } from './BookingContext';

const MyBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    submissionDate: '',
    description: '',
    eventType: '',
    eventDate: '',
    headCount: '',
    venue: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { bookVenue } = useBooking();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setFormData(prevState => ({ ...prevState, email: userEmail }));
    }
  }, []);

  const events = [
    'Birthday Party',
    'Anniversary',
    'Farewell',
    'Marriage',
    'Friends Get Together',
    'House Warming',
    'Puberty Function',
    'Engagement',
    'Bangle Ceremony',
  ];

  const venues = [
    'Royal Palace',
    'Sunset Garden',
    'Mountain View Resort',
    'Beachside Pavilion',
    'Downtown Hall',
  ];

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'This field is required.';
    tempErrors.submissionDate = formData.submissionDate ? '' : 'This field is required.';
    tempErrors.description = formData.description ? '' : 'This field is required.';
    tempErrors.eventType = formData.eventType ? '' : 'This field is required.';
    tempErrors.eventDate = formData.eventDate ? '' : 'This field is required.';
    tempErrors.headCount = formData.headCount ? '' : 'This field is required.';
    tempErrors.venue = formData.venue ? '' : 'This field is required.';

    setErrors(tempErrors);

    return Object.values(tempErrors).every(x => x === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post('http://localhost:3001/bookings', formData);
        bookVenue(formData.venue); // Mark the venue as booked
        navigate('/booking');
      } catch (error) {
        console.error('Error saving booking data:', error);
      }
    }
  };

  const styles = {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      margin: '0 auto',
      maxWidth: '600px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    textField: {
      marginBottom: '20px',
      width: '100%',
    },
    button: {
      marginTop: '20px',
      backgroundColor: '#3f51b5',
      color: 'white',
    },
  };

  return (
    <>
      <Navbar/>
      <div style={styles.formContainer}>
        <h2>Book an Event</h2><br />
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            style={styles.textField}
          />
          <TextField
            name="submissionDate"
            label="Submission Date"
            type="date"
            value={formData.submissionDate}
            onChange={handleChange}
            error={!!errors.submissionDate}
            helperText={errors.submissionDate}
            InputLabelProps={{
              shrink: true,
            }}
            style={styles.textField}
          />
          <TextField
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            multiline
            rows={4}
            style={styles.textField}
          />
          <TextField
            name="eventType"
            label="Event Type"
            select
            value={formData.eventType}
            onChange={handleChange}
            error={!!errors.eventType}
            helperText={errors.eventType}
            style={styles.textField}
          >
            {events.map((event, index) => (
              <MenuItem key={index} value={event}>
                {event}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="eventDate"
            label="Event Date"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            error={!!errors.eventDate}
            helperText={errors.eventDate}
            InputLabelProps={{
              shrink: true,
            }}
            style={styles.textField}
          />
          <TextField
            name="headCount"
            label="Head Count"
            type="number"
            value={formData.headCount}
            onChange={handleChange}
            error={!!errors.headCount}
            helperText={errors.headCount}
            style={styles.textField}
          />
          <TextField
            name="venue"
            label="Venue"
            select
            value={formData.venue}
            onChange={handleChange}
            error={!!errors.venue}
            helperText={errors.venue}
            style={styles.textField}
          >
            {venues.map((venue, index) => (
              <MenuItem key={index} value={venue}>
                {venue}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            style={styles.textField}
            disabled // Ensure the email field is read-only
          />
          <Button type="submit" style={styles.button}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default MyBooking;
