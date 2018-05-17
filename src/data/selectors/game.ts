import { AppState } from '../types';

export const getAttempt = (state: AppState) => state.game.attempt;

export const getGameStatus = (state: AppState) => state.game.gameStatus;
