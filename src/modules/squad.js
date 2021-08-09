import { get_squad } from '../api/api'
import createModule from './lib/createModule'

const [getSquad, squadSaga, squads] = createModule("squad", get_squad)

export { getSquad, squadSaga }
export default squads