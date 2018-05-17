export enum GameStatus {
  UNSTARTED = 'UNSTARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  WON = 'WON',
  LOST = 'LOST',
}

export interface GameState {
  gameStatus: GameStatus;
  attempt: number;
}
