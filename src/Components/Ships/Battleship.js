import React from 'react';
import Square from '../Board/Square';

const ship = [2,2,2,2]

const Battleship = (props) => {
    if (props.afloat === null) {
        return (
        <div>
            { ship.map(x=><Square/>) }
        </div>)
    }
    if (props.afloat === true) {
        return (<div className='battleship' >Battleship</div>)
    } else {
        return (<div className='battleship' ><s>Battleship</s></div>)
    }
}

export default Battleship;