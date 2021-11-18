import React from 'react';

const WhoseTurnIsItAnyway = (props) => {
    if (props.turn === true) {
        return (
            <div className="whose-turn" ><h3>Blue Player is preparing to fire.</h3></div>
        )
    } else {
        return (
            <div className="whose-turn" ><h3>Red Player is preparing to fire.</h3></div>
        )
    }
}

export default WhoseTurnIsItAnyway;