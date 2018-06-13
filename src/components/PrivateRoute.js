import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmpty} from "../utils/helpers";


const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={(props) => {
        return (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
        )
    }}/>
)

function mapStateToProps({authentication}) {
    return {
        isAuthenticated: !isEmpty(authentication)
    }
}

export default connect(mapStateToProps, null, null, {pure: false,})(PrivateRoute)