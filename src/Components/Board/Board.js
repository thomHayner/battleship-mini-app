import React from 'react';
import Square from './Square.js';

const Board = ({ board, playerId, handleFire }) => 
    <div className="board" >
        {board.map( (i, row) => 
            board.map( (j, col) => (
                <Square 
                    key={[row, col]} 
                    value={board[row][col]} 
                    row={row} 
                    col={col} 
                    playerId={playerId} 
                    handleFire={handleFire} 
                />
            ))
        )}
    </div>;

export default Board;
