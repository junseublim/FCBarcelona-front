import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SquadListPage from './SquadListPage';
import MatchPage from './MatchPage';
import NewsPage from './NewsPage';

const MainPage = () => {
    return (
        <Switch>
            <Route exact path="/">
                <NewsPage></NewsPage>
            </Route>
            <Route path="/squadList">
                <SquadListPage></SquadListPage>
            </Route>
            <Route path="/match">
                <MatchPage></MatchPage>
            </Route>
        </Switch>
    )
}

export default MainPage;