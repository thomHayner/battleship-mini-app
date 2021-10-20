import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Board from "../Components/Board/Board";
import ShipPlacer from "../Logic/ShipPlacer";

function ChooseGame() {
  const [playerBoard, setPlayerBoard] = useState(
    [
      ["","1","2","3","4","5","6","7","8","9","10",],
      ["A",0,0,0,0,0,0,0,0,0,0],
      ["B",0,0,0,0,0,0,0,0,0,0],
      ["C",0,0,0,0,0,0,0,0,0,0],
      ["D",0,0,0,0,0,0,0,0,0,0],
      ["E",0,0,0,0,0,0,0,0,0,0],
      ["F",0,0,0,0,0,0,0,0,0,0],
      ["G",0,0,0,0,0,0,0,0,0,0],
      ["H",0,0,0,0,0,0,0,0,0,0],
      ["I",0,0,0,0,0,0,0,0,0,0],
      ["J",0,0,0,0,0,0,0,0,0,0]
    ]
  );
  const [playerName, setPlayerName] = useState("Player 1");
  
  return (
    <div>
      <DragDropContext>
        <div>
          <Board board={playerBoard} player={playerName} handleFire={ ShipPlacer } onHover={ ShipPlacer }  />
        </div>
        <div>

        </div>
      </DragDropContext>
    </div>
  )
}

export default ChooseGame