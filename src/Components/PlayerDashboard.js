import React from 'react';
import PlayerName from "./DisplayMessages/PlayerName";
import Board from "./Board/Board";
import ScoreCard from './ScoreCard';
import '../App.css';

// Takes in a player object (redPlayer or BluePlayer) and outputs a game board stacked on top of a scorecard

export default function PlayerDashboard({ player, opponentShips, handleFire }) {
  return (
    <div>
      <PlayerName name={player.name} />
      <Board board={player.board} name={player.name} handleFire={handleFire} />
      <ScoreCard player={player} opponentShips={opponentShips} />
    </div>
  )
}
