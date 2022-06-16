import './App.css';
import React, {useState} from 'react';
import Water from './components/Water';
import WordGuess from './components/WordGuess';
import Word from './components/Word';

function App() {
  const [wordToGuess, setWordToGuess] = useState()
  return (
    <div>
      <Word setWordToGuess = {setWordToGuess}/>
      <WordGuess wordToGuess = {wordToGuess}/>
      <Water/>
    </div>
  );
}

export default App;
