import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './home.css';


const Home = () => {

    const navigate = useNavigate();

    const navigateToInsights = () => {
        navigate('/survey1');
    };

    return(
        <div>
        <div className="main-screen-container">
            <div className="header">
                <p>October 21, 2023</p>
                <h1>Welcome, Courtney</h1>
            </div>
            <div className="daily-summary">
                <div className="well-being">
                    <p>Well-being score: 54%</p>
                    <p>You seem: STRESSED</p>
                </div>
                <button onClick={navigateToInsights}>Recommendations</button>
            </div>
            <div className="brighten-day">
                <h2>Let’s brighten up your day ☀️</h2>
                <div className="data-section">
                    {/* Add data blocks here like steps, heart rate, etc. */}
                </div>
            </div>
            <div className="weekly-summary">
                <div className="tabs">
                    <button>Mental</button>
                    <button>Physical</button>
                </div>
                {/* Placeholder for graph */}
            </div>
            <div className="footer-nav">
                <button>Journal</button>
                <button>Home</button>
                <button>Insights</button>
            </div>
        </div>
            <Navbar current="home"/>
        </div>
    );
};

export default Home;