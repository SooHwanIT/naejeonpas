import { Droppable } from 'react-beautiful-dnd'
import React from "react";
import PlayerItem from "../item/PlayerItem";

const TeamList = ({list, listId}) => {
    return (
        <Droppable droppableId={listId}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={'h-full bg-gray-500 flex-1 flex flex-col justify-between'}>
                    <h3 className={'h-6 w-full bg-red-300 text-center border-x-2 border-black' }>{list.title}</h3>
                    <div className={' h-full w-full flex flex-col overflow-y-auto items-center'}>
                        {list.items.map((item, index) => (
                            <PlayerItem item ={item} index = {index}/>
                        ))}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>)
}

export default TeamList;