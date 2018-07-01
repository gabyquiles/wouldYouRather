import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {Nav as BoostrapNav, Navbar, NavbarBrand, NavItem, NavLink as BootstrapNavLink} from 'reactstrap'

class Nav extends Component {
    render() {
        const {user} = this.props
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>{user.name}, Would You Rather...</NavbarBrand>
                <BoostrapNav>
                    <NavItem>
                        <BootstrapNavLink tag={NavLink} exact to="/">Dashboard</BootstrapNavLink>
                    </NavItem>
                    <NavItem>
                        <BootstrapNavLink tag={NavLink}
                                          to="/leaderboard">Leaderboard</BootstrapNavLink>
                    </NavItem>
                    <NavItem>
                        <BootstrapNavLink tag={NavLink} to="/questions/add">Add
                            Question</BootstrapNavLink>
                    </NavItem>
                    <NavItem>
                        <BootstrapNavLink tag={NavLink} to="/login">Signout</BootstrapNavLink>
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