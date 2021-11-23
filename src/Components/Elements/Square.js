import React from 'react';

const Square = ({ value, row, col, playerId, ...props }) => {
  if (typeof value === 'string') {
    return <div className="index-square" >{value}</div>
  } else if (value === -1) {
    return(
      <div 
        className="placement-square-fill" 
        onDragStart={e=>props.onDragStart(e)} 
      />
    )
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
    return <div className="confirmed-hit" onClick={ (e) => props.handleFire(row, col, playerId) } />
  } else if (value === -4) {
    return <div className="confirmed-miss" onClick={ (e) => props.handleFire(row, col, playerId) } />
  } else if (value === -5) {
    return <div className="placement-square-draggable" />
  } else {
    return <div className="square" onClick={ (e) => props.handleFire(row, col, playerId) } />
  }
};

export default Square;
