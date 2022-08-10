import React, {useState} from 'react'
import Wave from 'react-wavify';
import pos1 from "../stickguy/pos_1.png";
import pos2 from "../stickguy/pos_2.png";
import pos3 from "../stickguy/pos_3.png";
import pos4 from "../stickguy/pos_4.png";
import pos5 from "../stickguy/pos_5.png";
import pos6 from "../stickguy/pos_6.png";
import pos7 from "../stickguy/pos_7.png";
import WordGuess from './WordGuess';


const Water = ({waveHeight, wrongGuess, didWin}) => {

    const posArr = [pos1, pos2, pos3, pos4, pos5, pos6];
    let i = 0;
    const [stickPos, setStickPos] = useState(pos1);

    // switch (wrongGuess.length) {
    //     case 0 :
    //         setStickPos(pos1);
    //         break;
    //     case 1 :
    //         setStickPos(pos2);
    //         break;
    //     default :
    //         setStickPos(pos1);
    // }
    
    console.log("didwni from water: ", didWin);


    return (
        <>
        <div id="wave" style={{'paddingTop': `${waveHeight}vh`}}>
        <div id="stick-guy-container">
            {
            wrongGuess.length === 0 ? <img className={didWin === false ? "lost-stick-guy" : "stick-guy"} src={pos1}></img> : null
        }
        {
            wrongGuess.length === 1 ? <img className={didWin === false ? "lost-stick-guy" : "stick-guy"} src={pos2}></img> : null
        }
        {
            wrongGuess.length === 2 ? <img className={didWin === false ? "lost-stick-guy" : "stick-guy"} src={pos3}></img> : null
        }
        {
            wrongGuess.length === 3 ? <img className={didWin === false ? "lost-stick-guy" : "stick-guy"} src={pos4}></img> : null
        }
        {
            wrongGuess.length === 4 ? <img className={didWin === false ? "lost-stick-guy" : "stick-guy"} src={pos5}></img> : null
        }
        {
            wrongGuess.length === 5 ? <img className={didWin === false ? "lost-stick-guy" : "stick-guy"} src={pos6}></img> : null
        }
         {
            wrongGuess.length === 6 ? <img className={didWin === false ? "lost-stick-guy" : "stick-guy"} src={pos7}></img> : null
        }

        </div>
        
            <Wave 
            style={{ zIndex: -1 }} 
            options={{ 
                speed: 0.4,
                amplitude: 10,
                points: 3
            }} 
            fill="#116EA0" />
        </div>
        </>
    )
}

export default Water