import React, {useState} from 'react'
import Wave from 'react-wavify'
import WordGuess from './WordGuess';


const Water = ({waveHeight}) =>{

    return (
        <div id="wave" style={{'paddingTop': `${waveHeight}vh`}}>
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