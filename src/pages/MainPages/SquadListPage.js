import React, { useEffect, useState } from 'react';
import messi from '../../static/img/messi.webp'
import axios from 'axios';
import { Link, Route, Router, useParams, Switch, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const SquadListGroup = ({ groupName }) => {
    const { squad } = useSelector(state => state.squad);
    return (
        <div className="squad-list-group">
            <div className="squad-group-name">{groupName}</div>
            <div className="squad-group-playerlist">
                {squad.data && groupName && squad.data[groupName].map(player => (
                    <SquadListGroupItem player={player} key={player.number} />
                ))}
            </div>
        </div>
    )
}
const Squad = () => {
    let { group, number } = useParams();
    const { squad } = useSelector(state => state.squad);

    let groupList = squad.data[group];
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

const SquadList = () => {
    let { group } = useParams();
    const { squad } = useSelector(state => state.squad);
    return (
        <div className="squad-list">
            {group && <SquadListGroup groupName={group} key={0} />}
            {!group && Object.keys(squad.data).map((item, i) => (
                <SquadListGroup group={squad.data[item]} groupName={item} key={i} />
            ))}
        </div>
    )
}

const SquadListPage = () => {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/:group/:number`}>
                <Squad />
            </Route>
            <Route path={`${match.path}/:group`}>
                <SquadList />
            </Route>
            <Route exact path={`${match.path}/`}>
                {console.log('exact')}
                <SquadList />
            </Route>
        </Switch>
    )
}


export default SquadListPage;