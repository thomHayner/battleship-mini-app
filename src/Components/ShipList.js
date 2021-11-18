import Carrier from "./Ships/Carrier";
import Battleship from "./Ships/Battleship";
import Destroyer from "./Ships/Destroyer";
import Submarine from "./Ships/Submarine";
import Cruiser from "./Ships/Cruiser";

export default function ShipList({ name }) {
  return (
    <div className="enemy-ship-list" >
      <div><strong>Enemy Ships:</strong></div>
      <Carrier afloat={this.state.bluePlayer.carrierAfloat} />
      <Battleship afloat={this.state.bluePlayer.battleshipAfloat} />
      <Destroyer afloat={this.state.bluePlayer.cruiserAfloat} />
      <Submarine afloat={this.state.bluePlayer.submarineAfloat} />
      <Cruiser afloat={this.state.bluePlayer.destroyerAfloat} />
    </div>
  )
}
