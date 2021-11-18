import React from 'react';
import PlayerName from "./DisplayMessages/PlayerName";
import Board from "./Board/Board";
import ScoreCard from './ScoreCard';
import '../App.css';

export default function PlayerDashboard({ player, opponent, handleFire }) {
  // let player = name === "redPlayer" ? redPlayer : bluePlayer;

  return (
    <div>
      <PlayerName name={player.name} />
      <Board board={player.board} name={player.name} handleFire={handleFire} />
      <ScoreCard player={player} opponent={opponent} />
    </div>
  )
}

// Takes in a player object (redPlayer or BluePlayer) and outputs a board stacked on top of a scorecard