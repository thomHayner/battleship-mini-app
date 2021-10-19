import React, { useState } from "react";
import Board from "../Components/Board/Board";
import fireControlHandler from "../Logic/FireControlHandler";

function ChooseGame() {
  const [playerBoard, setPlayerBoard] = useState(
    ["","1","2","3","4","5","6","7","8","9","10",],
    ["A",2,0,0,0,0,0,0,0,0,4],
    ["B",2,0,0,0,0,0,0,0,0,4],
    ["C",2,0,0,0,0,0,0,0,0,4],
    ["D",2,0,0,0,0,0,0,0,0,0],
    ["E",0,0,0,0,0,0,0,0,0,0],
    ["F",0,0,0,0,0,0,0,0,0,0],
    ["G",3,3,3,0,0,0,0,0,0,0],
    ["H",0,0,0,0,0,0,0,0,0,0],
    ["I",0,0,0,0,0,0,0,0,0,0],
    ["J",1,1,1,1,1,0,0,0,5,5]
  );
  const [playerName, setPlayerName] = useState("Player 1");
  
  return (
    <div>
      <Board board={playerBoard} player={playerName} handleFire={ fireControlHandler } />
    </div>
  )
}

export default ChooseGame