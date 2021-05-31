import { get_news } from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'

const GET_NEWS = "news/GET_NEWS";
const GET_NEWS_SUCCESS = "news/GET_NEWS_SUCCESS";
const GET_NEWS_ERROR = "news/GET_NEWS_ERROR";

export const getNews = () => ({ type: GET_NEWS });

function* getNewsSaga() {
    try {
        const news = yield call(get_news);
        yield put({
            type: GET_NEWS_SUCCESS,
            payload: news
        });
    } catch (e) {
        yield put({
            type: GET_NEWS_ERROR,
            error: true,
            payload: e
        });
    }
}
export function* newsSaga() {
    yield takeEvery(GET_NEWS, getNewsSaga);
}

const initialState = {
    news: {
        data: [],
        loading: true,
        error: null,
    }
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state,
                news: {
                    ...state.news,

                }
            }
        }
        case GET_NEWS_SUCCESS: {
            return {
                ...state,
                news: {
                    ...state.news,
                    loading: false,
                    data: action.payload,
                }
            }
        }
        case GET_NEWS_ERROR: {
            return {
                ...state,
                news: {
                    ...state.news,
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