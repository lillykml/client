import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './survey2.css';

// CustomButton Component
const CustomButton = ({ text, navigateTo }) => {
  return (
    <button className="customButton" onClick={navigateTo}>
      {text}
    </button>
  );
};

const Survey2 = () => {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [otherReason, setOtherReason] = useState('');

  const handleReasonClick = (reason) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(prevReasons => prevReasons.filter(r => r !== reason));
    } else {
      setSelectedReasons(prevReasons => [...prevReasons, reason]);
    }
  };

  const navigate = useNavigate();

  const navigateToPreviousPage = () => {
    navigate('/survey1');
  };

  const closeSurvey = () => {
    navigate('/home');
  };

  return (
    <div>
      <div className="reasonsContainer">
        <h2>Why are you feeling that way?</h2>
        <div className="reasonsButtons">
          {["Stress at work/school", "Got into an argument", "Achieved something", "Spent time outdoors", "Didn’t sleep well", "Celebrated something"].map(reason => (
            <button
              key={reason}
              className={selectedReasons.includes(reason) ? 'selected' : ''}
              onClick={() => handleReasonClick(reason)}
            >
              {reason}
            </button>
          ))}
        </div>
        <div className="otherReason">
          <label>Other reason</label>
          <input type="text" value={otherReason} onChange={e => setOtherReason(e.target.value)} placeholder="Type here..." />
        </div>
        <div className="navigationButtons">
          <CustomButton text="Back" navigateTo={navigateToPreviousPage} />
          <CustomButton text="Finish" navigateTo={closeSurvey} />
        </div>
      </div>
    </div>
  );
};

export default Survey2;