import React from 'react';
import Square from '../Board/Square';
import { Draggable } from 'react-beautiful-dnd';

const ship = [3,3,3];

const Cruiser = (props) => {
    if (props.afloat === null) {
        return (
            <Draggable draggableId='cruiser' index={0} type='SHIP'>
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
        return (<div className='cruiser' >Cruiser</div>)
    } else {
        return (<div className='cruiser' ><s>Cruiser</s></div>)
    }
}

export default Cruiser;