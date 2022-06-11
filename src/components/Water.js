import React, {useState} from 'react'
import Wave from 'react-wavify'
import WordGuess from './WordGuess';


const Water = () =>{
    const [waveHeight, setWaveHeight] = useState(74);

    const handleClick = () => {
        //waveDiv.style.setProperty('--wave-height', "80vh")
        setWaveHeight(waveHeight - 15)  
    }

    return (
        <div id="wave" style={{'paddingTop': `${waveHeight}vh`}}>
            <button onClick={handleClick}>this</button>
            <Wave 
            style={{ zIndex: -1 }} 
            options={{ 
                speed: 0.4,
                amplitude: 10,
                points: 3
            }} 
            fill="#116EA0" />
        </div>
    )
}

export default Water