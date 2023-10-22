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
    return(
        <div>
            <h2>Survey Page 2</h2>
        </div>
      </div>
    </div>
  );
};

export default Survey2;
