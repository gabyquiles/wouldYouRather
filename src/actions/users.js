import {addUser} from "../utils/api"

export const RECEIVE_USERS = "RECEIVE_USERS"

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function handleAddUser(username, name, avatarURL) {
    console.log(username)
    return (dispatch, getState) => {
        console.log(username)
        return addUser({
            username,
            name,
            avatarURL
        })
            .then((users) => dispatch(receiveUsers(users)))
    }
}