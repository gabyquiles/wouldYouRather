import React, {Component} from 'react'
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
                        <NavLink href="/">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login">Signout</NavLink>
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