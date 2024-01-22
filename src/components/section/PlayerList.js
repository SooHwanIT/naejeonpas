import { Droppable } from 'react-beautiful-dnd'
import React from "react";
import PlayerItem from "../item/PlayerItem";

const PlayerList = ({list, listId}) => {
    return (
        <Droppable droppableId={listId}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={'h-full flex-1 bg-gray-500 '}>
                    <h3>{list.title}</h3>
                    <div className={'flex-1 flex flex-wrap justify-start overflow-y-auto'}>
                        {list.items.map((item, index) => (
                            <PlayerItem item ={item} index = {index}/>
                        ))}
                        {provided.placeholder} {/* 이 부분을 이동 */}
                    </div>
                </div>
            )}
        </Droppable>)
}


export default PlayerList;