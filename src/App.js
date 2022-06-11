import './App.css';
import React, {useState} from 'react';
import Water from './components/Water';
import WordGuess from './components/WordGuess';
import Word from './components/Word';


function App() {
  return (
    <div>
      <Word/>
      <WordGuess />
      <Water/>
    </div>
  );
}

export default App;
