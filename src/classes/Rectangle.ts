interface RectangleOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

export default class Rectangle {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: string;

  constructor(opts: RectangleOptions) {
    this.x = opts.x;
    this.y = opts.y;
    this.width = opts.width;
    this.height = opts.height;
    this.color = opts.color;
  }
  draw(ctx: CanvasRenderingContext2D) {
    const { width, height, x, y, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x - width / 2, y - height / 2, width, width);
  }
}
