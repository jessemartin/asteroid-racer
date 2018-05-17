import Asteroid from './Asteroid';

interface AsteroidFactoryOpts {
  ctx: CanvasRenderingContext2D;
}

export default class AsteroidFactory {
  private asteroids: {
    [key: number]: Asteroid;
  };
  private ctx: CanvasRenderingContext2D;

  constructor(opts: AsteroidFactoryOpts) {
    this.ctx = opts.ctx;
    this.asteroids = {};
  }

  addAsteroid() {
    if (!this.ctx) {
      return;
    }
    const id = Date.now();
    const asteroid = new Asteroid({
      onLeaveScreen: () => {
        asteroid.remove();
        delete this.asteroids[id];
      },
      canvas: this.ctx.canvas,
      x: Math.floor(Math.random() * this.ctx.canvas.width),
      y: 0,
      xSpeed: (Math.random() - 0.5) * 5,
      ySpeed: Math.random() * 5,
    });
    this.asteroids[id] = asteroid;
  }

  getAsteroids() {
    return this.asteroids;
  }
}
