import React, {Component} from 'react'
import {connect} from 'react-redux'

class PollSummary extends Component {
    render() {
        const {question} = this.props
        return (
            <div>
                <span>{question.optionOne.text} or {question.optionTwo.text}</span>
            </div>
        )
    }

}

function mapStateToProps({questions, authentication}, {id}) {
    const {authedUser} = authentication
    return {
        question: questions[id]
    }

}

export default connect(mapStateToProps)(PollSummary)