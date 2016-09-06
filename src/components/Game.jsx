import React from 'react'
import { connect } from 'react-redux'
import Character from '../classes/Character'
import Finish from '../classes/Finish'
import Mine from '../classes/Mine'
import Movement from '../classes/Movement'
import ScoreScreen from './ScoreScreen.jsx'

let canvas
class Game extends React.Component {
  render() {
    const { gameLost, gameWon, attempt } = this.props
    const gameOver = gameLost || gameWon
    return (
      <div className="game">
        { gameOver ? <ScoreScreen gameWon={gameWon} startGame={this.startGame.bind(this)} /> : null }
        { this.getStartBtn() }
        <canvas ref={(el) => canvas = el}></canvas>
      </div>
    )
  }
  getStartBtn() {
    const hasPlayed = this.props.attempt > 0
    if (!hasPlayed) {
      return <div className="menu"><button onClick={this.startGame.bind(this)}>Start</button></div>
    }
  }
  startGame() {
    const ctx = canvas.getContext('2d')
    const mines = [
      { x: 85, y: 30 },
      { x: 140, y: 90 },
      { x: 20, y: 112 },
      { x: 150, y: 103 },
    ].map((opts) => new Mine(opts))

    const character = new Character()
    new Movement(character)

    const finish = new Finish()

    const step = (timestamp) => {
      const { width, height } = ctx.canvas
      ctx.clearRect(0, 0, width, height)

      finish.draw(ctx)

      mines.forEach((mine) => {
        mine.draw(ctx)
        if (character.isOn(mine)) {
          character.kill()
        }
        if (character.isOn(finish)) {
          character.finish()
        }
      })

      character.draw(ctx)

      if (!character.isAlive) {
        window.cancelAnimationFrame(step)
        return this.props.onGameLose()
      }
      if (character.hasReachedFinish) {
        window.cancelAnimationFrame(step)
        return this.props.onGameWin()
      }
      window.requestAnimationFrame(step)
    }

    this.props.onGameStart()
    window.requestAnimationFrame(step)
  }
}

function mapStateToProps (state) {
  return {
    gameLost: state.game.isLost,
    gameWon: state.game.isWon,
    attempt: state.game.attempt,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onGameWin: () => {
      dispatch({ type: 'WIN_GAME' })
    },
    onGameLose: () => {
      dispatch({ type: 'LOSE_GAME' })
    },
    onGameStart: () => {
      dispatch({ type: 'START_GAME' })
    }
  }
}

const ConnectedGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default ConnectedGame
