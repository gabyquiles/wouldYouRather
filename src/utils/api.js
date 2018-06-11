import {_getUsers} from "./_DATA";

export function getUsers() {
    return Promise.all(
        [_getUsers()]
    ).then(([users]) => ({
        users
    }))
}