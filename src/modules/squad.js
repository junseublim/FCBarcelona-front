const GET_SQUAD = "squad/GET_SQUAD";

export const getSquad = () => ({ type: GET_SQUAD });

const initialState = {
    squad: {}
};

export default function squad(state = initialState, action) {
    switch (action.type) {
        case GET_SQUAD: {
            console.log(action);
            return {
                ...state,
                squad: action.payload
            }
        }
        default: {
            return state;
        }
    }
}