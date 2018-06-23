import React, {Component} from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        const {questionsIds} = this.props
        return (
            <div>
                Probando a ver si esto funciona
                <h1>Funciono</h1>
                <ul>
                    {questionsIds.map((questionId) => (
                        <li key={questionId}>{questionId}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)