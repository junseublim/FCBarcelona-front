import API from '../api/api'
import createGetModule from './lib/createGetModule'

const [getTransfers, transfersSaga, transfersReducer] = createGetModule('transfers', API.getTransfers)

export { getTransfers, transfersSaga }

export default transfersReducer
