import React, { useState } from 'react';
import PlayerBoard from "../section/PlayerBoard";

function PlayerModal({ onSubmit }) {
    const [id, setId] = useState('');
    const [tier, setTier] = useState('');
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [mainPosition, setMainPosition] = useState('');
    const [mainChampions, setMainChampions] = useState('');
    const [subPosition, setSubPosition] = useState('');
    const [subChampions, setSubChampions] = useState('');
    const [etc, setEtc] = useState('');

    const handleSubmit = () => {
        onSubmit({
            id,
            tier,
            nickname,
            name,
            main_position: mainPosition,
            main_champions: mainChampions,
            sub_position: subPosition,
            sub_champions: subChampions,
            etc,
        });
    };

    return (
        <div className="modal">
            <label>
                Id:
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
            </label>
            <label>
                Tier:
                <input type="text" value={tier} onChange={e => setTier(e.target.value)} />
            </label>
            <label>
                Nickname:
                <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} />
            </label>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Main Position:
                <input type="text" value={mainPosition} onChange={e => setMainPosition(e.target.value)} />
            </label>
            <label>
                Main Champions:
                <input type="text" value={mainChampions} onChange={e => setMainChampions(e.target.value)} />
            </label>
            <label>
                Sub Position:
                <input type="text" value={subPosition} onChange={e => setSubPosition(e.target.value)} />
            </label>
            <label>
                Sub Champions:
                <input type="text" value={subChampions} onChange={e => setSubChampions(e.target.value)} />
            </label>
            <label>
                Etc:
                <input type="text" value={etc} onChange={e => setEtc(e.target.value)} />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}


export default PlayerModal;