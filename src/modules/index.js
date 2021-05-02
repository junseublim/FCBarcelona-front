import { combineReducers } from 'redux';
import squad, { squadSaga } from './squad';

const rootReducer = combineReducers({
    squad
});

export default rootReducer;