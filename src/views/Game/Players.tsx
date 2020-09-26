import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Row, Col } from 'antd';
import { selectors, PLAYER } from 'state';

const Players: React.FC = () => {
  const players = useSelector(selectors.playersList).filter(
    p => p.player_type === PLAYER
  );

  console.log(players);

  return (
    <div>
      <Row>
        {players.map(player => (
          <Col span={3} key={player.id}>
            <Card>
              <p>name: {player.name}</p>
              <p>state: {player.pick ? 'picked' : 'picking'}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Players;