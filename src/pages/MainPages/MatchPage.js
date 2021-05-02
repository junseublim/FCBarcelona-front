import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import fcb_logo from '../../static/img/fcb_logo.png';
const MatchPage = () => {
    const { match } = useSelector(state => state.match);
    console.log(match);
    return (
        <div className="match-table">
            {
                match.map((item) => (
                    <div className="match-box">
                        <div className="match-team">
                            <img src={fcb_logo} alt="" />
                        </div>
                        <div className="match-info">
                            <div className="team-name">{item.team}</div>
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