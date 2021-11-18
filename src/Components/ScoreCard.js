import React from "react";
import MessageBoard from "./MessageBoard";
import ShipList from "./ShipList";
import Shot from "./DisplayMessages/Shot";
import Sinking from "./DisplayMessages/Sinking";
import Winner from "./DisplayMessages/Winner";
import '../App.css';

export default function ScoreCard({ player, opponentShips }) {
  return (
    <div>
      <MessageBoard messages={player.messages} />
      <div className="ship-list-area" >
        <ShipList ships={opponentShips} option={0} />
        <div/>
        <ShipList ships={player.ships} option={1} />
      </div>
    </div>
  )
}
