import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from "./Dashboard";
import Login from './Login'
import PrivateRoute from './PrivateRoute'

class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <ul>
                        <li><Link to="/">Dashboard
                        </Link></li>
                        <li><Link to="/login">SignOut</Link></li>
                    </ul>
                    {/*<Route path="/signout" />*/}
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/" exact component={Dashboard}/>
                </div>
            </Router>
        );
    }
}

export default App;
