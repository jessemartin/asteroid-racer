'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import configureStore from './store/configureStore';

const store = configureStore();

const container = document.createElement('div');
container.className = 'container';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(container)
);
