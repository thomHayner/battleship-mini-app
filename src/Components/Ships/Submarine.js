import React from 'react';
import Square from '../Board/Square';

const ship = [4,4,4];

const Submarine = (props) => {
    if (props.afloat === null) {
        return (<div> { ship.map(x=><Square/>) } </div>)
    }
    if (props.afloat === true) {
        return (<div className='submarine' >Submarine</div>)
    } else {
        return (<div className='submarine' ><s>Submarine</s></div>)
    }
}

export default Submarine;