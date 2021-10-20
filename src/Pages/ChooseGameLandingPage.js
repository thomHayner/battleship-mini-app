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
    <div style={{display: 'flex'}}>
      <DragDropContext onDragEnd={result=>console.log(result)}>
        <Droppable droppableId={'droppable-1'}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
              {...provided.droppableProps}
            >
              <h2>I am a droppable!</h2>
              <div>
                <Board board={playerBoard} player={playerName} handleFire={ ShipPlacer } onHover={ ShipPlacer }  />
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId={'droppable-2'}>
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
                    <Cruiser afloat={true} />
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
                    <Submarine afloat={true} />
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
                    <Destroyer afloat={true} />
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