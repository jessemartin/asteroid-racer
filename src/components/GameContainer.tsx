import { connect, Dispatch } from 'react-redux';
import Game from './Game';
import { AppState } from '../data/types';
import { getAttempt, getGameStatus } from '../data/selectors/game';
import { winGame, loseGame, startGame } from '../data/actions/game';

const mapStateToProps = (state: AppState) => ({
  gameStatus: getGameStatus(state),
  attempt: getAttempt(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => ({
  onGameWin: () => {
    dispatch(winGame());
  },
  onGameLose: () => {
    dispatch(loseGame());
  },
  onGameStart: () => {
    dispatch(startGame());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
