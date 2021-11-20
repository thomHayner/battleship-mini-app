import React from 'react';

const Square = ({ value, row, col, playerId, handleFire }) => {
        if (typeof value === 'string') {
            return <div className="index-square" >{value}</div>
        } else if (value === -2) {
            return <div className="confirmedMiss" onClick={ (e) => handleFire(row, col, playerId) } />
        } else if (value === -1) {
            return <div className="confirmedHit" onClick={ (e) => handleFire(row, col, playerId) } />
        } else {
            return <div className="square" onClick={ (e) => handleFire(row, col, playerId) } />
        }
};

export default Square;