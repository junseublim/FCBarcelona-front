import { call, put, takeEvery } from 'redux-saga/effects'


export default function createModule(name, api) {
    const upper = name.toUpperCase()
    const get = `${name}/GET_${upper}`
    const success = `${name}/GET_${upper}_SUCCESS`
    const error = `${name}/GET_${upper}_ERROR`
    const getAction = () => ({ type: get })
    function* getSaga() {
        try {
            const payload = yield call(api)
            yield put({
                type: success,
                payload: payload
            })
        } catch (e) {
            yield put({
                type: error,
                error: true,
                payload: e
            })
        }
    }
    function* Saga() {
        yield takeEvery(get, getSaga)
    }
    const initialState = {
        [name]: {
            data: [],
            loading: true,
            error: null
        }
    }
    function reducer(state = initialState, action) {
        switch (action.type) {
            case get: {
                return {
                    ...state,
                    [`${name}`]: {
                        ...state[`${name}`],
                    }
                }
            }
            case success: {

                return {
                    ...state,
                    [`${name}`]: {
                        ...state[`${name}`],
                        loading: false,
                        data: action.payload,
                    }
                }
            }
            case error: {
                return {
                    ...state,
                    [`${name}`]: {
                        ...state[`${name}`],
                        loading: false,
                        error: action.payload,
                    }
                }
            }
            default: {
                return state
            }
        }
    }
    return [getAction, Saga, reducer]
}




