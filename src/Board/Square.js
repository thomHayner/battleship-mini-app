import React from 'react';

const Square = (props) => {
        if (typeof props.value === 'string') {
            return(<div className="index-square" >{props.value}</div>)
        } else if (props.value === -2) {
            return(<div className="confirmedMiss" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } ></div>)
        } else if (props.value === -1) {
            return(<div className="confirmedHit" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } ></div>)
        } else {
            return(<div className="square" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } ></div>)
        }
};

export default Square;