import React from "react";
import Carrier from "../Elements/Ships/Carrier";
import Battleship from "../Elements/Ships/Battleship";
import Destroyer from "../Elements/Ships/Destroyer";
import Submarine from "../Elements/Ships/Submarine";
import Cruiser from "../Elements/Ships/Cruiser";
import '../../App.css';

export default function ShipList({ ships, option }) {
  return (
    <div className={option === 0 ? "player-ship-list" : "enemy-ship-list" } >
      <ul>
        <div><strong>{option === 0 ? "My Ships:" : "Enemy Ships:"}</strong></div>
        <li><Carrier afloat={ships.carrierAfloat} /></li>
        <li><Battleship afloat={ships.battleshipAfloat} /></li>
        <li><Cruiser afloat={ships.cruiserAfloat} /></li>
        <li><Submarine afloat={ships.submarineAfloat} /></li>
        <li><Destroyer afloat={ships.destroyerAfloat} /></li>
      </ul>
    </div>
  )
}
