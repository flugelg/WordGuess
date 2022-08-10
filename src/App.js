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
  const [restartGame, setRestartGame] = useState(0);
  const [didWin, setDidWin] = useState()


  return (
    <div>
      <WrongLetter wrongGuess={wrongGuess}/>
      <Word setWord = {setWord} setWordToGuess = {setWordToGuess} setHiddenArray={setHiddenArray} hiddenArray={hiddenArray} restartGame = {restartGame}/>
      {!isGameOver ?
      <WordGuess word = {word} wordToGuess = {wordToGuess} hiddenArray={hiddenArray} setHiddenArray={setHiddenArray} setWaveHeight={setWaveHeight} waveHeight={waveHeight} setWrongGuess={setWrongGuess} wrongGuess={wrongGuess} setIsGameOver={setIsGameOver} setDidWin = {setDidWin}/>
      :
      <GameOver setWaveHeight = {setWaveHeight} setWrongGuess = {setWrongGuess} setRestartGame = {setRestartGame} restartGame = {restartGame} setIsGameOver = {setIsGameOver} setHiddenArray = {setHiddenArray} didWin = {didWin}/> 
      }
      <Water waveHeight={waveHeight} wrongGuess={wrongGuess}/>
    </div>
  );
}

export default App;