import {_getQuestions, _getUsers} from "./_DATA";

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))

}

export function getUsers() {
    return Promise.all(
        [_getUsers()]
    ).then(([users]) => ({
        users
    }))
}

export function getQuestions() {
    return Promise.all((
        [_getQuestions()]
    )).then(([questions]) => ({
        questions
    }))

}