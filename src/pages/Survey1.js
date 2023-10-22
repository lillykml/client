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
            <div className="moodSurvey">
                <h2>Hi Courtney, how are you feeling today?</h2>
                <div className="moodOptions">
                    <MoodButton mood="Happy" currentMood={mood} setMood={setMood} />
                    <MoodButton mood="Sad" currentMood={mood} setMood={setMood} />
                    <MoodButton mood="Angry" currentMood={mood} setMood={setMood} />
                    <MoodButton mood="Average" currentMood={mood} setMood={setMood} />
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