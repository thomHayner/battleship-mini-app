import React from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Square = (props) => {
        if (props.afloat === null) {
            return <div className="square" />
        } else if (typeof props.value === 'string') {
            return <div className="index-square" >{props.value}</div>
        } else if (props.value === -2) {
            return <div className="confirmedMiss" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } />
        } else if (props.value === -1) {
            return <div className="confirmedHit" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } />
        } else {
            return <div className="square" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } />
        }
};

export default Square;