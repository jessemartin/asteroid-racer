import { Movable } from './Movable';

const directions = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
};

const maxSpeed = 2;

const getAcceleration = (speed: number) => 0.2;

const getSpeed = (speed: number, direction: number) => {
  const acceleration = getAcceleration(speed);
  const b = acceleration * direction;
  if ((speed + b) * direction <= maxSpeed) {
    return speed += b;
  }
  return maxSpeed * direction;
};

export default class Movement {
  private xSpeed: number;
  private ySpeed: number;

  constructor(character: Movable) {
    this.xSpeed = 0;
    this.ySpeed = 0;

    document.addEventListener('keydown', evt => {
      switch (evt.which) {
        case directions.LEFT:
          this.xSpeed = getSpeed(this.xSpeed, -1);
          break;
        case directions.RIGHT:
          this.xSpeed = getSpeed(this.xSpeed, 1);
          break;
        case directions.UP:
          this.ySpeed = getSpeed(this.ySpeed, -1);
          break;
        case directions.DOWN:
          this.ySpeed = getSpeed(this.ySpeed, 1);
          break;
        default:
          break;
      }
    });

    setInterval(() => {
      character.move(this.xSpeed, this.ySpeed);
    }, 1);
  }
}
