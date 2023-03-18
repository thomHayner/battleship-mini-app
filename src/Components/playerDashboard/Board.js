import React from 'react';
import Square from './Elements/Square';

const Board = ({ matrix, playerId, handleFire }) => 
    <div className="matrix">
        {matrix.map( (i, row) => 
            matrix.map( (j, col) => (
                <Square 
                    key={[row, col]} 
                    value={matrix[row][col]} 
                    row={row} 
                    col={col} 
                    playerId={playerId} 
                    handleFire={handleFire} 
                />
            ))
        )}
    </div>;

export default Board;
