import Rectangle from './rectangle';

export default class Finish {
  constructor() {
    this.x = 150;
    this.y = 5;
    this.size = 20;
    this.color = 'blue';
  }
  draw(ctx) {
    return Rectangle.prototype.draw.call(this, ctx);
  }
}
