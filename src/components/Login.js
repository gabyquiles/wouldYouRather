import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../styles/Login.css'
import {handleGetUsers} from "../actions/shared"
import {Button} from 'reactstrap'
import {authenticateUser} from "../actions/authentication"
import {Redirect} from 'react-router-dom'
import {isEmpty} from "../utils/helpers"

class Login extends Component {
    state = {
        username: '',
        isLogged: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {username} = this.state
        const {dispatch} = this.props

        if (username !== "") {
            dispatch(authenticateUser(username))
            this.setState(() => ({isLogged: true}))
        }
    }

    handleChange = (e) => {
        const username = e.target.value
        this.setState(() => ({username}))
    }

    componentDidMount() {
        this.props.dispatch(handleGetUsers())
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}}

        const {isLogged} = this.state

        if (isLogged === true) {
            return <Redirect to={from}/>
        }


        return (
            <div>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-heading">Please sign in</h2>
                    <div className="form-group">
                        <label htmlFor="username" className="sr-name">User</label>
                        <select id="username" className="form-control"
                                value={this.state.username}
                                onChange={this.handleChange}>
                            <option value='' disabled>Select</option>
                            {this.props.users.map((user) => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )
                            )}
                        </select>

                    </div>
                    <Button type="submit" id="_submit" name="_submit"
                            className="btn btn-lg btn-primary btn-block">Login</Button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users, authentication}) {
    return {
        users: Object.values(users).map((user) => {
            return ({
                id: user.id,
                name: user.name
            })
        }),
        isLogged: !isEmpty(authentication)
    }
}

export default connect(mapStateToProps)(Login)