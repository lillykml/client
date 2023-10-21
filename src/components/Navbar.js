import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/journal">Journal</Link>
            <Link to="/">Home</Link>
            <Link to="/insights">Insights</Link>
        </div>
    );
};

export default Navbar;