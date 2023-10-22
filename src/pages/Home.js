import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './home.css';


const Home = () => {

    const [activeTab, setActiveTab] = useState('Mental'); // Default tab
    const [selectedButton, setSelectedButton] = useState('General'); // Default button

    const navigate = useNavigate();

    const navigateToInsights = () => {
        navigate('/Insights');
    };

    return(
        <div>
            <div className="main-screen-container">
                <div className="header">
                    <p>October 21, 2023</p>
                    <h1>Welcome, Courtney</h1>
                </div>
                <div className="summary-section">
                    <div className="daily-summary">
                        <p>Well-being score: 54%</p>
                        <p>You seem: STRESSED</p>
                        <button onClick={navigateToInsights}>Recommendations</button>
                    </div>
                    <div className="image-container">
                        <img src={`../assets/tree.png`} alt="tree"/>
                    </div>
                </div>
                <div className="brighten-day">
                    <h2>Let’s brighten up your day</h2>
                    <button>Click</button>
                </div>
                <div className="data-section">
                    {['Steps', 'Heart rate', 'Stress', 'Mood'].map(header => (
                        <div key={header} className="data-block">
                            <h3>{header}</h3>
                            <p>Placeholder</p>
                        </div>
                    ))}
                </div>
                <div className="weekly-summary">
                    <h2>Weekly Summary</h2>
                    <div className="tabs">
                        <button
                            style={activeTab === 'Mental' ? { backgroundColor: '#5FA7FF', color: 'white' } : {}}
                            onClick={() => setActiveTab('Mental')}
                        >
                            Mental
                        </button>
                        <button
                            style={activeTab === 'Physical' ? { backgroundColor: '#5FA7FF', color: 'white' } : {}}
                            onClick={() => setActiveTab('Physical')}
                        >
                            Physical
                        </button>
                    </div>
                    <div className="graph-container">
                        <img src={`../assets/graph.png`} alt="graph"/>
                        <div>
                        {['General', 'Mood', 'Stress'].map(buttonText => (
                            <button
                                key={buttonText}
                                className={selectedButton === buttonText ? 'active' : ''}
                                onClick={() => setSelectedButton(buttonText)}
                            >
                                {buttonText}
                            </button>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <Navbar current="home"/>
        </div>
    );
};

export default Home;