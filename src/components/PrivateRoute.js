import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        props.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
)

function mapStateToProps({authedUser}) {
    return {
        isAuthenticated: authedUser !== null
    }
}

export default connect(mapStateToProps)(PrivateRoute)