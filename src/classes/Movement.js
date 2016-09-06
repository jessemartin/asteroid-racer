const DIRECTIONS = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
};

export default class Movement {
  constructor(character) {
    document.addEventListener('keydown', (evt) => {
      switch (evt.which) {
        case DIRECTIONS.LEFT:
          character.move(-1, 0);
          break;
        case DIRECTIONS.RIGHT:
          character.move(1, 0);
          break;
        case DIRECTIONS.UP:
          character.move(0, -1);
          break;
        case DIRECTIONS.DOWN:
          character.move(0, 1);
          break;
        default:
          break;
      }
    });
  }
}
