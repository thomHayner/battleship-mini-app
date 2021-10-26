import React from 'react';
import Square from '../Board/Square';
import { Draggable } from 'react-beautiful-dnd';

const ship = [2,2,2,2]

const Battleship = (props) => {
    if (props.afloat === null) {
        return (
            <Draggable draggableId='battleship' index={0} type='SHIP'>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        <div style={{ display: 'flex',  }}>
                            { ship.map(x=>[<Square value={5} afloat={null} />]) }
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
    if (props.afloat === true) {
        return (<div className='battleship' >Battleship</div>)
    } else {
        return (<div className='battleship' ><s>Battleship</s></div>)
    }
}

export default Battleship;