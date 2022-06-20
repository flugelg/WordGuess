import './App.css';
import React, {useState} from 'react';
import Water from './components/Water';
import WordGuess from './components/WordGuess';
import Word from './components/Word';

function App() {
  const [waveHeight, setWaveHeight] = useState(90);
  const [wordToGuess, setWordToGuess] = useState();
  const [containsLetter, setContainsLetter] = useState(false);
  const [hiddenArray, setHiddenArray] = useState([])
  const [word, setWord] = useState([]);

  return (
    <div>
      <Word setWord = {setWord} word = {word} setWordToGuess = {setWordToGuess} containsLetter = {containsLetter} setHiddenArray={setHiddenArray} hiddenArray={hiddenArray}/>
      <WordGuess word = {word} wordToGuess = {wordToGuess} setContainsLetter = {setContainsLetter} containsLetter = {containsLetter} hiddenArray={hiddenArray} setHiddenArray={setHiddenArray} setWaveHeight={setWaveHeight} waveHeight={waveHeight}/>
      <Water waveHeight={waveHeight}/>
    </div>
  );
}

export default App;
