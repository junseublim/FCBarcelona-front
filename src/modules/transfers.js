import { get_transfers } from '../api/api';
import createModule from './lib/createModule';

const [getTransfers, transfersSaga, transfers] = createModule("transfers", get_transfers);

export { getTransfers, transfersSaga };
export default transfers;