import React from "react";
import ShipList from "./ShipList";
import Shot from "./DisplayMessages/Shot";
import Sinking from "./DisplayMessages/Sinking";
import Winner from "./DisplayMessages/Winner";
import '../App.css';

export default function ScoreCard({ player, opponent }) {
  return (
    <div>
      <Shot shot={player.shot} />
      <Sinking sinking={player.sinking} />
      <Winner win={player.win} />
      <div className="ship-list-area" >
        <ShipList player={player} option={1} />
        <div/>
        <ShipList player={opponent} option={0} />
      </div>
    </div>
  )
}
