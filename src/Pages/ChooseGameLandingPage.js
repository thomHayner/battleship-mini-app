import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Board from "../Components/Board/Board";
import Carrier from "../Components/Ships/Carrier";
import Destroyer from "../Components/Ships/Destroyer";
import Cruiser from "../Components/Ships/Cruiser";
import Submarine from "../Components/Ships/Submarine";
import BattleShip from "../Components/Ships/Battleship";
import ShipPlacer from "../Logic/ShipPlacer";

function ChooseGame() {
  const [playerName, setPlayerName] = useState("Player 1");
  const [playerBoard, setPlayerBoard] = useState(
    [
      ["","1","2","3","4","5","6","7","8","9","10",],
      ["A",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["B",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["C",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["D",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["E",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["F",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["G",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["H",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["I",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      ["J",-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
    ]
  );
  const [playerShips, setPlayerShips] = useState(
    [
      [1,1,1,1,1],
      [2,2,2,2],
      [3,3,3],
      [4,4,4],
      [5,5]
    ]
  );
  
  return (
    <div style={{display: 'flex'}}>
      <DragDropContext 
        onBeforeCapture={result=>console.log(result)}
        onBeforeDragStart={result=>console.log(result)}
        onDragStart={result=>console.log(result)}
        onDragUpdate={result=>console.log(result)}
        onDragEnd={result=>console.log(result)}
      >
        <Board board={playerBoard} player={playerName} handleFire={ ShipPlacer } onHover={ ShipPlacer }  />
        <Droppable droppableId={'droppable-1'}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
              {...provided.droppableProps}
            >
              <h2>I am the Ship List droppable!</h2>
              <Carrier afloat={null} />
              <BattleShip afloat={null} />
              <Cruiser afloat={null} />
              <Submarine afloat={null} />
              <Destroyer afloat={null} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default ChooseGame