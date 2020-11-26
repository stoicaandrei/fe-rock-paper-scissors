import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';

import { selectors } from 'state';

const Game: React.FC = () => {
  // const { timer } = useSelector(selectors.session);

  return (
    <div className="game defaultBg">
      <div className="actionBar">
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
      </div>
    </div>
  );
};

export default Game;