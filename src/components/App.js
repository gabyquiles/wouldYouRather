import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from "./Dashboard";
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import NewQuestion from './NewQuestion'
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/" exact component={Dashboard}/>
                    <PrivateRoute path="/leaderboard" component={Dashboard}/>
                    <PrivateRoute path="/questions/add" component={NewQuestion}/>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
