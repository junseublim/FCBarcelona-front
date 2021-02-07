import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fcb_logo from '../../static/img/fcb_logo.png';
const ListWrapper = styled.div`
    display:flex;
    flex-direction: column;
    font-size: 0.8rem;
    padding: 0.5rem;
`;

const ListItemWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr 1fr;
    div {
        display:flex;
        flex-direction: row;
        margin-right: 0.5rem;
        justify-self: center;
        align-items: center;
        img {
            width: 1.4rem;
            margin-right: 0.3rem;
        }
    }
    margin-top: 0.3rem;
`;

const ListHeader = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr 1fr;
    background-color: lightgrey;
    padding: 0.2rem;
    div {
        margin-right: 0.5rem;
        justify-self: center;
    }
`;

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
        
        <ListWrapper>
        <ListHeader>
            <div>순위</div>
            <div>팀</div>
            <div>경기</div>
            <div>승</div>
            <div>무</div>
            <div>패</div>
            <div>승점</div>
        </ListHeader>
            {
        standing.map(team => {
            return (
                <ListItemWrapper>
                    <div>{team.rank}</div>
                    <div><img src={fcb_logo} alt=""/>{team.name}</div>
                    <div>{team.matches}</div>
                    <div>{team.wins}</div>
                    <div>{team.draws}</div>
                    <div>{team.loses}</div>
                    <div>{team.points}</div>
                </ListItemWrapper>
            )
            
        })}
        </ListWrapper>
    )
};

export default StandingList;