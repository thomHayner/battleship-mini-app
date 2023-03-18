import React from 'react';

const Carrier = (props) => {
    if (props.afloat === true) {
        return (<div className='carrier' >Aircraft Carrier</div>)
    } else {
        return (<div className='carrier' ><s>Aircraft Carrier</s></div>)
    }
}
export default Carrier;
