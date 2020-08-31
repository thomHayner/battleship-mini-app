import React from 'react';

const WhoseTurnIsItAnyway = (props) => {
    if (props.turn === true) {
        return (
            <div className="whose-turn" ><h3>Player 2 is preparing to fire.</h3></div>
        )
    } else {
        return (
            <div className="whose-turn" ><h3>Player 1 is preparing to fire.</h3></div>
        )
    }
}

export default WhoseTurnIsItAnyway;