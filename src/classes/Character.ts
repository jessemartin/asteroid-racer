import { Drawable } from './Drawable';
import { Tangible } from './Tangible';
import { Movable } from './Movable';
const CharacterImage = require('../../assets/images/Character.png');

export default class Character implements Drawable, Movable, Tangible {
  public image: HTMLImageElement;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public isAlive: boolean;
  public hasReachedFinish: boolean;

  constructor() {
    this.x = 800;
    this.y = 1500;
    this.width = 14;
    this.height = 18;
    this.isAlive = true;
    this.hasReachedFinish = false;
    this.image = document.createElement('img');
    this.image.src = `./${CharacterImage}`;
  }
  move(x: number, y: number) {
    if (!this.isAlive) {
      return;
    }
    this.x += x;
    this.y += y;
  }
  isOn(obj: Tangible) {
    const { x, y, width, height } = this;
    const verticalPadding = height / 2;
    const horizontalPadding = width / 2;
    const verticalObjPadding = obj.height / 2;
    const horizontalObjPadding = obj.width / 2;

    const verticalCollisionDistance = verticalPadding + verticalObjPadding;
    const horizontalCollisionDistance =
      horizontalPadding + horizontalObjPadding;
    if (
      Math.abs(x - obj.x) < horizontalCollisionDistance &&
      Math.abs(y - obj.y) < verticalCollisionDistance
    ) {
      return true;
    }
    return false;
  }
  kill() {
    this.isAlive = false;
  }
  finish() {
    this.hasReachedFinish = true;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.x - this.width / 2,
      this.y - this.height / 2,
    );
  }
}
