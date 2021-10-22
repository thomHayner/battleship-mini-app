import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Square = (props) => {
        if (props.afloat === null) {
            return 
        } else if (typeof props.value === 'string') {
            return(<div className="index-square" >{props.value}</div>)
        } else if (props.value === -2) {
            return <div className="confirmedMiss" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } />
        } else if (props.value === -1) {
            return <div className="confirmedHit" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } />
        } else if (props.value === -3) { // -3 is used for the droppables screen
            return(
                    <Droppable droppableId={`droppable-${props.row}-${props.col}`} type={'SHIP'} direction={'horizontal'}>
                        {(provided, snapshot) => (
                            <div
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? 'green' : 'grey' }}
                            {...provided.droppableProps}
                            {...provided.dragHandleProps} // is this necessary?
                            >
                                {provided.placeholder}
                                <div className="confirmedHit" onClick={ (e) => props.handleFire(()=>{}) } />
                            </div>
                        )}
                    </Droppable>
            )
        }  else {
            return <div className="square" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } />
        }
};

export default Square;