import React, { SFC } from 'react';
import GameContainer from './GameContainer';
import './App.css';

const App: SFC = () => (
  <div className="app">
    <h1 className="app--header">Asteroid Racer</h1>
    <GameContainer />
  </div>
);

export default App;
