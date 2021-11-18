
import ShipList from "./ShipList";

export default function ScoreCard({ name }) {
  let var1;
  let var2;

  if (name === "redPlayer") { 
    var1 = "redPlayer"
    var2 = "bluePlayer"
  } else {
    var1 = "bluePlayer"
    var2 = "redPlayer"
  }
  return (
    <div>
      <ShipList name={var1} />
      <div/>
      <ShipList name={var2} />
    </div>
  )
}
