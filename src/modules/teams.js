const GET_TEAMS = "teams/GET_TEAMS";

export const getTeams = () => ({ type: GET_TEAMS });

const initialState = {
    teams: []
};

export default function teams(state = initialState, action) {
    switch (action.type) {
        case GET_TEAMS: {
            console.log(action);
            return {
                ...state,
                teams: action.payload
            }
        }
        default: {
            return state;
        }
    }
}