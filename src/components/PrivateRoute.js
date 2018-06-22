import React, {Fragment} from 'react'
import {Link, Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmpty} from "../utils/helpers";


const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={(props) => {
        return (
            isAuthenticated
                ?
                <Fragment>

                    <ul>
                        <li><Link to="/">Dashboard
                        </Link></li>
                        <li><Link to="/login">SignOut</Link></li>
                    </ul>

                    <Component {...props} />
                </Fragment>
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