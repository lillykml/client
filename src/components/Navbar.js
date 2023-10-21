import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = ({current}) => {
    return (
        <div className="navbar">
            <Link to="/journal" className={current === "journal" ? "active" : ""}>Journal</Link>
            <Link to="/" className={current === "home" ? "active" : ""}>Home</Link>
            <Link to="/insights" className={current === "insights" ? "active" : ""}>Insights</Link>
        </div>
    );
};

export default Navbar;