import React from 'react';

const Destroyer = (props) => {
    if (props.afloat === true) {
        return (<div className='destroyer' >Destroyer</div>)
    } else {
        return (<div className='destroyer' ><s>Destroyer</s></div>)
    }
}

export default Destroyer;