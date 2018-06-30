import React, {Component} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {connect} from 'react-redux'
import Poll from './PollSummary'
import classnames from 'classnames';

class Dashboard extends Component {
    state = {
        activeTab: '1'
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const {notAnsweredQIds, answeredQIds} = this.props
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            Unanswered
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            Answered
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">

                        <ul>
                            {notAnsweredQIds.map((questionId) => (
                                <li key={questionId}><Poll id={questionId}/></li>
                            ))}
                        </ul>
                    </TabPane>
                    <TabPane tabId="2">
                        <ul>
                            {answeredQIds.map((questionId) => (
                                <li key={questionId}><Poll id={questionId}/></li>
                            ))}
                        </ul>
                    </TabPane>
                </TabContent>
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