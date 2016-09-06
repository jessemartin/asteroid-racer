import React from 'react'

const LoseScreen = ({ startGame }) => (
  <div>
    <h1>GAME OVER</h1>
    <button onClick={startGame}>Retry</button>
  </div>
)

export default LoseScreen
