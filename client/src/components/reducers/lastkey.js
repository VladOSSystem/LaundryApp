import {
    GET_LAST_USERS_KEY,
    GET_ERROR_USERS_KEY,
} from  '../actions/types'

const initialState = {
    lastUser: [],
    loading: true,
    error: {}
};
export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_LAST_USERS_KEY:
            return {
                ...state,
                lastUser: payload,
                loading: false
            };
        case GET_ERROR_USERS_KEY:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;   
    }
}