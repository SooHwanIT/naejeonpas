import { Droppable } from 'react-beautiful-dnd'
import React from "react";
import PlayerItem from "../item/PlayerItem";

const PlayerBoard = ({list, listId}) => {
    return (
        <Droppable droppableId={listId}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={'h-full w-[46rem] bg-gray-700 '}>
                    <h3>{list.title}</h3>
                    <div className={' w-[46rem] flex-1 flex flex-wrap justify-start overflow-y-auto'}>
                        {list.items.map((item, index) => (
                            <PlayerItem item ={item} index = {index}/>
                        ))}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>)
}

export default PlayerBoard;