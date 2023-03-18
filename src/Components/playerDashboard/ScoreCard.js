import React from "react";
import MessageBoard from "./MessageBoard";
import ShipList from "./ShipList";
import '../../App.css';

export default function ScoreCard({ playerData, opponentShips }) {
  return (
    <div className="scorecard" >
      <MessageBoard messages={playerData.messages} />
      <div className="ship-list-area" >
        <ShipList ships={opponentShips} option={0} />
        <div/>
        <ShipList ships={playerData.ships} option={1} />
      </div>
    </div>
  )
}
