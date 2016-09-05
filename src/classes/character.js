import Rectangle from './rectangle';

export default class Character {
  constructor() {
    this.x = 150;
    this.y = 140;
    this.size = 10;
    this.color = 'green';
    this.speed = 3;
    this.isAlive = true;
    this.hasReachedFinish = false;
  }
  move(x, y) {
    if (!this.isAlive) {
      return;
    }
    this.x += x * this.speed;
    this.y += y * this.speed;
  }
  isOn(obj) {
    const { x, y, size } = this;
    const padding = size / 2;
    const objPadding = obj.size / 2;

    const collisionDistance = padding + objPadding;
    if (
      Math.abs(x - obj.x) < collisionDistance &&
      Math.abs(y - obj.y) < collisionDistance
    ) {
      return true;
    }
    return false;
  }
  kill() {
    this.color = 'red';
    this.isAlive = false;
  }
  finish() {
    this.hasReachedFinish = true;
  }
  draw(ctx) {
    return Rectangle.prototype.draw.call(this, ctx);
  }
}
