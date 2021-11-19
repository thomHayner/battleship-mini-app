import React from 'react';
import PlayerName from "./DisplayMessages/PlayerName";
import Board from "./Board/Board";
import ScoreCard from './ScoreCard';
import '../App.css';

// Takes in a player object (redPlayer or BluePlayer) and outputs a game board stacked on top of a scorecard

export default function PlayerDashboard({ playerData, opponentShips, handleFire }) {
  return (
    <div>
      <PlayerName name={playerData.name} />
      <Board board={playerData.board} playerId={playerData.id} handleFire={handleFire} />
      <ScoreCard playerData={playerData} opponentShips={opponentShips} />
    </div>
  )
}
