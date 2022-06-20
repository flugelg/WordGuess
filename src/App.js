import './App.css';
import React, {useState} from 'react';
import Water from './components/Water';
import WordGuess from './components/WordGuess';
import Word from './components/Word';
import WrongLetter from './components/WrongLetter';


function App() {
  const [waveHeight, setWaveHeight] = useState(81);
  const [wordToGuess, setWordToGuess] = useState();
  const [hiddenArray, setHiddenArray] = useState([])
  const [word, setWord] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);

  return (
    <div>
      <WrongLetter wrongGuess={wrongGuess}/>
      <Word setWord = {setWord} setWordToGuess = {setWordToGuess} setHiddenArray={setHiddenArray} hiddenArray={hiddenArray}/>
      <WordGuess word = {word} wordToGuess = {wordToGuess} hiddenArray={hiddenArray} setHiddenArray={setHiddenArray} setWaveHeight={setWaveHeight} waveHeight={waveHeight} setWrongGuess={setWrongGuess} wrongGuess={wrongGuess}/>
      <Water waveHeight={waveHeight}/>
      
    </div>
  );
}

export default App;
