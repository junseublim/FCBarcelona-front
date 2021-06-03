import React, { useEffect, useState } from 'react';
import fcb_logo from '../../static/img/fcb_logo.png';
import { useSelector } from 'react-redux';

const StandingList = () => {
    const { teams } = useSelector(state => state.teams);
    const [mql, setMql] = useState(window.matchMedia('(max-width: 1355px)'));
    useEffect(() => {
        function debounce(timeout = 300) {
            let timer;
            return () => {
                clearTimeout(timer);
                timer = setTimeout(() => { setMql(window.matchMedia('(max-width: 1355px)')); console.log('debounce'); }, timeout);
            };
        }
        const resized = debounce();
        window.addEventListener("resize", resized);
        console.log('added event lsitenr')
    }, []);

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
                teams.data.map(team => {
                    return (
                        <div key={team.rank} className="standing-item">
                            <div>{team.rank}</div>
                            <div>{!mql.matches && <img src={team.image} alt="" />}{team.name}</div>
                            <div>{team.played}</div>
                            <div>{team.win}</div>
                            <div>{team.draw}</div>
                            <div>{team.lose}</div>
                            <div>{team.points}</div>
                        </div>
                    )

                })}
        </div>
    )
};

export default StandingList;