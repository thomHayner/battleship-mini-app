import React from 'react';
import Square from '../Board/Square';

const ship = [5,5];

const Destroyer = (props) => {
    if (props.afloat === null) {
        return (<div> { ship.map(x=><Square/>) } </div>)
    }
    if (props.afloat === true) {
        return (<div className='destroyer' >Destroyer</div>)
    } else {
        return (<div className='destroyer' ><s>Destroyer</s></div>)
    }
}

export default Destroyer;