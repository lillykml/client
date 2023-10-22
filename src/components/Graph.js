import React from 'react';
import './graph.css';

const StressGraph = ({ data }) => {
  return (
    <div className="graph-container">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
        <div key={index} className="day-container">
          <div className="bar-container">
            <div className="bar-background"></div>
            <div className="bar" style={{ height: `${data[day]}%` }}></div>
          </div>
          <div className="label">{day}</div>
          {day === "Thu" && <div className="percentage">50%</div>}
          {day === "Sun" && <div className="percentage">100%</div>}
        </div>
      ))}
    </div>
  );
};

export default StressGraph;