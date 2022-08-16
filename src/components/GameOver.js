import React from "react";

const GameOver = ({setWaveHeight, setWrongGuess, setRestartGame, setIsGameOver, restartGame, didWin, setDidWin}) => {

    const restart = () => {
        setWaveHeight(81)
        setWrongGuess([])
        setRestartGame(restartGame + 1)
        setIsGameOver(false)
        setDidWin(undefined);
    }

    return (
        <div id="game-over-container">
            {didWin ? <div class="container">
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <h1 className="outcome" id="outcome-win">YOU WIN</h1>
                </div> : <h1 className="outcome" id="outcome-lose">YOU LOSE</h1>}
            <button className="game-over-button" onClick={restart}>Play Again</button>
        </div>
    )
}

export default GameOver;