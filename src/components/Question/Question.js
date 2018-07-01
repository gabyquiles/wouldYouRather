import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row} from 'reactstrap'
import Option from "./Option";

class Question extends Component {
    render() {
        const {question, author, showResults} = this.props
        const {optionOne, optionTwo} = question
        const totalVotes = optionOne.votes.length + optionTwo.votes.length
        return (
            <div>
                <h1>Would you rather</h1>
                <Row>
                    <Option option={optionOne} totalVotes={totalVotes} showResults={showResults}/>
                    <Option option={optionTwo} totalVotes={totalVotes} showResults={showResults}/>
                </Row>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, props) {
    const {question_id} = props.match.params
    const question = questions[question_id]
    const user = users[authedUser]
    const author = users[question.author]

    return {
        question,
        author,
        showResults: Object.keys(user.answers).includes(question_id)
    }
}

export default connect(mapStateToProps)(Question)