import { get_matches } from '../api/api'
import createModule from './lib/createModule'

const [getMatch, matchSaga, matches] = createModule("match", get_matches)

export { getMatch, matchSaga }
export default matches