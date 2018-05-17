import React, { SFC, Fragment } from 'react';

interface WinScreenProps {
  startGame(): void;
}

const WinScreen: SFC<WinScreenProps> = props => (
  <Fragment>
    <h1>WINNER!</h1>
    <button onClick={props.startGame}>Go again</button>
  </Fragment>
);

export default WinScreen;
