
const PlayerItem = ({item}) => {
    return (
                <div
                    className={'h-28 w-72 bg-gray-100 flex flex-col justify-between select-none cursor-grab border-2 border-black'}
                >
                    {/*해더*/}
                    <div className={'w-full flex justify-between'}>
                        {/*티어, 닉네임, 이름*/}
                        <div>{item.tier}</div>
                        <div>{item.nickname}</div>
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
                    <div>
                        {/*기타*/}
                        <div>{item.etc} {item.index}</div>
                    </div>
                </div>

    );
};

export default PlayerItem;