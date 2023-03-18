import React from 'react';
import PlayerName from "../Components/Elements/DisplayMessages/PlayerName";
import Board from "../Components/playerDashboard/Board";
import ScoreCard from '../Components/playerDashboard/ScoreCard';
import '../';

// Takes in a player object (redPlayer or BluePlayer) and outputs a game board stacked on top of a scorecard

export default function PlayerDashboard({ playerData, opponentShips, handleFire }) {
  return (
    <div className="player-dashboard" >
      <PlayerName name={playerData.name} />
      <Board board={playerData.board} playerId={playerData.id} handleFire={handleFire} />
      <ScoreCard playerData={playerData} opponentShips={opponentShips} />
    </div>
  )
}
