import './App.css';
import React, {useState} from 'react';
import Water from './components/Water';
import WordGuess from './components/WordGuess';
import Word from './components/Word';

function App() {
  const [wordToGuess, setWordToGuess] = useState();
  const [containsLetter, setContainsLetter] = useState(false);
  return (
    <div>
      <Word setWordToGuess = {setWordToGuess} containsLetter = {containsLetter}/>
      <WordGuess wordToGuess = {wordToGuess} setContainsLetter = {setContainsLetter} containsLetter = {containsLetter}/>
      <Water/>
    </div>
  );
}

export default App;
