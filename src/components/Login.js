import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../styles/Login.css'
import {handleGetUsers} from "../actions/shared"

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(handleGetUsers())
    }

    render() {
        return (
            <div>
                <div className="form-signin">
                    <h2 className="form-heading">Please sign in</h2>
                    <div className="form-group">
                        <label htmlFor="username" className="sr-name">User</label>
                        <select id="username" className="form-control">
                            {this.props.users.map((user) => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )
                            )}
                        </select>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.values(users).map((user) => {
            return ({
                id: user.id,
                name: user.name
            })
        })
    }
}

export default connect(mapStateToProps)(Login)