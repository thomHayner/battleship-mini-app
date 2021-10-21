import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Square = (props) => {
        if (typeof props.value === 'string') {
            return(<div className="index-square" >{props.value}</div>)
        } else if (props.value === -2) {
            return(<div className="confirmedMiss" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } ></div>)
        } else if (props.value === -1) {
            return(<div className="confirmedHit" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } ></div>)
        } else if (props.value === -3) {
            return(
                <DragDropContext onDragEnd={result=>console.log(result)}>
                    <Droppable droppableId={`droppable-${props.row}${props.col}`} className="square">
                        {(provided, snapshot) => (
                            <div
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                            {...provided.droppableProps}
                            >
                            {provided.placeholder}
                            <div className="confirmedHit" onClick={ (e) => props.handleFire(()=>{}) } />
                        </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )
        }else {
            return(<div className="square" onClick={ (e) => props.handleFire( props.row, props.col, props.player ) } ></div>)
        }
};

export default Square;