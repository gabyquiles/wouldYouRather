import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import {Link} from 'react-router-dom'
import {handleAddUser} from "../../actions/users"

class Registration extends Component {

    state = {
        username: '',
        name: '',
        avatarURL: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {username, name, avatarURL} = this.state
        const {dispatch} = this.props

        dispatch(handleAddUser(username, name, avatarURL))
    }

    handleChange = (e) => {
        const field = e.target.id
        const value = e.target.value
        let newState = {}
        newState[field] = value
        this.setState(newState)
    }

    render() {
        return (
            <div>

                <Form onSubmit={this.handleSubmit} className="form-signin">
                    <h2 className="form-heading">Register</h2>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Username"
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Full Name</Label>
                        <Input
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="optionOne">Avatar URL</Label>
                        <Input
                            type="text"
                            id="avatarUrl"
                            placeholder="Avatar URL"
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit" id="_submit" name="_submit"
                            className="btn btn-lg btn-primary btn-block">Register</Button>
                    <Link to="/login">Login</Link>
                </Form>
            </div>
        )
    }
}

export default connect()(Registration)