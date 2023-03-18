import React from 'react';

const Submarine = (props) => {
    if (props.afloat === true) {
        return (<div className='submarine' >Submarine</div>)
    } else {
        return (<div className='submarine' ><s>Submarine</s></div>)
    }
}

export default Submarine;