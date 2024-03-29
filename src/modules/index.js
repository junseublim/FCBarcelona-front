import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import squad, { squadSaga } from './squad'
import teams, { teamSaga } from './teams'
import match, { matchSaga } from './match'
import news, { newsSaga } from './news'
import transfers, { transfersSaga } from './transfers'

const rootReducer = combineReducers({
  squad,
  match,
  teams,
  news,
  transfers
})

export function * rootSaga () {
  yield all([squadSaga(), matchSaga(), teamSaga(), newsSaga(), transfersSaga()])
}

export default rootReducer
