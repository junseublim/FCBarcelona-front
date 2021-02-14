import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Squad from './Squad';
import main_img from '../../static/img/main_img.webp'
const MainPage = () => {
    return (
        <Switch>
            <Route exact path="/">
                <div className="main-view">
                    <div className="img-wrapper">
                        <img src={main_img} alt="" className="main-img"/>
                        <img src={main_img} alt="" className="blur-img"/>
                    </div>
                    <div className="article">
                        <div className="article-title">
                        Players to wear names in Chinese in build-up to game with Alavés
                        </div>
                    </div>
                    
                </div>
            </Route>
            <Route path="/squad">
                <Squad></Squad>
            </Route>
        </Switch>
    )
}

export default MainPage;