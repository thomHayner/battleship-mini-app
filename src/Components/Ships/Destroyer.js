import React from 'react';
import Square from '../Board/Square';
import { Draggable } from 'react-beautiful-dnd';

const ship = [5,5];

const Destroyer = (props) => {
    if (props.afloat === null) {
        return (
            <Draggable draggableId='Destroyer' index={0} type='SHIP'>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        <div style={{ display: 'flex' }}>
                            { ship.map(x=>[<Square/>]) }
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
    if (props.afloat === true) {
        return (<div className='destroyer' >Destroyer</div>)
    } else {
        return (<div className='destroyer' ><s>Destroyer</s></div>)
    }
}

export default Destroyer;