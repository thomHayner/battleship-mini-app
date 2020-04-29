import React from 'react';

const Battleship = (props) => {
    if (props.afloat === true) {
        return (<div className='battleship' >Battleship</div>)
    } else {
        return (<div className='battleship' ><s>Battleship</s></div>)
    }
}

export default Battleship;