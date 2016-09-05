'use strict';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  game: function (state, action) {
    if (!state) {
      state = { isWon: false, isLost: false, attempt: 0 };
    }
    switch (action.type) {
      case 'WIN_GAME':
        return { isWon: true, isLost: false, attempt: state.attempt };
      case 'LOSE_GAME':
        return { isWon: false, isLost: true, attempt: state.attempt };
      case 'START_GAME':
        return { isWon: false, isLost: false, attempt: state.attempt + 1 };
      default:
        return { isWon: false, isLost: false, attempt: state.attempt };
    }
  }
});

export default rootReducer;
