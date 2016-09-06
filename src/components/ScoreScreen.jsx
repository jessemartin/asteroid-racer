import React from 'react'

const WinScreen = ({ startGame }) => (
  <div>
    <h1>WINNER!</h1>
    <button onClick={startGame}>Go again</button>
  </div>
)

const LoseScreen = ({ startGame }) => (
  <div>
    <h1>GAME OVER</h1>
    <button onClick={startGame}>Retry</button>
  </div>
)

const ScoreScreen = ({ gameWon, startGame }) => (
  <div className="menu">
    { gameWon ? <WinScreen startGame={startGame} /> : <LoseScreen startGame={startGame} /> }
  </div>
)

export default ScoreScreen
