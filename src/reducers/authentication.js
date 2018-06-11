import {AUTHENTICATE_USER, SIGN_OUT} from "../actions/authentication";

export default function authentication(state = {}, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return {
                ...state,
                authenticatedUser: action.id
            }
        case SIGN_OUT:
            return {
                ...state,
                authenticatedUser: action.id === state.authenticatedUser ? null : state.authenticatedUser
            }
    }

}