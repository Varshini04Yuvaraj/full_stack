import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from './UserSlice';

const Admin = () => {
    const users = useSelector((state) => state.users.list);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    // Filter out admins from the users list
    const nonAdminUsers = users.filter(user => user.role !== 10);

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    };

    const headerStyle = {
        textAlign: 'center',
        color: '#333',
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
        marginBottom: '20px'
    };

    const subHeaderStyle = {
        color: '#555',
        marginBottom: '20px'
    };

    const listStyle = {
        listStyleType: 'none',
        padding: '0'
    };

    const listItemStyle = {
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const userRoleStyle = {
        fontWeight: 'bold',
        color: '#888'
    };

    const buttonStyle = {
        backgroundColor: '#ff4d4d',
        border: 'none',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Admin Dashboard</h2>
            <h3 style={subHeaderStyle}>Total Users: {nonAdminUsers.length}</h3>
            <ul style={listStyle}>
                {nonAdminUsers.map((user, index) => (
                    <li key={index} style={listItemStyle}>
                        <span>{user.username} - {user.email} - {user.phonenumber}</span>
                        <span style={userRoleStyle}>{user.role === 10 ? 'Admin' : 'User'}</span>
                        <button style={buttonStyle} onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
