import React from 'react';
import './square.css';

const Square = ({ value, ...props }) => {
  const StandardGameBoardSquareDiv = (tempClassName) => <div className={tempClassName} onClick={ (e) => props.handleFire(props.row, props.col, props.playerId) } />;
  
  if (typeof value === 'string') {
    return <div className="index-square" >{value}</div>
  } else if (value === -1) {
    return <div className="placement-square-fill" />
  } else if (value === -2) {
      let squareId = props.row * props.col;
    return(
      <div 
        className="placement-square-empty" 
        // onClick={ (e) => props.handleChangeDirection } 
        onDragEnter={e=>props.onDragEnter(e, squareId)} 
        onDragLeave={e=>props.onDragLeave(e, squareId)} 
        onDragOver={e=>props.onDragOver(e)} 
        onDrop={e=>props.onDrop(e, props.row, props.col)} 
      />
    )
  } else if (value === -3) {
    return StandardGameBoardSquareDiv("confirmed-hit")
  } else if (value === -4) {
    return StandardGameBoardSquareDiv("confirmed-miss")
  } else if (value > 0 && props.gameStart === false) {
    return StandardGameBoardSquareDiv("ship")
  } else {
    return StandardGameBoardSquareDiv("square")
  }
};

export default Square;
