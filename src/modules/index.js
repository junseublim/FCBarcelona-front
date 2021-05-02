import { combineReducers } from 'redux';
import squad from './squad';
import match from './match';

const rootReducer = combineReducers({
    squad,
    match
});

export default rootReducer;