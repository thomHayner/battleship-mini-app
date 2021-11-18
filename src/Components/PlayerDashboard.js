import React from 'react';
import PlayerName from "./DisplayMessages/PlayerName";
import Board from "./Board/Board";
import Shot from "./DisplayMessages/Shot";
import Sinking from "./DisplayMessages/Sinking";
import Winner from "./DisplayMessages/Winner";
import ScoreCard from './ScoreCard';

export default function PlayerDashboard({ name }) {
  // let player = name === "redPlayer" ? redPlayer : bluePlayer;

  return (
    <div>
      <PlayerName name={this.state.bluePlayer.name} />
      <Board board={this.state.bluePlayer.board} player={this.state.bluePlayer.name} handleFire={ this.fireControlHandler } />
      <Shot shot={this.state.bluePlayer.shot} />
      <Sinking sinking={this.state.bluePlayer.sinking} />
      <Winner win={this.state.bluePlayer.win} />
      <ScoreCard />
    </div>
  )
}
