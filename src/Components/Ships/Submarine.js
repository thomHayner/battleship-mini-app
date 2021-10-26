import React from 'react';
import Square from '../Board/Square';
import { Draggable } from 'react-beautiful-dnd';

const ship = [[4],[4],[4]];

const Submarine = (props) => {
    if (props.afloat === null) {
        return (
            <Draggable draggableId='submarine' index={0} type='SHIP'>
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
        return (<div className='submarine' >Submarine</div>)
    } else {
        return (<div className='submarine' ><s>Submarine</s></div>)
    }
}

export default Submarine;