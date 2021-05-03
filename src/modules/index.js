import { combineReducers } from 'redux';
import squad from './squad';
import teams from './teams';
import match from './match';

const rootReducer = combineReducers({
    squad,
    match,
    teams
});

export default rootReducer;