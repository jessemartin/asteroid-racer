'use strict';

import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Character from '../classes/character';
import Finish from '../classes/finish';
import Mine from '../classes/mine';
import Movement from '../classes/movement';

require('./app.css');

let canvas;
const App = React.createClass({
  render() {
    return (
      <div className="app">
        <h1>App</h1>
        <div className="game">
          { this.getMsg() }
          { this.getStartBtn() }
          <canvas ref={(el) => canvas = el}></canvas>
        </div>
      </div>
    );
  },
  getStartBtn() {
    const hasPlayed = this.props.attempt > 0;
    if (!hasPlayed) {
      return <div className="menu"><button onClick={this.startGame}>Start</button></div>
    }
  },
  getMsg() {
    if (this.props.gameLost) {
      return <div className="menu">
        <h1>GAME OVER</h1>
        <button onClick={this.startGame}>Retry</button>
      </div>
    } else if (this.props.gameWon) {
      return <div className="menu">
        <h1>WINNER!</h1>
        <button onClick={this.startGame}>Go again</button>
      </div>
    }
  },
  startGame() {
    const ctx = canvas.getContext('2d');
    const mines = [
      { x: 85, y: 30 },
      { x: 140, y: 90 },
      { x: 20, y: 112 },
      { x: 150, y: 103 },
    ].map((opts) => new Mine(opts));

    const character = new Character();
    new Movement(character);

    const finish = new Finish();

    const step = (timestamp) => {
      const { width, height } = ctx.canvas;
      ctx.clearRect(0, 0, width, height);

      finish.draw(ctx);

      mines.forEach((mine) => {
        mine.draw(ctx);
        if (character.isOn(mine)) {
          character.kill();
        }
        if (character.isOn(finish)) {
          character.finish();
        }
      })

      character.draw(ctx);

      if (!character.isAlive) {
        window.cancelAnimationFrame(step);
        this.props.onGameLose();
        return;
      }
      if (character.hasReachedFinish) {
        window.cancelAnimationFrame(step);
        this.props.onGameWin();
        return;
      }
      window.requestAnimationFrame(step);
    };

    this.props.onGameStart();
    window.requestAnimationFrame(step);
  },
});

function mapStateToProps (state) {
  return {
    gameLost: state.game.isLost,
    gameWon: state.game.isWon,
    attempt: state.game.attempt,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onGameWin: () => {
      dispatch({ type: 'WIN_GAME' });
    },
    onGameLose: () => {
      dispatch({ type: 'LOSE_GAME' });
    },
    onGameStart: () => {
      dispatch({ type: 'START_GAME' });
    }
  };
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
