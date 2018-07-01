import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, CardBody, CardSubtitle, CardTitle} from 'reactstrap'
import './Option.css'

class Option extends Component {
    render() {
        const {option, totalVotes, isVoted, showResults} = this.props
        const {text, votes} = option
        const numberVotes = votes.length
        const percentage = Math.round((numberVotes / totalVotes) * 100)
        return (
            <Card className={isVoted ? ("selected-option") : ''}>
                <CardBody>
                    <CardTitle>{text}</CardTitle>
                    {showResults === true &&
                    (<CardSubtitle>Numbero Of Votes: {numberVotes} ({percentage}%)</CardSubtitle>)
                    }
                </CardBody>
            </Card>
        )
    }
}

function mapStateToProps({authedUser}, {option}) {
    return {
        isVoted: option.votes.includes(authedUser)
    }
}

export default connect(mapStateToProps)(Option)