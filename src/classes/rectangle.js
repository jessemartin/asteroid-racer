export default class Reactangle {
  constructor({ x, y, size, color }) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }
  draw(ctx) {
    const { size, x, y, color } = this;
    const half = size / 2;
    ctx.fillStyle = color;
    ctx.fillRect(
      x - half,
      y - half,
      size,
      size
    );
  }
}
