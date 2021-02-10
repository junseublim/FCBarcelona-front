import React, { useEffect, useState } from 'react';
import fcb_logo from '../../static/img/fcb_logo.png';

const tmp ={name: '바르셀로나', 
    matches: 21,
    wins: 13,
    draws: 4,
    loses: 4,
    points: 40,
    rank: 0
};
let newStanding = [];
for (let i = 0; i<20; i++) {
    let tmp2 = {...tmp};
    tmp2.points+=i;
    tmp2.rank= i+1;
    newStanding.push(tmp2);
}

const StandingList = () => {
    const [standing, setStanding] = useState(newStanding);
    return (
        
        <div className="standing-list">
        <div className="standing-header">
            <div>순위</div>
            <div>팀</div>
            <div>경기</div>
            <div>승</div>
            <div>무</div>
            <div>패</div>
            <div>승점</div>
        </div>
            {
        standing.map(team => {
            return (
                <div key={team.points} className="standing-item">
                    <div>{team.rank}</div>
                    <div><img src={fcb_logo} alt=""/>{team.name}</div>
                    <div>{team.matches}</div>
                    <div>{team.wins}</div>
                    <div>{team.draws}</div>
                    <div>{team.loses}</div>
                    <div>{team.points}</div>
                </div>
            )
            
        })}
        </div>
    )
};

export default StandingList;