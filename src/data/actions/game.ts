interface GameStatusAction {
  type: 'WIN_GAME' | 'LOSE_GAME' | 'START_GAME';
}

export type GameAction = GameStatusAction;

export const winGame: () => GameAction = () => ({ type: 'WIN_GAME' });

export const loseGame: () => GameAction = () => ({ type: 'LOSE_GAME' });

export const startGame: () => GameAction = () => ({ type: 'START_GAME' });
