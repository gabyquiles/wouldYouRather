import {combineReducers} from 'redux'
import authedUser from './authedUser'
import questions from './questions'
import users from './users'
import authentication from './authentication'

export default combineReducers({
    authedUser,
    questions,
    users,
    authentication
})