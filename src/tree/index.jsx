import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle" />
          <img className="img" alt="Group" src="group-1.png" />
        </div>
      </div>
    </div>
  );
};