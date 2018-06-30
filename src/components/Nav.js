import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {Nav as BoostrapNav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap'

class Nav extends Component {
    render() {
        const {user} = this.props
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>{user.name}, Would You Rather...</NavbarBrand>
                <BoostrapNav>
                    <NavItem>
                        <NavLink tag={Link} to="/">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/questions/add">Add Question</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/login">Signout</NavLink>
                    </NavItem>
                </BoostrapNav>
            </Navbar>
        )
    }
}

function mapStateToProps({authentication, users}) {
    const username = authentication.authedUser
    return {
        user: users[username]
    }
}

export default connect(mapStateToProps)(Nav)