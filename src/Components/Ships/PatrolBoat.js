import React from 'react';

const PatrolBoat = (props) => {
    if (props.afloat === true) {
        return (<div className='patrol-boat' >Patrol Boat</div>)
    } else {
        return (<div className='patrol-boat' ><s>Patrol Boat</s></div>)
    }
}

export default PatrolBoat;