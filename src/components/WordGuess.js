import React, {useState} from 'react'

const WordGuess = ({wordToGuess, hiddenArray, setHiddenArray, setWaveHeight, waveHeight, setWrongGuess, wrongGuess}) => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    function handleLetterClick(e) {
        let upperCaseWord = wordToGuess.toUpperCase();
        let letterPicked = e.target.id;
        let guessArray = [...hiddenArray]
        console.log("letter picked: ",letterPicked);

        if(upperCaseWord.includes(letterPicked)){
            console.log("Word includes a: ", letterPicked)    
            let indices = [], i=-1;
            while((i=upperCaseWord.indexOf(letterPicked, i+1)) >= 0) indices.push(i);
            console.log("letter is at index: ", indices);

            const inputGuess = indices.map((letter)=> {
                guessArray.splice(letter, 1, letterPicked);
                setHiddenArray(guessArray);
              })
              console.log("guess array: ", guessArray)
        }
        else if(!wrongGuess.includes(letterPicked)){
            console.log(letterPicked,": is not in the word")
            setWaveHeight(waveHeight - 13.5);
            setWrongGuess([...wrongGuess, letterPicked])
        }
        else{
            console.log("You already picked that letter")
        }
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