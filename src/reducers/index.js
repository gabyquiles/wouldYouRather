import {combineReducers} from 'redux'
import questions from './questions'
import users from './users'
import authentication from './authentication'

export default combineReducers({
    questions,
    users,
    authentication
})