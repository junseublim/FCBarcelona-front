import { combineReducers } from 'redux';
import squad, { squadSaga } from './squad';
import teams, { teamSaga } from './teams';
import match, { matchSaga } from './match';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    squad,
    match,
    teams
});
export function* rootSaga() {
    yield all([squadSaga(), matchSaga(), teamSaga()]);
}

export default rootReducer;