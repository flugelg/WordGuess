import './App.css';
import React, {useState} from 'react';
import Water from './components/Water';
import WordGuess from './components/WordGuess';
import Word from './components/Word';
import WrongLetter from './components/WrongLetter';
import GameOver from './components/GameOver';



function App() {
  const [waveHeight, setWaveHeight] = useState(81);
  const [wordToGuess, setWordToGuess] = useState();
  const [hiddenArray, setHiddenArray] = useState([])
  const [word, setWord] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);


  return (
    <div>
      <WrongLetter wrongGuess={wrongGuess}/>
      <Word setWord = {setWord} setWordToGuess = {setWordToGuess} setHiddenArray={setHiddenArray} hiddenArray={hiddenArray}/>
      {!isGameOver ?
      <WordGuess word = {word} wordToGuess = {wordToGuess} hiddenArray={hiddenArray} setHiddenArray={setHiddenArray} setWaveHeight={setWaveHeight} waveHeight={waveHeight} setWrongGuess={setWrongGuess} wrongGuess={wrongGuess} setIsGameOver={setIsGameOver}/>
      :
      <GameOver/> 
      }
      <Water waveHeight={waveHeight} wrongGuess={wrongGuess}/>
    </div>
  );
}

export default App;
