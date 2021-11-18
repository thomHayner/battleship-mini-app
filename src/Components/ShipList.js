import React from "react";
import Carrier from "./Ships/Carrier";
import Battleship from "./Ships/Battleship";
import Destroyer from "./Ships/Destroyer";
import Submarine from "./Ships/Submarine";
import Cruiser from "./Ships/Cruiser";
import '../App.css';

export default function ShipList({ player, option }) {
  return (
    <div className={option === 1 ? "player-ship-list" : "enemy-ship-list" } >
      <div><strong>{option === 1 ? "My Ships:" : "Enemy Ships:"}</strong></div>
      <Carrier afloat={player.carrierAfloat} />
      <Battleship afloat={player.battleshipAfloat} />
      <Destroyer afloat={player.cruiserAfloat} />
      <Submarine afloat={player.submarineAfloat} />
      <Cruiser afloat={player.destroyerAfloat} />
    </div>
  )
}
