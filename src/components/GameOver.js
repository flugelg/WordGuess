import React from "react";

const GameOver = ({setWaveHeight, setWrongGuess, setRestartGame, setIsGameOver, restartGame, didWin}) => {

    const restart = () => {
        setWaveHeight(81)
        setWrongGuess([])
        setRestartGame(restartGame + 1)
        setIsGameOver(false)
    }

    return (
        <div id="game-over-container">
            {didWin ? <h1>YOU WIN</h1> : <h1>YOU LOSE</h1>}
            <button className="game-over-button" onClick={restart}>Play Again</button>
        </div>
    )
}

export default GameOver;