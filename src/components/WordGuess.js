import React, {useState} from 'react'

const WordGuess = () => {
    const [letter, setLetter] = useState([]);
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


    const handleChange = (event) => {
        setLetter([...letter, event.target.value])
    }
    // console.log(letter)

    function handleLetterClick(e) {
        console.log(e.target.id)
    }

    const displayAlphabet= alphabet.map((letter)=> {
        return(
            <h2 className='displayLetters' key={letter} id={letter} onClick={handleLetterClick}>{letter}</h2>
        )
    })

  return (
    <div id='letterContainer'>
        {displayAlphabet}
    </div>
  )
}

export default WordGuess