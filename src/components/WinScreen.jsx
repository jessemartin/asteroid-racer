import React from 'react'

const WinScreen = ({ startGame }) => (
  <div>
    <h1>WINNER!</h1>
    <button onClick={startGame}>Go again</button>
  </div>
)

export default WinScreen
