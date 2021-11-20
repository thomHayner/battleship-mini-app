import React from 'react';
import Square from '../../Elements/Square';
import { Draggable } from 'react-beautiful-dnd';

const ship = [1,1,1,1,1];

const Carrier = (props) => {
    if (props.afloat === null) {
        return (
            <Draggable draggableId='carrier' index={0} type='SHIP'>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        <div style={{ display: 'flex' }}>
                            { ship.map(x=>[<Square value={5} afloat={null} />]) }
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
    if (props.afloat === true) {
        return (<div className='carrier' >Aircraft Carrier</div>)
    } else {
        return (<div className='carrier' ><s>Aircraft Carrier</s></div>)
    }
}
export default Carrier;