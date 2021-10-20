import React from 'react';
import Square from '../Board/Square';

const ship = [3,3,3];

const Cruiser = (props) => {
    if (props.afloat === null) {
        return (<div style={{ display: 'flex' }}> { ship.map(x=><Square/>) } </div>)
    }
    if (props.afloat === true) {
        return (<div className='patrol-boat' >Cruiser</div>)
    } else {
        return (<div className='patrol-boat' ><s>Cruiser</s></div>)
    }
}

export default Cruiser;