import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
import PlayerItem from "./components/item/PlayerItem";
import PlayerList from "./components/section/PlayerList";
import PlayerBoard from "./components/section/PlayerBoard";
import TeamList from "./components/section/TeamList"; // 스타일 파일을 임포트합니다.

const initialData = {
  PlayerList: {
    id: 'PlayerList',
    title: 'Player List',
    items: [
      {
        "id": "1",
        "tier": "마스터",
        "nickname": "비블럽",
        "name": "신진",
        "main_position": "원딜",
        "main_champions": "올챔",
        "sub_position": null,
        "sub_champions": null,
        "etc": "O"
      },
      {
        "id": "2",
        "tier": "마스터",
        "nickname": "neo28",
        "name": "네오",
        "main_position": "탑",
        "main_champions": "크산테,다리,세트",
        "sub_position": "정글",
        "sub_champions": "비에고",
        "etc": "O"
      },
      {
        "id": "4",
        "tier": "다이아",
        "nickname": "andy10277",
        "name": "수빈",
        "main_position": "미드",
        "main_champions": "아지르,오리,벡스,아칼리",
        "sub_position": "탑",
        "sub_champions": "아트,아칼리,",
        "etc": "OO"
      },
      {
        "id": "5",
        "tier": "다이아",
        "nickname": "츄르츄르",
        "name": "동훈",
        "main_position": "서폿",
        "main_champions": "세라핀,탐켄치,라칸,노틸",
        "sub_position": "원딜",
        "sub_champions": "사미라",
        "etc": "OO"
      },
      {
        "id": "6",
        "tier": "다이아",
        "nickname": "대농장주팜하니",
        "name": "진우",
        "main_position": "탑",
        "main_champions": "제이스,나르,요네",
        "sub_position": "서폿",
        "sub_champions": null,
        "etc": "OO"
      },
      {
        "id": "7",
        "tier": "에메랄드",
        "nickname": "개백정",
        "name": "민욱",
        "main_position": "정글",
        "main_champions": "카서스,자르반,바이",
        "sub_position": "미드",
        "sub_champions": "말자하,라이즈",
        "etc": "OO"
      },
      {
        "id": "9",
        "tier": "플레티넘",
        "nickname": "solem eclipse",
        "name": "운영",
        "main_position": "미드",
        "main_champions": "트페,탈론,오리",
        "sub_position": "탑",
        "sub_champions": "리븐,신지드",
        "etc": "OO"
      },
      {
        "id": "10",
        "tier": "에메랄드",
        "nickname": "다잘하마",
        "name": "대현",
        "main_position": "정글",
        "main_champions": "마오,브라이어,벨베스",
        "sub_position": "원딜",
        "sub_champions": "바루스",
        "etc": "OO"
      },
      {
        "id": "11",
        "tier": "에메랄드",
        "nickname": "kurum21",
        "name": "기성",
        "main_position": "원딜",
        "main_champions": "바루스,징크스,드븐",
        "sub_position": "탑",
        "sub_champions": "트런들",
        "etc": "O"
      },
      {
        "id": "12",
        "tier": "에메랄드",
        "nickname": "ieumsae",
        "name": "해준",
        "main_position": "원딜",
        "main_champions": "진,아펠,카이사,이즈",
        "sub_position": null,
        "sub_champions": null,
        "etc": "OOO"
      },
      {
        "id": "14",
        "tier": "다이아",
        "nickname": "은설아,낮여우",
        "name": "태민",
        "main_position": "정글",
        "main_champions": "리신,",
        "sub_position": "그브,",
        "sub_champions": null,
        "etc": "OO"
      },
      {
        "id": "15",
        "tier": "플레티넘",
        "nickname": "la carsa de papel",
        "name": "한승",
        "main_position": "원딜",
        "main_champions": "카이사,아펠,자야",
        "sub_position": "서폿",
        "sub_champions": "라칸",
        "etc": "O"
      },
      {
        "id": "17",
        "tier": "에메랄드",
        "nickname": "건들면무는놈",
        "name": "세현",
        "main_position": "탑",
        "main_champions": "아트,다리,올라프",
        "sub_position": "정글",
        "sub_champions": "케인,카직스,녹턴",
        "etc": "O"
      },
      {
        "id": "18",
        "tier": "플레티넘",
        "nickname": "maeo,sen pick",
        "name": "진호",
        "main_position": "탑",
        "main_champions": "세트,아칼리,카밀",
        "sub_position": "원딜",
        "sub_champions": "칼리,자야,이즈",
        "etc": "OO"
      },
      {
        "id": "19",
        "tier": "플레티넘",
        "nickname": "gayus",
        "name": "영재",
        "main_position": "서폿",
        "main_champions": "라칸,쓰레쉬,렐",
        "sub_position": null,
        "sub_champions": null,
        "etc": "O"
      },
      {
        "id": "20",
        "tier": "에메랄드",
        "nickname": "kjs0607",
        "name": "준수",
        "main_position": "미드",
        "main_champions": "흐웨이,르블랑,니코,조이,오리X",
        "sub_position": "서폿",
        "sub_champions": "레나타",
        "etc": "OO"
      },
      {
        "id": "22",
        "tier": "골드",
        "nickname": "하프515",
        "name": "재언",
        "main_position": "정글",
        "main_champions": "워윅,녹턴,비에고",
        "sub_position": null,
        "sub_champions": null,
        "etc": "X"
      },
      {
        "id": "23",
        "tier": "실버",
        "nickname": "대천사",
        "name": "세범",
        "main_position": "원딜",
        "main_champions": "시비르,미포,케틀",
        "sub_position": "서폿",
        "sub_champions": "룰루,노틸,카르마",
        "etc": "O(말 수 적음)"
      },
      {
        "id": "24",
        "tier": "실버",
        "nickname": "다솜",
        "name": "민재",
        "main_position": "미드",
        "main_champions": "사일,탈론,요네",
        "sub_position": "탑",
        "sub_champions": "XXXX",
        "etc": "O"
      },
      {
        "id": "25",
        "tier": "골드",
        "nickname": "밴들시티",
        "name": "지원",
        "main_position": "서폿",
        "main_champions": "라칸,렐,유틸X",
        "sub_position": null,
        "sub_champions": null,
        "etc": "O(목줄필요)"
      },
      {
        "id": "26",
        "tier": "골드",
        "nickname": "마카롱와플",
        "name": "태건",
        "main_position": "정글",
        "main_champions": "샤코,사일,탈론,비에고",
        "sub_position": "탑",
        "sub_champions": "세트",
        "etc": "XXX"
      },
      {
        "id": "28",
        "tier": "플레티넘",
        "nickname": "에녹",
        "name": "에녹",
        "main_position": "미드",
        "main_champions": "?",
        "sub_position": "탑",
        "sub_champions": "하딩,다리",
        "etc": "X"
      },
      {
        "id": "29",
        "tier": "브론즈",
        "nickname": "빡빡이",
        "name": "동주",
        "main_position": "탑",
        "main_champions": "다리,가렌",
        "sub_position": "서폿",
        "sub_champions": "알리,노틸",
        "etc": "O"
      },
      {
        "id": "30",
        "tier": "골드",
        "nickname": "풍아16",
        "name": "동찬",
        "main_position": "탑",
        "main_champions": "오른,말파,문도",
        "sub_position": "서폿",
        "sub_champions": "블츠,라칸",
        "etc": "O"
      },
      {
        "id": "31",
        "tier": "실버",
        "nickname": "revian",
        "name": "민혁",
        "main_position": "정글",
        "main_champions": "비에고",
        "sub_position": "탑",
        "sub_champions": "나르,일라",
        "etc": "O"
      },
      {
        "id": "33",
        "tier": "브론즈",
        "nickname": "기검사",
        "name": "주환",
        "main_position": "정글",
        "main_champions": "자크,",
        "sub_position": "세주)",
        "sub_champions": null,
        "etc": "OO"
      },
      {
        "id": "34",
        "tier": "실버",
        "nickname": "블랑망제",
        "name": "이준호",
        "main_position": "원딜",
        "main_champions": "미포,카이사",
        "sub_position": "서폿",
        "sub_champions": "올챔",
        "etc": "X"
      },
      {
        "id": "35",
        "tier": "골드",
        "nickname": "아타칸 플러스",
        "name": "수병",
        "main_position": "미드",
        "main_champions": "제라스",
        "sub_position": "원딜",
        "sub_champions": null,
        "etc": "O"
      },
      {
        "id": "36",
        "tier": "실버",
        "nickname": "우르곳 츄릅츄릅",
        "name": "지환",
        "main_position": "탑",
        "main_champions": "우르곳",
        "sub_position": "서폿",
        "sub_champions": "?",
        "etc": "O"
      },
      {
        "id": "38",
        "tier": "브론즈",
        "nickname": "raljun",
        "name": "김준호",
        "main_position": "탑",
        "main_champions": "그웬,일라,볼베",
        "sub_position": "서폿",
        "sub_champions": "블츠,파이크",
        "etc": "OO"
      },
      {
        "id": "39",
        "tier": "아이언",
        "nickname": "비활성화 계정",
        "name": "건하",
        "main_position": "정글",
        "main_champions": "케인,녹턴,워윅",
        "sub_position": null,
        "sub_champions": null,
        "etc": "OO"
      },
      {
        "id": "40",
        "tier": "골드",
        "nickname": "amethyst",
        "name": "수환",
        "main_position": "탑",
        "main_champions": "요릭",
        "sub_position": "미드",
        "sub_champions": "조이",
        "etc": "XX"
      },
      {
        "id": "41",
        "tier": "브론즈",
        "nickname": "포고",
        "name": "현정",
        "main_position": "탑",
        "main_champions": "쉔,",
        "sub_position": "말파)",
        "sub_champions": null,
        "etc": "X"
      }
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
  const [data, setData] = useState(initialData)
  const [isTeamActive, setIsTeamActive] = useState(false)

  const toggleTeams = () => {
    setIsTeamActive(!isTeamActive);
  }

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
        <div className={'w-screen h-screen bg-gray-200 flex'}>
          <div className={'h-full w-full flex flex-wrap flex-1'}>
            {isTeamActive ? (
                <div className={'h-full w-full flex'}>
                  <TeamList list={data.Team1} listId="Team1" />
                  <TeamList list={data.Team2} listId="Team2" />
                  <TeamList list={data.Team3} listId="Team3" />
                  <TeamList list={data.Team4} listId="Team4" />
                  <PlayerBoard list={data.PlayerBoard} listId="PlayerBoard" />
                </div>
            ) : (
                <>
                  <PlayerList list={data.PlayerList} listId="PlayerList" />
                  <PlayerBoard list={data.PlayerBoard} listId="PlayerBoard" />
                </>
            )}
          </div>
        </div>
        <button onClick={toggleTeams} className="fixed right-0 bottom-0 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isTeamActive ? '팀 활성화' : '팀 비활성화'}
        </button>
      </DragDropContext>
  );
};

export default App;