import React from 'react';
import fcb_logo from '../../static/img/fcb_logo.png';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const UpcomingItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    flex-direction: row; 
    justify-content: center;
    align-items: center; 
    padding: 1rem;
`;

const Team = styled.div`
    display: flex;
    flex-direction: column;
    width: 5rem;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    img {
        width: 3rem;
    }
`;

const MatchInfo = styled.div`
    grid-column: 1/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    width:100%;
    
`;
const VSWrapper = styled.div`
    justify-self: center;
`;

const UpcomingItem = ({ match }) => {
    const { teams } = useSelector(state => state.teams);
    const team = teams.find(item => item._id === match.team);
    return (
        <UpcomingItemWrapper>
            <Team>
                <img src={fcb_logo} alt="" />
                <div>FC Barcelona</div>
            </Team>
            <VSWrapper>VS</VSWrapper>
            <Team>
                <img src={team.image} alt="" />
                <div>{team.name}</div>
            </Team>
            <MatchInfo>
                <div>{match.location}</div>
                <div>{match.date.slice(0, 10)}</div>
                <div>{match.type}</div>
            </MatchInfo>
        </UpcomingItemWrapper>
    )
}

export default UpcomingItem;