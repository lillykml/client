import Header from '../components/Header';
import React, { useState } from 'react';
import './survey1.css';

// MoodButton Component
const MoodButton = ({ mood, setMood }) => {
    return (
      <button className="moodButton" onClick={() => setMood(mood)}>
        <img src={`path_to_assets/${mood}.svg`} alt={mood} />
      </button>
    );
  };
  
  // CustomButton Component
  const CustomButton = ({ text, navigateTo }) => {
    return (
      <button className="customButton" onClick={navigateTo}>
        {text}
      </button>
    );
  };

const Survey1 = () => {

    const [mood, setMood] = useState(null);
  
    const navigateToNextQuestion = () => {
      // Navigate to another question or main page based on the mood
      if (mood) {
        window.location.href = '/nextPage';
      }
    };

    return(
        <div>
            <Header />
            <div className="moodSurvey">
                <h2>Hi Courtney, how are you feeling today?</h2>
                <div className="moodOptions">
                    <MoodButton mood="Happy" setMood={setMood} />
                    <MoodButton mood="Sad" setMood={setMood} />
                    <MoodButton mood="Angry" setMood={setMood} />
                    <MoodButton mood="Average" setMood={setMood} />
                </div>
                <div className="buttonOptions">
                    <CustomButton text="Skip" navigateTo={navigateToNextQuestion} />
                    <CustomButton text="Next" navigateTo={navigateToNextQuestion} />
                </div>
                </div>
             </div>
    )
}

export default Survey1;