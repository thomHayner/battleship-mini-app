import React from 'react';
import Square from '../Board/Square';

const ship = [1,1,1,1,1];

const Carrier = (props) => {
    if (props.afloat === null) {
        return (<div> { ship.map(x=>[<Square/>]) } </div>)
    }
    if (props.afloat === true) {
        return (<div className='carrier' >Aircraft Carrier</div>)
    } else {
        return (<div className='carrier' ><s>Aircraft Carrier</s></div>)
    }
}
export default Carrier;
