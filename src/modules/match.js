import { get_matches } from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'

const GET_MATCH = "match/GET_MATCH";
const GET_MATCH_SUCCESS = "match/GET_MATCH_SUCCESS";
const GET_MATCH_ERROR = "match/GET_MATCH_ERROR";

export const getMatch = () => ({ type: GET_MATCH });

function* getMatchSaga() {
    console.log('saga');
    try {
        const match = yield call(get_matches);
        console.log(match);
        yield put({
            type: GET_MATCH_SUCCESS,
            payload: match
        });
    } catch (e) {
        yield put({
            type: GET_MATCH_ERROR,
            error: true,
            payload: e
        });
    }
}
export function* matchSaga() {
    yield takeEvery(GET_MATCH, getMatchSaga);
}

const initialState = {
    match: {
        data: [],
        loading: false,
        error: null,
    }
};

export default function match(state = initialState, action) {
    switch (action.type) {
        case GET_MATCH: {
            return {
                ...state,
                match: {
                    ...state.match,
                    loading: true,
                }
            }
        }
        case GET_MATCH_SUCCESS: {
            return {
                ...state,

                match: {
                    ...state.match,
                    data: action.payload,
                }
            }
        }
        case GET_MATCH_ERROR: {
            return {
                ...state,
                match: {
                    ...state.match,
                    error: action.payload,
                }
            }
        }
        default: {
            return state;
        }
    }
}