import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './data/store/configureStore';
import { GameStatus } from './data/types';

const store = configureStore({
  game: {
    gameStatus: GameStatus.UNSTARTED,
    attempt: 0,
  },
});

const container = document.createElement('div');
container.className = 'container';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(container),
);
