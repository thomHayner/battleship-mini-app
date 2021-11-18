import React from "react";
import Carrier from "./Ships/Carrier";
import Battleship from "./Ships/Battleship";
import Destroyer from "./Ships/Destroyer";
import Submarine from "./Ships/Submarine";
import Cruiser from "./Ships/Cruiser";
import '../App.css';

export default function ShipList({ ships, option }) {
  return (
    <div className={option === 0 ? "player-ship-list" : "enemy-ship-list" } >
      <div><strong>{option === 0 ? "My Ships:" : "Enemy Ships:"}</strong></div>
      <Carrier afloat={ships.carrierAfloat} />
      <Battleship afloat={ships.battleshipAfloat} />
      <Destroyer afloat={ships.cruiserAfloat} />
      <Submarine afloat={ships.submarineAfloat} />
      <Cruiser afloat={ships.destroyerAfloat} />
    </div>
  )
}