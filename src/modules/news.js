import API from '../api/api'
import createGetModule from './lib/createGetModule'

const [getNews, newsSaga, newsReducer] = createGetModule('news', API.getNews)

export { getNews, newsSaga }

export default newsReducer
