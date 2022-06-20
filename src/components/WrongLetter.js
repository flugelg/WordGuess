import React from 'react'

const WrongLetter = ({wrongGuess}) => {
  return (
    <div id="wrongLetterContainer">
        <h2 className='center'>Wrong Guesses</h2>
        <h3 id='wrongLetter' className='center'>{wrongGuess}</h3>
    </div>
  )
}

export default WrongLetter