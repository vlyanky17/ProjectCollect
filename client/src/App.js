import React, { Component } from 'react';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {authPage} from "./pages/authPage";
import {useAuth} from './auth.hook'
import {AuthContext} from './context/AuthContext'
import {useRoutes} from './routes'
import 'materialize-css'

class App extends Component {

    render() {
        const { login, logout } = useAuth(true)
        const routes = useRoutes(false)

        return (

        <Router>
        <div className="conteiner">
            {routes}
            </div>
            </Router>

    );
    }
}

export default App;
