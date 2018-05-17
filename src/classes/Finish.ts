import Rectangle from './Rectangle';
import { Tangible } from './Tangible';
import { Drawable } from './Drawable';

export default class Finish implements Drawable, Tangible {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: string;

  constructor() {
    this.x = 150;
    this.y = 5;
    this.width = 20;
    this.height = 20;
    this.color = 'blue';
  }

  draw(ctx: CanvasRenderingContext2D) {
    return Rectangle.prototype.draw.call(this, ctx);
  }
}
