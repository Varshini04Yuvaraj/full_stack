import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TextField, Button, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { addUser } from './UserSlice';
import axios from 'axios';
import BefNavbar from './BefNavbar';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
const Signin = () => {
    const [errors, setErrors] = useState({});
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [role, setRole] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const validate = () => {
        let errors = {};
        let isValid = true;

        if (!username) {
            isValid = false;
            errors["username"] = "*Please enter your Username.";
        }

        if (!email) {
            isValid = false;
            errors["email"] = "*Please enter your email address.";
        } else {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!pattern.test(email)) {
                isValid = false;
                errors["email"] = "*Please enter a valid email address.";
            }
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonenumber) {
            isValid = false;
            errors["phonenumber"] = "*Please enter your Phone Number.";
        } else if (!phonePattern.test(phonenumber)) {
            isValid = false;
            errors["phonenumber"] = "*Please enter a valid Phone Number (10 digits).";
        }
        if (!role) {
            isValid = false;
            errors["role"] = "*Please select a Role.";
        }
        if (!password) {
            isValid = false;
            errors["password"] = "*Please enter your Password.";
        } else {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(password)) {
                isValid = false;
                errors["password"] = "*Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one digit, and one special character.";
            }
        }

        if (!cpassword) {
            isValid = false;
            errors["cpassword"] = "*Please confirm your Password.";
        } else if (password !== cpassword) {
            isValid = false;
            errors["cpassword"] = "Passwords do not match.";
        }

        setErrors(errors);
        return isValid;
    };

    const handle = async () => {
        if (validate()) {
            const user = { username, email, phonenumber, role };
            dispatch(addUser(user)); 
            
            await axios.post('http://localhost:3001/events', {
                Email: email,
                Password: password,
                Role: role
            });

            if (role === 20) {
                navigate('/loginpage');
            } else {
                navigate('/adlogin');
            }
        }
    };

    return (
        <>
            <BefNavbar />
            <div className="back">
                <div className='sub'>
                    <h2 style={{paddingLeft:'120px'}}>SignUp</h2>
                    <div className='charu'>
                        <TextField id="outlined-basic" label="Username" variant="outlined" style={{ width: '300px' }} onChange={(e) => setUsername(e.target.value)} />
                        <div style={{ color: 'red' }}>{errors.username}</div>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '300px' }} onChange={(e) => setEmail(e.target.value)} />
                        <div style={{ color: 'red' }}>{errors.email}</div>
                        <TextField id="outlined-basic" label="Phone number" variant="outlined" style={{ width: '300px' }} onChange={(e) => setPhonenumber(e.target.value)} />
                        <div style={{ color: 'red' }}>{errors.phonenumber}</div>
                        <Box sx={{ minWidth: 300 }}>
                            <FormControl fullWidth>
                                <InputLabel required id="demo-simple-select-label">Role</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={role} label="Role" onChange={handleChange}>
                                    <MenuItem value={10}>Admin</MenuItem>
                                    <MenuItem value={20}>User</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <div style={{ color: 'red' }}>{errors.role}</div>
                        <TextField type="password" id="outlined-basic" label="Password" variant="outlined" style={{ width: '300px' }} onChange={(e) => setPassword(e.target.value)} />
                        <div style={{ color: 'red' }}>{errors.password}</div>
                        <TextField type="password" id="outlined-basic" label="Confirm Password" variant="outlined" style={{ width: '300px' }} onChange={(e) => setCPassword(e.target.value)} />
                        <div style={{ color: 'red' }}>{errors.cpassword}</div>
                        <Button variant="contained" onClick={handle}>Signin</Button>
                        <div></div>
                        <h5>Already have an account? <Link to='/loginpage'>login here</Link></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;

// import { TextField } from '@mui/material';
// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import './signin.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import BefNavbar from './BefNavbar';

// const Signin = () => {
//     const [errors, setErrors] = useState({});
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [phonenumber, setPhonenumber] = useState('');
//     const [password, setPassword] = useState('');
//     const [cpassword, setCPassword] = useState('');
//     const [role, setRole] = useState('');

//     const navigate = useNavigate(); // Only one instance of useNavigate

