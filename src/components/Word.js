import React, { useState, useEffect } from 'react'

const Word = ({setWord, setWordToGuess, setHiddenArray, hiddenArray, restartGame}) => {
    let wordString;
    let unikey = 0;
    let newArray = [];

    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word")
        .then(res => res.json())
        .then(data => handleFetch(data))
    }, [restartGame])


    const handleFetch = (fetchword) => {
      wordString = fetchword.toString();
      setWord([...wordString])
      setWordToGuess(wordString)
      newArray = new Array([...wordString].length).fill("_")
      setHiddenArray(newArray)
    }

    const displayWord = hiddenArray.map((letter)=> {
      return(
        <h2 className='wordLetter' id={letter} key={unikey+=1}>{letter}</h2>
      )
    })
    
  return (
    <div className='displayWord'>{displayWord}</div>
  )
}

export default Word