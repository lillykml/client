import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Journal from './pages/Journal';
import Survey1 from './pages/Survey1';
import Survey2 from './pages/Survey2';
import MoodContext from './MoodContext';

function App() {
  const [mood, setMood] = useState("Happy");

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path='/insights' element={<Insights/>} />
          <Route path='/journal' element={<Journal/>} />
          <Route path='/survey1' element={<Survey1/>} />
          <Route path='/survey2' element={<Survey2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </MoodContext.Provider>
  );
}

export default App;
