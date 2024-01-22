import {Draggable} from "react-beautiful-dnd";

const PlayerItem = ({item,index}) => {
    if (!item) {
        // item이 없는 경우 처리
        return null;
    }
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={'h-28 w-[14.5rem] bg-gray-100 flex flex-col justify-between select-none cursor-grab border-2 border-black mt-1 ml-0.5 p-0.5 rounded-xl transition-all duration-1000 ease-in-out'}
                >

                    {/*해더*/}
                    <div className={'w-full flex justify-center text-xl'}>
                        {/*티어, 닉네임, 이름*/}
                        <div>{item.nickname}</div>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div >{item.tier}</div>
                        <div>{item.name}</div>
                    </div>
                    {/*주라인*/}
                    <div className={'w-full flex justify-between'}>
                        {/*주라인, 챔프폭*/}
                        <div>{item.main_position}</div>
                        <div>{item.main_champions}</div>
                    </div>
                    {/*섭라인*/}
                    <div className={'w-full flex justify-between'}>
                        {/*섭라인, 챔프폭*/}
                        <div>{item.sub_position}</div>
                        <div>{item.sub_champions}</div>
                    </div>
                    {/*etc*/}
                    {/*<div>*/}
                    {/*    /!*기타*!/*/}
                    {/*    <div>{item.etc} {item.index}</div>*/}
                    {/*</div>*/}
                </div>
            )}
        </Draggable>
    );
};

export default PlayerItem;