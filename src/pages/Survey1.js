import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'; // import useNavigate from react-router-dom
import React, { useState } from 'react';
import './survey1.css';

// MoodButton Component
const MoodButton = ({ mood, currentMood, setMood }) => {
  const isSelected = mood === currentMood; // Check if the mood is currently selected

  return (
    <button 
      className={`moodButton ${isSelected ? 'selected' : ''}`} 
      onClick={() => setMood(mood)}
    >
      <img src={`../assets/${mood}.svg`} alt={mood} />
    </button>
  );
};
  
  // CustomButton Component
  const CustomButton = ({ text, navigateTo}) => {
    return (
      <button className="customButton" onClick={navigateTo}>
        {text}
      </button>
    );
  };

const Survey1 = () => {

  const navigate = useNavigate(); // useNavigate hook for navigation
  const [mood, setMood] = useState(null);

  const navigateToNextPage = () => {
          navigate('/survey2'); // navigate to Survey2 component if mood is set
  };

  const closeSurvey = () => {
      navigate('/home'); // navigate to Home component
  };


    return(
        <div>
            <Header />
            <div className="moodSurvey">
                <h2>Hi Courtney, how are you feeling today?</h2>
                <div className="moodOptions">
                    <MoodButton mood="Happy" currentMood={mood} setMood={setMood} />
                    <MoodButton mood="Sad" currentMood={mood} setMood={setMood} />
                    <MoodButton mood="Angry" currentMood={mood} setMood={setMood} />
                    <MoodButton mood="Average" currentMood={mood} setMood={setMood} />
                </div>
                <div className="buttonOptions">
                    <CustomButton text="Skip" navigateTo={closeSurvey} /> {/* Skip navigates to Home */}
                    <CustomButton text="Next" navigateTo={navigateToNextPage} />
                </div>
                </div>
             </div>
    )
}

export default Survey1;