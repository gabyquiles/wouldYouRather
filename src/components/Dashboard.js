import React, {Component} from 'react'
import {connect} from 'react-redux'
import Poll from './Poll'

class Dashboard extends Component {
    render() {
        const {notAnsweredQIds, answeredQIds} = this.props
        return (
            <div>
                Probando a ver si esto funciona
                <h1>Funciono</h1>
                <h2>Unanswered</h2>
                <ul>
                    {notAnsweredQIds.map((questionId) => (
                        <li key={questionId}><Poll id={questionId}/></li>
                    ))}
                </ul>

                <h2>Answered</h2>
                <ul>
                    {answeredQIds.map((questionId) => (
                        <li key={questionId}><Poll id={questionId}/></li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, authentication}) {
    const user = authentication.authedUser


    const notAnsweredQuestions = Object.values(questions).filter((question) =>
        !question.optionOne.votes.includes(user) && !question.optionTwo.votes.includes(user))

    const answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user)
    )

    return {
        notAnsweredQIds: Object.values(notAnsweredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        answeredQIds: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
    }
}

export default connect(mapStateToProps)(Dashboard)