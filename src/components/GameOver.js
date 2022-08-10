import React from "react";

const GameOver = ({setWaveHeight, setWrongGuess, setRestartGame, setIsGameOver, restartGame}) => {

    const restart = () => {
        setWaveHeight(81)
        setWrongGuess([])
        setRestartGame(restartGame + 1)
        setIsGameOver(false)
    }

    return (
        <div id="game-over-container">
            <h1>YOU LOSE</h1>
            <button className="game-over-button" onClick={restart}>Play Again</button>
        </div>
    )
}

export default GameOver;