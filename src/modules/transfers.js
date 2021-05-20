import { get_transfers } from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'


const GET_TRANSFERS = "transfers/GET_TRANSFERS";
const GET_TRANSFERS_SUCCESS = "transfers/GET_TRANSFERS_SUCCESS";
const GET_TRANSFERS_ERROR = "transfers/GET_TRANSFERS_ERROR";

export const getTransfers = () => ({ type: GET_TRANSFERS });

function* getTransferSaga() {
    try {
        const transfers = yield call(get_transfers);
        yield put({
            type: GET_TRANSFERS_SUCCESS,
            payload: transfers
        });
    } catch (e) {
        yield put({
            type: GET_TRANSFERS_ERROR,
            error: true,
            payload: e
        });
    }
}

export function* transfersSaga() {
    yield takeEvery(GET_TRANSFERS, getTransferSaga);
}

const initialState = {
    transfers: {
        data: [],
        loading: true,
        error: null
    }
};

export default function transfers(state = initialState, action) {
    switch (action.type) {
        case GET_TRANSFERS: {

            return {
                ...state,
                transfers: {
                    ...state.transfers,
                }
            }
        }
        case GET_TRANSFERS_SUCCESS: {
            return {
                ...state,
                transfers: {
                    ...state.transfers,
                    loading: false,
                    data: action.payload,
                }
            }
        }
        case GET_TRANSFERS_ERROR: {
            return {
                ...state,
                transfers: {
                    ...state.transfers,
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