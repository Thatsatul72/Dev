import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Online Coding Platform</h1>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
    );
};

export default HomePage;