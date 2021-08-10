import API from '../api/api'
import createGetModule from './lib/createGetModule'

const [getSquad, squadSaga, squadReducer] = createGetModule('squad', API.getSquad)

export { getSquad, squadSaga }

export default squadReducer
