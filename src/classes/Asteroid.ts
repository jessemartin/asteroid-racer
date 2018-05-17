import { Drawable } from './Drawable';
import { Tangible } from './Tangible';
import { Movable } from './Movable';
const AsteroidImage = require('../../assets/images/Asteroid.png');

interface AsteroidOptions {
  onLeaveScreen: () => void;
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  xSpeed?: number;
  ySpeed?: number;
}

export default class Asteroid implements Drawable, Movable, Tangible {
  public width: number;
  public height: number;
  public x: number;
  public y: number;
  private moveInterval: NodeJS.Timer;
  private hasEnteredScreen: boolean;
  private hasLeftScreen: boolean;
  private image: HTMLImageElement;
  private xSpeed: number;
  private ySpeed: number;

  constructor(opts: AsteroidOptions) {
    this.x = opts.x;
    this.y = opts.y;
    this.width = 5;
    this.height = 5;
    this.xSpeed = opts.xSpeed || Math.random() * 4;
    this.ySpeed = opts.ySpeed || Math.random() * 4;
    this.hasEnteredScreen = false;
    this.hasLeftScreen = false;
    this.image = new Image();
    this.image.src = `./${AsteroidImage}`;

    this.moveInterval = setInterval(() => {
      this.move();
      const inHorizontalBounds = this.x > 0 && this.x < opts.canvas.width;
      const inVerticalBounds = this.y > 0 && this.y < opts.canvas.height;
      if (inHorizontalBounds && inVerticalBounds) {
        this.hasEnteredScreen = true;
      } else if (this.hasEnteredScreen && !this.hasLeftScreen) {
        opts.onLeaveScreen();
        this.hasLeftScreen = true;
      }
    }, 10);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.x - this.width / 2,
      this.y - this.height / 2,
    );
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  remove() {
    clearInterval(this.moveInterval);
  }
}
