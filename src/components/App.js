import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from "./Dashboard";
import Login from './Login/Login'
import PrivateRoute from './common/PrivateRoute'
import NewQuestion from './NewQuestion'
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared"
import Leaderboard from "./Leaderboard/Leaderboard"
import Question from './Question/Question'
import Registration from "./Registration/Registration";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Registration}/>
                    <PrivateRoute path="/" exact component={Dashboard}/>
                    <PrivateRoute path="/leaderboard" component={Leaderboard}/>
                    <PrivateRoute path="/add" component={NewQuestion}/>
                    <PrivateRoute path="/questions/:question_id" component={Question}/>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
//TODO: optimistic behavior
//TODO: Register new users
//TODO: add loading bar
//TODO: Show friendly message when page does not exist