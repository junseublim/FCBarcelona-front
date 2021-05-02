import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SquadListPage from './SquadListPage';
import MatchPage from './MatchPage';
import main_img from '../../static/img/main_img.webp'
const MainPage = () => {
    return (
        <Switch>
            <Route exact path="/">
                <div className="main-view">
                    <div className="img-wrapper">
                        <img src={main_img} alt="" className="main-img" />
                    </div>
                    <div className="article">
                        <div className="article-title">
                            Players to wear names in Chinese in build-up to game with Alavés
                        </div>
                    </div>
                </div>

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