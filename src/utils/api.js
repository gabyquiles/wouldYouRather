import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA";

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

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(authedUser, qid, answer) {
    console.log(authedUser, qid, answer)
    return _saveQuestionAnswer(
        {
            authedUser,
            qid,
            answer
        }
    )
}