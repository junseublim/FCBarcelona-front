import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import fcb_logo from '../../static/img/fcb_logo.png';
const MatchPage = () => {
    const { match } = useSelector(state => state.match);
    const { teams } = useSelector(state => state.teams);

    if (match.loading || teams.loading) return null;
    return (
        <div className="match-table">
            {
                match.data.map((item) => (
                    <div className="match-box">
                        <div className="match-team">
                            <img src={teams.data.find(team => team._id === item.team).image} alt="" />
                        </div>
                        <div className="match-info">
                            <div className="team-name">{teams.data.find(team => team._id === item.team).name}</div>
                            <div className="match-detail">
                                <span>{item.date.slice(0, 10)}</span>
                                <span>{item.location}</span>
                                <span>{item.type}</span>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div>

    )
}

export default MatchPage;