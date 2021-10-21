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
  const [playerName, setPlayerName] = useState("Player 1");
  
  return (
    <div style={{display: 'flex'}}>
      <DragDropContext onDragEnd={result=>console.log(result)}>
        {/* <Droppable droppableId={'droppable-1'}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
              {...provided.droppableProps}
            >
              <h2>I am a droppable!</h2> */}
              {/* <div> */}
                <Board board={playerBoard} player={playerName} handleFire={ ShipPlacer } onHover={ ShipPlacer }  />
              {/* </div> */}
              {/* {provided.placeholder}
            </div>
          )}
        </Droppable> */}
        <Droppable droppableId={'droppable-1'}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
              {...provided.droppableProps}
            >
              <h2>I am the Ship List droppable!</h2>
              <Draggable draggableId="draggable-1" index={0}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Carrier afloat={null} />
                    <p>Add in onClick to change orientation</p>
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="draggable-2" index={0}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <BattleShip afloat={null} />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="draggable-3" index={0}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Cruiser afloat={null} />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="draggable-4" index={0}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Submarine afloat={null} />
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
              <Draggable draggableId="draggable-5" index={0}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Destroyer afloat={null} />
                  </div>
                )}
              </Draggable>
              
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default ChooseGame