const GET_MATCH = "match/GET_MATCH";

export const getMatch = () => ({ type: GET_MATCH });

const initialState = {
    match: {}
};

export default function match(state = initialState, action) {
    switch (action.type) {
        case GET_MATCH: {
            console.log(action);
            return {
                ...state,
                match: action.payload
            }
        }
        default: {
            return state;
        }
    }
}