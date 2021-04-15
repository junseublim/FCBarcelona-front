import React, { useEffect, useState } from 'react';
import messi from '../../static/img/messi.webp'
import axios from 'axios';
import { Link, Route, Router, useParams, Switch, useRouteMatch } from 'react-router-dom';
const SquadListGroupItem = ({ player }) => {

    return (
        <Link to={`/squadList/${player.position}s/${player.number}`}>
            <div className="squad-group-player">
                <img src={player.image} className="player-img" />
                <div className="player-info">
                    <div className="player-name">{player.name}</div>
                    <div className="player-number">{player.number}</div>
                </div>
            </div>
        </Link>
    )
}

const SquadListGroup = ({ group, groupName }) => {
    return (
        <div className="squad-list-group">
            <div className="squad-group-name">{groupName}</div>
            <div className="squad-group-playerlist">
                {group.map(player => (
                    <SquadListGroupItem player={player} />
                ))}
            </div>
        </div>
    )
}
const Squad = ({ players }) => {
    let { group, number } = useParams();
    let groupList = players[group];
    let player = groupList.find(p => p.number == number);
    return (
        <div className="squad-page">
            <div className="player-img-wrap">
                <img src={player.image} className="player-img" />
                <div className="player-name">{player.name}</div>
                <div className="player-info">
                    <div className="player-number">{player.number}</div>
                    <div className="player-stats">
                        {Object.keys(player.stats).map(s => (
                            <div className="stat-name"><div className="stat-num">{s}</div>{player.stats[s]}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
const SquadList = ({ players }) => {
    let { group } = useParams();
    console.log(group);
    console.log(players)
    return (
        <div className="squad-list">
            {group && <SquadListGroup group={players[group]} groupName={group} key={0} />}
            {!group && players && Object.keys(players).map((item, i) => (
                <SquadListGroup group={players[item]} groupName={item} key={i} />
            ))}
        </div>
    )
}

const SquadListPage = () => {
    let match = useRouteMatch();

    const [players, setPlayers] = useState({});
    useEffect(async () => {
        console.log('useEffect');
        await axios.get('http://localhost:5000/players').then((res) => {
            setPlayers(res.data);
            console.log(res.data);
        });
    }, []);
    return (
        <Switch>
            <Route path={`${match.path}/:group/:number`}>
                <Squad players={players} />
            </Route>
            <Route path={`${match.path}/:group`}>
                <SquadList players={players} />
            </Route>
            <Route exact path={`${match.path}/`}>
                {console.log('exact')}
                <SquadList players={players} />
            </Route>
        </Switch>
    )
}


export default SquadListPage;