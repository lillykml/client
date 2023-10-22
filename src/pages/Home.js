import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import MoodContext from '../MoodContext';
import './home.css';
import './hometop.css';

const Home = () => {

    const { mood } = useContext(MoodContext);

    const [activeTab, setActiveTab] = useState('Mental'); // Default tab
    const [selectedButton, setSelectedButton] = useState('General'); // Default button

    const navigate = useNavigate();

    const navigateToInsights = () => {
        navigate('/Insights');
    };

    const navigateToSurvey = () => {
        navigate('/Survey1');
    };

    return(
        <div>
            <div className="main-screen-container">
            <p class="date text">October 21, 2023</p>
                <div className="header">
                    <h1 class="welcome text">Welcome, Courtney</h1>
                    <div className="image-container">
                        <img src={`../assets/${mood}.svg`} alt={mood || "default"} />
                    </div>
                </div>
                <h3 class="subtitle text">Daily Summary</h3>
                <div className="summary-section">
                    <div className="daily-summary">
                        <p>Well-being score: &nbsp;<b>54%</b></p>
                        <p>You seem: &nbsp;<b>Stressed</b></p>
                        <button onClick={navigateToInsights}>Recommendations</button>
                    </div>
                    <div className="image-container">
                        <img src={`../assets/tree.png`} alt="tree"/>
                    </div>
                </div>
                <div class="entryOuter">
                    <button onClick={navigateToSurvey} class="newEntry">Make new entry</button>
                </div>
                <div className="brighten-day">
                    <h2>Let’s brighten up your day 🔆</h2>
                    <button><a href="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dqeDA1cnBzOGVodDkyenlwZnEwbXoyYjIwYWkzNmR3cm01Z3RpMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2A75RyXVzzSI2bx4Gj/giphy.gif">
                        Click <a/></button>
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