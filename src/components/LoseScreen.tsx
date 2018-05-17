import React, { SFC, Fragment } from 'react';

interface LoseScreenProps {
  startGame(): void;
}

const LoseScreen: SFC<LoseScreenProps> = props => (
  <Fragment>
    <h1>GAME OVER</h1>
    <button onClick={props.startGame}>Retry</button>
  </Fragment>
);

export default LoseScreen;
