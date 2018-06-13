import {AUTHENTICATE_USER, SIGN_OUT} from "../actions/authentication";

export default function authentication(state = {}, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return action.id

        case SIGN_OUT:
            return action.id === state.authenticatedUser ? null : state.authenticatedUser
        default:
            return state
    }

}