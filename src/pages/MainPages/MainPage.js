import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Squad from './Squad';

const MainPage = () => {
    return (
        <Switch>
            <Route exact path="/">
                <div>main</div>
            </Route>
            <Route path="/squad">
                <Squad></Squad>
            </Route>
        </Switch>
    )
}

export default MainPage;