import React from 'react'
import LoseScreen from './LoseScreen.jsx'
import WinScreen from './WinScreen.jsx'

const ScoreScreen = ({ gameWon, startGame }) => (
  <div className="menu">
    { gameWon ? <WinScreen startGame={startGame} /> : <LoseScreen startGame={startGame} /> }
  </div>
)

export default ScoreScreen
