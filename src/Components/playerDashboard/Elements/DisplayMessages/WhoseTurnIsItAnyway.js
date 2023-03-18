import React from 'react';

const WhoseTurnIsItAnyway = (props) => {
    if (props.gameOver) {
        return (
            <div className="whose-turn" ><h3>Game Over</h3></div>
        )
    }
    if (props.turn === true) {
        return (
            <div className="whose-turn" ><h3>Computer is preparing to fire.</h3></div>
        )
    } else {
        return (
            <div className="whose-turn" ><h3>Player is preparing to fire.</h3></div>
        )
    }
}

export default WhoseTurnIsItAnyway;