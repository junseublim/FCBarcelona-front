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
            <Route path="/match/previous">
                <MatchPage isDone={true}></MatchPage>
            </Route>
            <Route path="/match/upcoming">
                <MatchPage isDone={false}></MatchPage>
            </Route>
            <Route path="/match">
                <MatchPage isDone={undefined}></MatchPage>
            </Route>
        </Switch>
    )
}

export default MainPage;