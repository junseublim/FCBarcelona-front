import API from '../api/api'
import createGetModule from './lib/createGetModule'

const [getTeams, teamSaga, teamReducer] = createGetModule('teams', API.getTeams)

export { getTeams, teamSaga }

export default teamReducer
