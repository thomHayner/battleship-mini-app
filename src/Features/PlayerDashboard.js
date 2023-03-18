import React from 'react';
import PlayerName from "../Components/playerDashboard/Elements/DisplayMessages/PlayerName";
import Board from "../Components/playerDashboard/Board";
import ScoreCard from '../Components/playerDashboard/ScoreCard';
import '../';

// Takes in a player object (redPlayer or BluePlayer) and outputs a game board stacked on top of a scorecard

export default function PlayerDashboard({ playerData, opponentShips, handleFire }) {
  return (
    <div className="player-dashboard" >
      <PlayerName name={playerData.name} />
      <Board matrix={playerData.matrix} playerId={playerData.id} handleFire={handleFire} />
      <ScoreCard playerData={playerData} opponentShips={opponentShips} />
    </div>
  )
}
