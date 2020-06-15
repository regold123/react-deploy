import React from 'react';
import playImage from './img/69Q.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My REACT App</h1>
      <h2>Author: Me</h2>
      <img src={playImage} alt="play" />
    </div>
  );
}

export default App;
