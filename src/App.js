import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
import PlayerItem from "./components/PlayerItem"; // 스타일 파일을 임포트합니다.

const initialData = {
  PlayerList: {
    id: 'PlayerList',
    title: 'Player List',
    items: [
      {
        id:'1',
        tier: '티어1',
        nickname: '닉네임1',
        name: '이름1',
        main_position: '주라인1',
        main_champions: '챔피언1',
        sub_position: '섭라인1',
        sub_champions: '챔피언1',
        etc: '기타 정보1',
      },
      {
        id:'2',
        tier: '티어1',
        nickname: '닉네임2',
        name: '이름1',
        main_position: '주라인1',
        main_champions: '챔피언1',
        sub_position: '섭라인1',
        sub_champions: '챔피언1',
        etc: '기타 정보1',
      },
      {
        id:'3',
        tier: '티어1',
        nickname: '닉네임3',
        name: '이름1',
        main_position: '주라인1',
        main_champions: '챔피언1',
        sub_position: '섭라인1',
        sub_champions: '챔피언1',
        etc: '기타 정보1',
      },
      // ... 나머지 플레이어 정보
    ]
  },
  PlayerBoard: {
    id: 'PlayerBoard',
    title: 'Player Board',
    items: [],
  },
  Team1: {
    id: 'Team1',
    title: 'Team 1',
    items: [],
  },
  Team2: {
    id: 'Team2',
    title: 'Team 2',
    items: [],
  },
  Team3: {
    id: 'Team3',
    title: 'Team 3',
    items: [],
  },
  Team4: {
    id: 'Team4',
    title: 'Team 4',
    items: [],
  },
};

const App = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceList = data[source.droppableId];
    const destinationList = data[destination.droppableId];

    if (source.droppableId === destination.droppableId) {
      // 같은 droppableId 내에서 이동하는 경우
      const reorderedItems = Array.from(sourceList.items);
      const [removed] = reorderedItems.splice(source.index, 1);
      reorderedItems.splice(destination.index, 0, removed);

      const newList = {
        ...sourceList,
        items: reorderedItems,
      };

      const newData = {
        ...data,
        [source.droppableId]: newList,
      };

      setData(newData);
    } else {
      // 다른 droppableId로 이동하는 경우
      const sourceItems = Array.from(sourceList.items);
      const destinationItems = Array.from(destinationList.items);
      const [removed] = sourceItems.splice(source.index, 1);

      destinationItems.splice(destination.index, 0, removed);

      const newSourceList = {
        ...sourceList,
        items: sourceItems,
      };

      const newDestinationList = {
        ...destinationList,
        items: destinationItems,
      };

      const newData = {
        ...data,
        [source.droppableId]: newSourceList,
        [destination.droppableId]: newDestinationList,
      };

      setData(newData);
    }
  };
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="container">
          {Object.keys(data).map((listId) => (
              <Droppable key={listId} droppableId={listId}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                    >
                      <h3>{data[listId].title}</h3>
                      {data[listId].items.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`item ${snapshot.isDragging ? 'dragging' : ''}`}
                                >
                                <PlayerItem item ={item} />
                                  {/*{item.nickname} - {item.name} - {item.main_position} - {item.main_champions} - {item.sub_position} - {item.sub_champions} - {item.etc}*/}
                                </div>
                            )}
                          </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                )}
              </Droppable>
          ))}
        </div>
      </DragDropContext>
  );
};

export default App;