import API from '../api/api'
import createGetModule from './lib/createGetModule'

const [getMatches, matchSaga, matchReducer] = createGetModule('match', API.getMatches)

export { getMatches, matchSaga }

export default matchReducer
