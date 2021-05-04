import { get_squad } from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'

const GET_SQUAD = "squad/GET_SQUAD";
const GET_SQUAD_SUCCESS = "squad/GET_SQUAD_SUCCESS";
const GET_SQUAD_ERROR = "squad/GET_SQUAD_ERROR";

export const getSquad = () => ({ type: GET_SQUAD });


function* getSquadSaga() {
    try {
        const squad = yield call(get_squad);
        yield put({
            type: GET_SQUAD_SUCCESS,
            payload: squad
        });
    } catch (e) {
        yield put({
            type: GET_SQUAD_ERROR,
            error: true,
            payload: e
        });
    }
}

export function* squadSaga() {
    yield takeEvery(GET_SQUAD, getSquadSaga);
}

const initialState = {
    squad: {
        data: {},
        loading: true,
        error: null
    }
};

export default function squad(state = initialState, action) {
    switch (action.type) {
        case GET_SQUAD: {
            return {
                ...state,
                squad: {
                    ...state.squad,
                }
            }
        }
        case GET_SQUAD_SUCCESS: {

            return {
                ...state,
                squad: {
                    ...state.squad,
                    loading: false,
                    data: action.payload,
                }
            }
        }
        case GET_SQUAD_ERROR: {
            return {
                ...state,
                squad: {
                    ...state.squad,
                    loading: false,
                    error: action.payload,
                }
            }
        }
        default: {
            return state;
        }
    }
}