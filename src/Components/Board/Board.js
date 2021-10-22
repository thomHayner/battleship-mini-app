import React from 'react';
import Square from './Square.js';

const Board = (props) => 
    <div className="board" >
        {props.board.map( (i, row) => 
            props.board.map( (j, col) => <Square 
                                            key={[row, col]} 
                                            value={props.board[row][col]} 
                                            row={row} 
                                            col={col} 
                                            player={props.player} 
                                            handleFire={props.handleFire} 
                                        />)
        )}
    </div>;

export default Board;