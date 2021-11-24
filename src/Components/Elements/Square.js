import React from 'react';

const Square = ({ value, ...props }) => {
  const StandardGameBoardSquareDiv = (tempClassName) => <div className={tempClassName} onClick={ (e) => props.handleFire(props.row, props.col, props.playerId) } />;
  
  if (typeof value === 'string') {
    return <div className="index-square" >{value}</div>
  } else if (value === -1) {
    return <div className="placement-square-fill" />
  } else if (value === -2) {
    return(
      <div 
        className="placement-square-empty" 
        // onClick={ (e) => props.handleChangeDirection } 
        onDragEnter={e=>props.onDragEnter(e)} 
        onDragLeave={e=>props.onDragLeave(e)} 
        onDragOver={e=>props.onDragOver(e)} 
        onDrop={e=>props.onDrop(e)} 
      />
    )
  } else if (value === -3) {
    return StandardGameBoardSquareDiv("confirmed-hit")
  } else if (value === -4) {
    return StandardGameBoardSquareDiv("confirmed-miss")
  } else {
    return StandardGameBoardSquareDiv("square")
  }
};

export default Square;
