import {AUTHENTICATE_USER, SIGN_OUT} from "../actions/authentication";

export default function authentication(state = {}, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return {
                ...state,
                authedUser: action.id
            }

        case SIGN_OUT:
            return {
                ...state,
                authedUser: null
            }
        default:
            return state
    }

}