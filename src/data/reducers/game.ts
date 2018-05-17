import { GameAction } from '../actions/game';
import { GameState, GameStatus } from '../types';

const gameReducer = (state: GameState, action: GameAction) => {
  if (!state) {
    state = {
      gameStatus: GameStatus.UNSTARTED,
      attempt: 0,
    };
  }
  switch (action.type) {
    case 'WIN_GAME':
      return {
        gameStatus: GameStatus.WON,
        attempt: state.attempt,
      };
    case 'LOSE_GAME':
      return {
        gameStatus: GameStatus.LOST,
        attempt: state.attempt,
      };
    case 'START_GAME':
      return {
        gameStatus: GameStatus.IN_PROGRESS,
        attempt: state.attempt + 1,
      };
    default:
      return state;
  }
};

export default gameReducer;
