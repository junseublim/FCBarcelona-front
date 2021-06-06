import { get_teams } from '../api/api';
import createModule from './lib/createModule';

const [getTeams, teamSaga, teams] = createModule("teams", get_teams);

export { getTeams, teamSaga };
export default teams;