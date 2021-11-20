import React from 'react';

const Cruiser = (props) => {
    if (props.afloat === true) {
        return (<div className='cruiser' >Cruiser</div>)
    } else {
        return (<div className='cruiser' ><s>Cruiser</s></div>)
    }
}

export default Cruiser;