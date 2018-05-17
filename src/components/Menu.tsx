import React, { SFC } from 'react';
import WinScreen from './WinScreen';
import LoseScreen from './LoseScreen';
import { GameStatus } from '../data/types';
import './Menu.css';

interface MenuProps {
  gameStatus: GameStatus;
  startGame(): void;
}

const getMenuContents = (props: MenuProps) => {
  switch (props.gameStatus) {
    case GameStatus.UNSTARTED:
      return <button onClick={props.startGame}>Start</button>;
    case GameStatus.WON:
      return <WinScreen startGame={props.startGame} />;
    case GameStatus.LOST: {
      return <LoseScreen startGame={props.startGame} />;
    }
    default:
      return null;
  }
};

const Menu: SFC<MenuProps> = props => (
  <div className="menu">{getMenuContents(props)}</div>
);

export default Menu;
