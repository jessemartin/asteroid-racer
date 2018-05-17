import React, { Component } from 'react';
import AsteroidFactory from '../classes/AsteroidFactory';
import Character from '../classes/Character';
import Finish from '../classes/Finish';
import Movement from '../classes/Movement';
import Menu from './Menu';
import { GameStatus } from '../data/types';
import './Game.css';

interface GameProps {
  gameStatus: GameStatus;
  attempt: number;
  onGameStart(): void;
  onGameWin(): void;
  onGameLose(): void;
}

class Game extends Component<GameProps> {
  private requestId: number;
  private ctx: CanvasRenderingContext2D | null;

  constructor(props: any) {
    super(props);
    this.requestId = 0;
    this.ctx = null;
  }

  render() {
    const { gameStatus } = this.props;

    return (
      <div className="game">
        <canvas
          className="game--canvas"
          ref={el => {
            if (!el) {
              return;
            }
            this.ctx = el.getContext('2d');
          }}
          height={window.devicePixelRatio * 800}
          width={window.devicePixelRatio * 800}
        />
        <Menu gameStatus={gameStatus} startGame={() => this.startGame()} />
      </div>
    );
  }

  startGame() {
    const { ctx } = this;
    if (!ctx) {
      return;
    }

    const character = new Character();
    new Movement(character);

    const asteroidFactory = new AsteroidFactory({ ctx });

    const addAsteroidInterval = window.setInterval(() => {
      asteroidFactory.addAsteroid();
    }, 400);

    const finish = new Finish();

    const step = () => {
      const { width, height } = ctx.canvas;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = '#281d42';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#000';

      finish.draw(ctx);

      if (character.isOn(finish)) {
        character.finish();
      }

      const asteroids = asteroidFactory.getAsteroids();
      for (const id in asteroids) {
        const asteroid = asteroids[id];
        asteroid.draw(ctx);
        if (character.isOn(asteroid)) {
          character.kill();
        }
      }

      character.draw(ctx);

      if (!character.isAlive) {
        clearInterval(addAsteroidInterval);
        window.cancelAnimationFrame(this.requestId);
        return this.props.onGameLose();
      }
      if (character.hasReachedFinish) {
        clearInterval(addAsteroidInterval);
        window.cancelAnimationFrame(this.requestId);
        return this.props.onGameWin();
      }
      window.requestAnimationFrame(step);
    };

    this.props.onGameStart();
    this.requestId = window.requestAnimationFrame(step);
  }
}

export default Game;
