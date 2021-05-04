import { get_teams } from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'


const GET_TEAMS = "teams/GET_TEAMS";
const GET_TEAMS_SUCCESS = "teams/GET_TEAMS_SUCCESS";
const GET_TEAMS_ERROR = "teams/GET_TEAMS_ERROR";

export const getTeams = () => ({ type: GET_TEAMS });

function* getTeamSaga() {
    try {
        const teams = yield call(get_teams);
        yield put({
            type: GET_TEAMS_SUCCESS,
            payload: teams
        });
    } catch (e) {
        yield put({
            type: GET_TEAMS_ERROR,
            error: true,
            payload: e
        });
    }
}

export function* teamSaga() {
    yield takeEvery(GET_TEAMS, getTeamSaga);
}

const initialState = {
    teams: {
        data: [],
        loading: true,
        error: null
    }
};

export default function teams(state = initialState, action) {
    switch (action.type) {
        case GET_TEAMS: {
            return {
                ...state,
                teams: {
                    ...state.teams,
                }
            }
        }
        case GET_TEAMS_SUCCESS: {

            return {
                ...state,
                teams: {
                    ...state.teams,
                    loading: false,
                    data: action.payload,
                }
            }
        }
        case GET_TEAMS_ERROR: {
            return {
                ...state,
                teams: {
                    ...state.teams,
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