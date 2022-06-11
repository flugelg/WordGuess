import React, { useState, useEffect } from 'react'

const Word = () => {
    const [word, setWord] = useState([]);

    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word")
        .then(res => res.json())
        .then(data => setWord(data))
    }, [])


       console.log(word.toString())
   
    

  return (
    <div>Word</div>
  )
}

export default Word