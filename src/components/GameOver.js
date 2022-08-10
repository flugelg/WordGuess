import React from "react";

const GameOver = ({setWaveHeight, setWrongGuess, setRestartGame, setIsGameOver, restartGame}) => {

    const restart = () => {
        setWaveHeight(81)
        setWrongGuess([])
        setRestartGame(restartGame + 1)
        setIsGameOver(false)
    }

    return (
        <>
            <h1>YOU LOSE</h1>
            <button className="game-over-button" onClick={restart}>Button 28</button>
        </>
    )
}

export default GameOver;