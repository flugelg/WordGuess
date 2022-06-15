import React, { useState, useEffect } from 'react'

const Word = ({wordReceived}) => {
    const [word, setWord] = useState([]);
    let wordString;
    let unikey = 0;

    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word")
        .then(res => res.json())
        .then(data => handleFetch(data))
    }, [])


    const handleFetch = (fetchword) => {
      wordString = fetchword.toString();
      setWord([...wordString])
      console.log(fetchword)
      wordReceived(wordString)
    }

    const displayWord = word.map((letter)=> {
      return(
        <h2 className='wordLetter' id={letter} key={unikey+=1}>_</h2>
      )
    })
   
    console.log(word)

  return (
    <div className='displayWord'>{displayWord}</div>
  )
}

export default Word