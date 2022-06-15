import './App.css';
import React, {useState} from 'react';
import Water from './components/Water';
import WordGuess from './components/WordGuess';
import Word from './components/Word';

const wordReceived = (chosenWord) => {
  console.log("word sent is: ", chosenWord)
  wordPicked = chosenWord;
}

function App() {
  const [wordToGuess, setWordToGuess]
  return (
    <div>
      <Word wordReceived = {wordReceived}/>
      <WordGuess wordPicked = {wordPicked}/>
      <Water/>
    </div>
  );
}

export default App;
