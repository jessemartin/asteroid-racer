import Rectangle from './Rectangle';

export default class Mine {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.size = 4;
    this.color = 'red';
    this.speed = Math.ceil(Math.random() * 2);
    this.xDir = Math.random() > 0.5 ? 1 : -1;
    this.moveInterval = setInterval(() => {
      this.x += this.xDir * this.speed;
      if (this.x <= 0 || this.x >= 300) {
        this.xDir *= -1;
        this.x += this.xDir * this.speed;
      }
    }, 10);
  }
  draw(ctx) {
    return Rectangle.prototype.draw.call(this, ctx);
  }
}
