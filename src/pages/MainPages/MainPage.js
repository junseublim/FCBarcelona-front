import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SquadListPage from './SquadListPage'
import MatchPage from './MatchPage'
import NewsPage from './NewsPage'
import TransferPage from './TransferPage'

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
            <Route path="/transfer/:season1/:season2">
                <TransferPage />
            </Route>
            <Route path="/transfer">
                <TransferPage />
            </Route>
            <Route path="/news">
                <div style={{ fontSize: 50, margin: "auto" }}>
                    Currently in development
                </div>
            </Route>
        </Switch>
    )
}

export default MainPage