//     const handleChange = (event) => {
//         setRole(event.target.value);
//     };

//     const validate = () => {
//         let errors = {};
//         let isValid = true;

//         if (!username) {
//             isValid = false;
//             errors["username"] = "*Please enter your Username.";
//         }

//         if (!email) {
//             isValid = false;
//             errors["email"] = "*Please enter your email address.";
//         } else {
//             const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//             if (!pattern.test(email)) {
//                 isValid = false;
//                 errors["email"] = "*Please enter a valid email address.";
//             }
//         }

//         const phonePattern = /^[0-9]{10}$/;
//         if (!phonenumber) {
//             isValid = false;
//             errors["phonenumber"] = "*Please enter your Phone Number.";
//         } else if (!phonePattern.test(phonenumber)) {
//             isValid = false;
//             errors["phonenumber"] = "*Please enter a valid Phone Number (10 digits).";
//         }
//         if (!role) {
//             isValid = false;
//             errors["role"] = "*Please select a Role.";
//         }
//         if (!password) {
//             isValid = false;
//             errors["password"] = "*Please enter your Password.";
//         } else {
//             const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//             if (!passwordPattern.test(password)) {
//                 isValid = false;
//                 errors["password"] = "*Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one digit, and one special character.";
//             }
//         }

//         if (!cpassword) {
//             isValid = false;
//             errors["cpassword"] = "*Please confirm your Password.";
//         } else if (password !== cpassword) {
//             isValid = false;
//             errors["cpassword"] = "Passwords do not match.";
//         }

//         setErrors(errors);
//         return isValid;
//     };

//     const handle = async () => {
//         if (validate()) {
//             console.log('Username', username);
//             console.log('Email', email);
//             console.log('Phone Number', phonenumber);
//             console.log('Role', role);
//             console.log('Password', password);

//             // Navigate based on role value
//             if (role === 20) { // Ensure value is compared as a number
//                 navigate('/loginpage');
//             } else {
//                 navigate('/adlogin');
//             }

//             // Post request
//             const response = await axios.post('http://localhost:3001/events', {
//                 Email: email,
//                 Password: password,
//                 Role: role
//             });
//         }
//     };

//     return (
//         <>
//             <BefNavbar />
//             <div className="back">
//                 <div className='sub'>
//                     <h2>SignUp</h2>
//                     <div className='charu'>
//                         <TextField id="outlined-basic" label="Username" variant="outlined" style={{ width: '300px' }} onChange={(e) => setUsername(e.target.value)} />
//                         <div style={{ color: 'red' }}>{errors.username}</div>
//                         <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '300px' }} onChange={(e) => setEmail(e.target.value)} />
//                         <div style={{ color: 'red' }}>{errors.email}</div>
//                         <TextField id="outlined-basic" label="Phone number" variant="outlined" style={{ width: '300px' }} onChange={(e) => setPhonenumber(e.target.value)} />
//                         <div style={{ color: 'red' }}>{errors.phonenumber}</div>
//                         <Box sx={{ minWidth: 300 }}>
//                             <FormControl fullWidth>
//                                 <InputLabel required id="demo-simple-select-label">Role</InputLabel>
//                                 <Select labelId="demo-simple-select-label" id="demo-simple-select" value={role} label="Role" onChange={handleChange}>
//                                     <MenuItem value={10}>Admin</MenuItem>
//                                     <MenuItem value={20}>User</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Box>
//                         <div style={{ color: 'red' }}>{errors.role}</div>
//                         <TextField type="password" id="outlined-basic" label="Password" variant="outlined" style={{ width: '300px' }} onChange={(e) => setPassword(e.target.value)} />
//                         <div style={{ color: 'red' }}>{errors.password}</div>
//                         <TextField type="password" id="outlined-basic" label="Confirm Password" variant="outlined" style={{ width: '300px' }} onChange={(e) => setCPassword(e.target.value)} />
//                         <div style={{ color: 'red' }}>{errors.cpassword}</div>
//                         <Button variant="contained" onClick={handle}>Signin</Button>
//                         <div></div>
//                         <h5>Already have an account? <Link to='/loginpage'>login here</Link></h5>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Signin;